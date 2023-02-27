<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

final class RevisionMetaRepository
{
    public const REVISION_NOTIFICATION_WAS_SENT_KEY = 'revision_notification_was_sent';
    private const REVISION_NOTIFICATION_RUN_TIMESTAMP_KEY = 'revision_notification_run_timestamp';

    public function markRevisionsAsSent(int ...$revisionIds): void
    {
        foreach ($revisionIds as $revisionId) {
            update_metadata('post', $revisionId, self::REVISION_NOTIFICATION_WAS_SENT_KEY, true);
        }
    }

    public function updateNotificationRunTimestamp(): void
    {
        update_option(self::REVISION_NOTIFICATION_RUN_TIMESTAMP_KEY, time());
    }

    public function notificationRunTimestamp(): int
    {
        return (int) get_option(self::REVISION_NOTIFICATION_RUN_TIMESTAMP_KEY, 0);
    }
}
