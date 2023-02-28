<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision;

use Fau\DegreeProgram\Infrastructure\Revision\Notification\RevisionNotifier;

final class DailyRevisionNotificationRunner
{
    private const DISABLE_DAILY_REVISION_NOTIFICATION = 'FAU_DISABLE_DAILY_REVISION_NOTIFICATION';

    public const DAILY_REVISION_NOTIFICATION_HOOK = 'fau_revision_notification_hook';

    public function __construct(private RevisionNotifier $revisionNotifier)
    {
    }

    /**
     * @wp-hook admin_init
     */
    public function scheduleDailyRevisionNotification(): void
    {
        if ($this->isDisabled()) {
            $this->unscheduleDailyRevisionNotification();
        }

        if (wp_next_scheduled(self::DAILY_REVISION_NOTIFICATION_HOOK)) {
            return;
        }

        wp_schedule_event(time(), 'daily', self::DAILY_REVISION_NOTIFICATION_HOOK);
    }

    public function unscheduleDailyRevisionNotification(): void
    {
        wp_clear_scheduled_hook(self::DAILY_REVISION_NOTIFICATION_HOOK);
    }

    /**
     * @wp-hook fau_revision_notification_hook
     */
    public function runDailyRevisionNotification(): void
    {
        if ($this->isDisabled()) {
            return;
        }

        $this->revisionNotifier->notify();
    }

    private function isDisabled(): bool
    {
        return (
                defined(self::DISABLE_DAILY_REVISION_NOTIFICATION)
                && constant(self::DISABLE_DAILY_REVISION_NOTIFICATION)
            )
            || getenv(self::DISABLE_DAILY_REVISION_NOTIFICATION);
    }
}
