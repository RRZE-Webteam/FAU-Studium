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

        $capabilities = [
            Capabilities::READ_DEGREE_PROGRAM,
            Capabilities::READ_PRIVATE_DEGREE_PROGRAMS,
            Capabilities::EDIT_DEGREE_PROGRAM,
            Capabilities::EDIT_DEGREE_PROGRAMS,
            Capabilities::EDIT_OTHERS_DEGREE_PROGRAMS,
            Capabilities::EDIT_PUBLISHED_DEGREE_PROGRAMS,
            Capabilities::EDIT_PRIVATE_DEGREE_PROGRAMS,
            Capabilities::PUBLISH_DEGREE_PROGRAMS,
            Capabilities::DELETE_DEGREE_PROGRAMS,
            Capabilities::DELETE_PUBLISHED_DEGREE_PROGRAMS,
            Capabilities::DELETE_OTHERS_DEGREE_PROGRAMS,
            Capabilities::ASSIGN_DEGREE_PROGRAM_TERMS,
            Capabilities::MANAGE_DEGREE_PROGRAM_TERMS,
            Capabilities::EDIT_DEGREE_PROGRAM_TERMS,
            Capabilities::DELETE_DEGREE_PROGRAM_TERMS,
            Capabilities::MANAGE_DEGREE_PROGRAM_SETTINGS,
        ];

        foreach ($capabilities as $capability) {
            $administrator->add_cap($capability, true);
        }
    }
}
