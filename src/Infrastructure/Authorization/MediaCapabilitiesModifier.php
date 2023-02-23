<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramAuthor;
use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramEditor;
use WP_User;

class MediaCapabilitiesModifier
{
    /**
     * @wp-hook user_has_cap
     * @param array $userCapabilities
     * @param array<array-key, string> $requiredCapabilities
     * @param array $arguments
     * @param WP_User $user
     * @return array
     */
    public function modify(array $userCapabilities, array $requiredCapabilities, array $arguments, WP_User $user): array
    {
        $userHasApplicableRoles = array_intersect([
            DegreeProgramAuthor::KEY,
            DegreeProgramEditor::KEY,
        ], $user->roles);

        if (count($userHasApplicableRoles) === 0) {
            return $userCapabilities;
        }

        $initiallyRequestedCapability = $arguments[0] ?? '';
        if ($initiallyRequestedCapability !== 'edit_post') {
            return $userCapabilities;
        }

        $postId = $arguments[2] ?? 0;
        if (!$postId) {
            return $userCapabilities;
        }

        $postType = get_post_type((int) $postId);
        if ($postType !== 'attachment') {
            return $userCapabilities;
        }

        /**
         * Generated array that grants (set to true) all required capabilities.
         * @var array<string, boolean> $grantedRequiredCapabilities
         */
        $grantedRequiredCapabilities = array_fill_keys(
            $requiredCapabilities,
            true
        );

        return array_merge($userCapabilities, $grantedRequiredCapabilities);
    }
}
