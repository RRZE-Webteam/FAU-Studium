<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision\Notification;

use Fau\DegreeProgram\Application\Event\RevisionNotificationCompleted;
use Fau\DegreeProgram\Application\Revision\RevisionNotificationRepository;
use Psr\EventDispatcher\EventDispatcherInterface;
use WP_User;

final class RevisionNotifier
{
    public function __construct(
        private RevisionNotificationRepository $notificationRepository,
        private RevisionNotificationFormatter $formatter,
        private RevisionNotificationSender $notificationSender,
        private EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function notify(): void
    {
        $userIds = $this->notificationRepository->findUsersToBeNotifiedForLastRevisions();
        if (count($userIds) === 0) {
            return;
        }

        $processedRevisionIds = [];

        foreach ($userIds as $userId) {
            $user = get_userdata($userId);
            if (!$user instanceof WP_User) {
                continue;
            }
            $revisions = $this->notificationRepository->findLastRevisionsForUser($userId);
            $html = $this->formatter->formattedHtml($revisions);
            $this->notificationSender->send($user->user_email, $html);
            $processedRevisionIds += $revisions;
        }

        $processedRevisionIds = array_unique(array_merge(...array_values($processedRevisionIds)));

        $this->eventDispatcher->dispatch(RevisionNotificationCompleted::new(...$processedRevisionIds));
    }
}
