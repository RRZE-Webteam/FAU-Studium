<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization;

use WP_Role;

class UserRolesModifier
{
    public static function modify(): void
    {
        $administrator = get_role('administrator');
        if (! $administrator instanceof WP_Role) {
            return;
        }

        $administrator->add_cap(Capabilities::MANAGE_DEGREE_PROGRAM_SETTINGS, true);
    }
}
