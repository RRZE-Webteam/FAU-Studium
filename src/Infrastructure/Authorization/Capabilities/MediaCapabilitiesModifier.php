<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\Capabilities;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\UserRoleChecker;
use WP_User;

final class MediaCapabilitiesModifier extends CapabilitiesModifier
{
    protected function shouldModify(array $arguments, WP_User $user): bool
    {
        if (! UserRoleChecker::isDegreeProgramAuthorOrEditor($user)) {
            return false;
        }

        $requestedCapability = $arguments[0] ?? '';
        if ($requestedCapability !== 'edit_post') {
            return false;
        }

        $postId = $arguments[2] ?? 0;
        if (!$postId) {
            return false;
        }

        $postType = get_post_type((int) $postId);
        return $postType === 'attachment';
    }
}
