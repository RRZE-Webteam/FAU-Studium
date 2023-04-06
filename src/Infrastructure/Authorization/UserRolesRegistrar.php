<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramAuthor;
use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramEditor;
use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramRole;

class UserRolesRegistrar
{
    public static function register(): void
    {
        /**
         * @var DegreeProgramRole[] $roles
         */
        $roles = [
            new DegreeProgramAuthor(),
            new DegreeProgramEditor(),
        ];

        foreach ($roles as $role) {
            // Reset DB cache
            remove_role($role->key());
            add_role(
                $role->key(),
                $role->label(),
                $role->capabilities()
            );
        }
    }
}
