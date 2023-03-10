<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramAuthor;
use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;
use WP_User;

class UpdateWorkflowAuthorsWhenUserRoleRemoved
{
    public function __construct(private WorkflowAuthorsRepository $workflowAuthorsRepository)
    {
    }

    /**
     * @wp-hook remove_user_role
     * @param int $userId
     * @param string $role
     * @return void
     */
    public function update(int $userId, string $role): void
    {
        if ($role !== DegreeProgramAuthor::KEY) {
            return;
        }

        $user = get_user_by('id', $userId);
        if (! $user instanceof WP_User) {
            return;
        }

        $this->workflowAuthorsRepository->delete($user->user_login);
    }
}
