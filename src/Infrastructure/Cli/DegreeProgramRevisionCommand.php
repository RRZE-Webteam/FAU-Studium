<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Cli;

use Fau\DegreeProgram\Infrastructure\Revision\Notification\RevisionNotifier;

final class DegreeProgramRevisionCommand
{
    public function __construct(
        private RevisionNotifier $revisionNotifier,
    ) {
    }

    /**
     * Notify users about the latest changes.
     *
     * ## EXAMPLES
     *
     *     wp fau revision notify
     *
     * @when after_wp_load
     */
    public function notify(): void
    {
        $this->revisionNotifier->notify();
    }
}
