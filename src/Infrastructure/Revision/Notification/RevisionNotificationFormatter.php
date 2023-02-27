<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision\Notification;

use Fau\DegreeProgram\Application\Revision\RevisionNotificationRepository;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer;
use Fau\DegreeProgram\Infrastructure\Repository\RevisionMetaRepository;
use LogicException;
use WP_Post;

final class RevisionNotificationFormatter
{
    public function __construct(
        private Renderer $renderer,
        private RevisionDiff $revisionDiff,
        private RevisionNotificationRepository $revisionNotificationRepository,
        private RevisionMetaRepository $revisionMetaRepository,
    ) {
    }

    /**
     * @psalm-param array<int, array<int>> $revisions
     */
    public function formattedHtml(array $revisions): string
    {
        /** @var array<string, string> $cache */
        static $cache = [];
        $key = json_encode($revisions);
        if ($key && isset($cache[$key])) {
            return $cache[$key];
        }

        $lastRun = $this->revisionMetaRepository->notificationRunTimestamp();
        $lastRunFormattedDateTime = self::formatDateTime($lastRun);

        $result = $this->renderer->render('summary', [
            'last_run_formatted_date_time' => $lastRunFormattedDateTime,
            'changed_degree_programs' => $this->formatDegreePrograms($revisions),
        ]);
        if (!$key) {
            return $result;
        }

        $cache[$key] = $result;
        return $cache[$key];
    }

    /**
     * @psalm-param array<int, array<int>> $revisions
     */
    private function formatDegreePrograms(array $revisions): array
    {
        $result = [];
        foreach ($revisions as $degreeProgramId => $revisionIds) {
            $degreeProgram = $this->formatDegreeProgram($degreeProgramId);
            $degreeProgram['revisions'] = [];
            foreach ($revisionIds as $revisionId) {
                $degreeProgram['revisions'][] = $this->formatRevision(
                    $degreeProgramId,
                    $revisionId
                );
            }

            $result[] = $degreeProgram;
        }

        return $result;
    }

    private function formatDegreeProgram(int $degreeProgramId): array
    {
        return [
            'id' => $degreeProgramId,
            'title' => get_the_title($degreeProgramId),
            'link' => get_the_permalink($degreeProgramId),
        ];
    }

    private function formatRevision(int $degreeProgramId, int $revisionId): array
    {
        $previousRevision = $this->revisionNotificationRepository
            ->findPreviousRevision($degreeProgramId, $revisionId);
        $revisionPost = get_post($revisionId);
        if (!$revisionPost instanceof WP_Post) {
            throw new LogicException('Revision ID is not valid.');
        }

        return [
            'date' => self::formatDateTime((int) strtotime($revisionPost->post_modified)),
            'author' => get_the_author_meta('display_name', (int) $revisionPost->post_author),
            'link' => add_query_arg(['revision' => $revisionId], admin_url('revision.php')),
            'diffs' => $this->revisionDiff->diff($degreeProgramId, $previousRevision, $revisionId),
        ];
    }

    private static function formatDateTime(int $timestamp): string
    {
        if ($timestamp === 0) {
            return '';
        }

        $dateTimeFormat = sprintf(
            '%s %s',
            (string) get_option('date_format'),
            (string) get_option('time_format')
        );

        return (string) wp_date($dateTimeFormat, $timestamp);
    }
}
