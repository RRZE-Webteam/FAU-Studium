<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\Roles;

use WP_User;

class UserRoleChecker
{
    public static function isDegreeProgramAuthorOrEditor(WP_User $user): bool
    {
        /** @var array<int, bool> $cache */
        static $cache = [];
        if (isset($cache[$user->ID])) {
            return $cache[$user->ID];
        }

        $cache[$user->ID] = self::hasAny($user, [DegreeProgramAuthor::KEY, DegreeProgramEditor::KEY]);

        return $cache[$user->ID];
    }

    public static function hasAny(WP_User $user, array $roles): bool
    {
        $userHasRoles = array_intersect($roles, $user->roles);
        return count($userHasRoles) > 0;
    }
}
