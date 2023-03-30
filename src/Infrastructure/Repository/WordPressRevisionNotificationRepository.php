<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Application\Revision\RevisionNotificationRepository;
use Fau\DegreeProgram\Common\Application\Cache\CacheKeyGenerator;
use Fau\DegreeProgram\Common\Infrastructure\Cache\PostMetaDegreeProgramCache;
use LogicException;
use WP_Post;

final class WordPressRevisionNotificationRepository implements RevisionNotificationRepository
{
    public function __construct(
        private DegreeProgramEditorRepository $degreeProgramEditorRepository,
        private WorkflowAuthorsRepository $authorsRepository,
    ) {
    }

    /**
     * @return array<int>
     */
    public function findUsersToBeNotifiedForLastRevisions(): array
    {
        $lastRevisions = $this->fetchLastRevisions();
        $result = [];
        foreach ($lastRevisions as $degreeProgramId => $revisionIds) {
            $authorIds = array_map(
                static fn ($revisionId) => (int) get_post_field('post_author', $revisionId),
                $revisionIds
            );

            // Exclude revision authors themselves from list of "users to be notified"
            $result += array_filter(
                $this->findUsersSubscribedToPostChanges($degreeProgramId),
                static fn ($userId) => !in_array($userId, $authorIds, true)
            );
        }

        return $result;
    }

    public function findLastRevisionsForUser(int $userId): array
    {
        $result = [];
        $lastRevisions = $this->fetchLastRevisions();
        foreach ($lastRevisions as $degreeProgramId => $revisionIds) {
            if (!$this->isUserSubscribedToChanges($userId, $degreeProgramId)) {
                continue;
            }

            $result[$degreeProgramId] = $revisionIds;
        }

        return $result;
    }

    public function findPreviousRevision(int $degreeProgramId, int $revisionId): int
    {
        /** @var array<int, int> $cache */
        static $cache = [];
        if (isset($cache[$revisionId])) {
            return $cache[$revisionId];
        }

        $revisionIds = $this->findAllRevisionsForDegreeProgram($degreeProgramId);
        $index = array_search($revisionId, $revisionIds, true);
        if ($index === false) {
            throw new LogicException(
                sprintf(
                    'Revision %s is not part of all revisions of %d degree program?',
                    $revisionId,
                    $degreeProgramId
                )
            );
        }
        $previousIndex = $index - 1;
        if ($previousIndex < 0) {
            $cache[$revisionId] = 0;
            return $cache[$revisionId];
        }

        $cache[$revisionId] = $revisionIds[$previousIndex] ?? 0;
        return $cache[$revisionId];
    }

    /**
     * @return list<int>
     */
    private function findAllRevisionsForDegreeProgram(int $degreeProgramId): array
    {
        /** @var array<int, list<int>> $cache */
        static $cache = [];

        if (isset($cache[$degreeProgramId])) {
            return $cache[$degreeProgramId];
        }

        /** @var list<int> $postRevisions */
        $postRevisions = wp_get_post_revisions(
            $degreeProgramId,
            ['fields' => 'ids', 'order' => 'ASC']
        );
        $cache[$degreeProgramId] = $postRevisions;

        return $cache[$degreeProgramId];
    }

    /**
     * @return array<int, array<int>> array keyed with Degree Program ID of revisions IDs
     */
    private function fetchLastRevisions(): array
    {
        /** @var array<int, array<int>>|null $lastRevisions */
        static $lastRevisions;
        if (is_array($lastRevisions)) {
            return $lastRevisions;
        }

        /** @var array<int, int> $unsentRevisions */
        $unsentRevisions = get_posts([
            'post_type' => 'revision',
            'post_status' => 'inherit',
            'order' => 'ASC',
            'orderby' => 'date ID',
            'posts_per_page' => -1,
            'meta_query' => [
                'relation' => 'AND',
                [
                    'key' => PostMetaDegreeProgramCache::postMetaKey(CacheKeyGenerator::RAW_TYPE),
                    'compare' => 'EXISTS',
                ],
                [
                    'key' => RevisionMetaRepository::REVISION_NOTIFICATION_WAS_SENT_KEY,
                    'compare' => 'NOT EXISTS',
                ],

            ],
            'fields' => 'id=>parent',
        ]);

        $lastRevisions = [];
        foreach ($unsentRevisions as $revisionId => $degreeProgramId) {
            if (!isset($lastRevisions[$degreeProgramId])) {
                $lastRevisions[$degreeProgramId] = [$revisionId];
                continue;
            }

            $lastRevisions[$degreeProgramId][] = $revisionId;
        }

        return $lastRevisions;
    }

    /**
     * @param int $postId
     * @return array<int> user IDs
     */
    private function findUsersSubscribedToPostChanges(int $postId): array
    {
        /** @var array<int> | null $allEditors */
        static $allEditors = null;
        if (!$allEditors) {
            $allEditors = $this->degreeProgramEditorRepository->fetchAllIds();
        }

        /** @var array<int, array<int, int>> $cache
         *  We use the user ID as key and value to increase the performance.
         */
        static $cache = [];
        if (isset($cache[$postId])) {
            return $cache[$postId];
        }

        $cache[$postId] = [];

        $post = get_post($postId);

        if (!$post instanceof WP_Post) {
            return $cache[$postId];
        }

        $authors = $this->authorsRepository->fetchAuthorIds($postId);
        $ids = array_merge($allEditors, $authors);

        foreach ($ids as $id) {
            $cache[$postId][$id] = $id;
        }

        return $cache[$postId];
    }

    private function isUserSubscribedToChanges(int $userId, int $postId): bool
    {
        $usersHashMap = $this->findUsersSubscribedToPostChanges($postId);

        return isset($usersHashMap[$userId]);
    }
}
