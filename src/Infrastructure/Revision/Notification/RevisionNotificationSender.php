<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision\Notification;

final class RevisionNotificationSender
{
    public function send(string $email, string $html): void
    {
        wp_mail(
            $email,
            _x(
                'Degree programs revision notification',
                'backoffice: revision notification',
                'fau-degree-program'
            ),
            $html,
            ['Content-Type: text/html; charset=utf-8']
        );
    }
}
