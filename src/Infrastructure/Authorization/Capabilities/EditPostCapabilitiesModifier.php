<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\Capabilities;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Infrastructure\Authorization\Roles\UserRoleChecker;
use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;
use WP_User;

final class EditPostCapabilitiesModifier extends CapabilitiesModifier
{
    public function __construct(private WorkflowAuthorsRepository $workflowAuthorsRepository)
    {
    }

    protected function shouldModify(array $arguments, WP_User $user): bool
    {
        if (! UserRoleChecker::isDegreeProgramAuthorOrEditor($user)) {
            return false;
        }

        $requestedCapability = $arguments[0] ?? '';
        // 'read_post' maps to 'edit_others_degree_programs' for drafts
        if (
            !in_array(
                $requestedCapability,
                ['edit_post', 'read_post'],
                true
            )
        ) {
            return false;
        }

        $postId = $arguments[2] ?? 0;
        if (! $postId) {
            return false;
        }

        $postType = get_post_type((int) $postId);
        if ($postType !== DegreeProgramPostType::KEY) {
            return false;
        }

        return $this->workflowAuthorsRepository->isUserListedInAllowedEditors($user, (int) $postId);
    }
}
