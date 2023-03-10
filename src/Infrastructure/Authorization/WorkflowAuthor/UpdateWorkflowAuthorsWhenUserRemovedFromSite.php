<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor;

use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;
use WP_User;

class UpdateWorkflowAuthorsWhenUserRemovedFromSite
{
    public function __construct(private WorkflowAuthorsRepository $workflowAuthorsRepository)
    {
    }

    /**
     * @wp-hook remove_user_from_blog
     * @param int $userId
     * @return void
     */
    public function update(int $userId): void
    {
        $user = get_user_by('id', $userId);
        if (! $user instanceof WP_User) {
            return;
        }

        $this->workflowAuthorsRepository->delete($user->user_login);
    }
}
