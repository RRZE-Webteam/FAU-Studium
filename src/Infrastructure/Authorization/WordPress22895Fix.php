<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;

/**
 * This class provides a workaround for a 10-year-old core bug: a user without
 * `create_posts` capability can't see the posts list if they have no other
 * related capabilities (therefore, there is no submenu under the main CPT menu).
 *
 * @link https://core.trac.wordpress.org/ticket/22895
 */
final class WordPress22895Fix
{
    private ?array $degreeProgramSubmenu = null;

    /**
     * @wp-hook admin_menu
     */
    public function saveDegreeProgramSubmenu(): void
    {
        global $submenu;

        $this->degreeProgramSubmenu = $submenu[self::submenuKey()] ?? null;
    }

    /**
     * @wp-hook custom_menu_order
     *
     * This is a WordPress filter, but we use it as a dirty action.
     */
    public function restoreDegreeProgramSubmenu(bool $value): bool
    {
        global $submenu;
        if (!$this->degreeProgramSubmenu) {
            return $value;
        }

        if (!current_user_can(Capabilities::EDIT_DEGREE_PROGRAMS)) {
            return $value;
        }

        $submenu[self::submenuKey()] = $this->degreeProgramSubmenu;
        return $value;
    }

    private static function submenuKey(): string
    {
        return sprintf(
            'edit.php?post_type=%s',
            DegreeProgramPostType::KEY
        );
    }
}
