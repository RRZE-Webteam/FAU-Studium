<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\Administrator;
use Fau\DegreeProgram\Infrastructure\Authorization\Roles\CoreRole;
use Fau\DegreeProgram\Infrastructure\Authorization\Roles\Editor;
use WP_Role;

class UserRolesModifier
{
    public static function modify(): void
    {
        /** @var CoreRole[] $roles */
        $roles = [
            new Administrator(),
            new Editor(),
        ];

        foreach ($roles as $role) {
            $wpRole = get_role($role->key());
            if (!$wpRole instanceof WP_Role) {
                return;
            }

            foreach ($role->capabilities() as $capability => $grant) {
                $wpRole->add_cap($capability, $grant);
            }
        }
    }
}
