<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\Capabilities;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Infrastructure\Authorization\Roles\UserRoleChecker;
use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;
use WP_Post;
use WP_User;

final class PublishDegreeProgramsCapabilitiesModifier extends CapabilitiesModifier
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
        if ($requestedCapability !== 'publish_degree_programs') {
            return false;
        }

        // `publish_posts` capability checks without post ID, so let's try to get the global post object,
        // which usually is available for backoffice and REST API contexts.
        $post = get_post();
        if (! $post instanceof WP_Post) {
            return false;
        }

        if ($post->post_type !== DegreeProgramPostType::KEY) {
            return false;
        }

        return $this->workflowAuthorsRepository->isUserListedInAllowedEditors($user, $post->ID)
            && $post->post_status === 'publish';
    }
}
