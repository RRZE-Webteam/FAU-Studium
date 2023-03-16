<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramAuthor;
use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;
use WP_User;

class UpdateWorkflowAuthorsWhenUserUpdated
{
    public function __construct(private WorkflowAuthorsRepository $workflowAuthorsRepository)
    {
    }

    /**
     * @wp-hook profile_update
     * @param int $userId
     * @return void
     */
    public function update(int $userId): void
    {
        $user = get_user_by('ID', $userId);

        if (!$user instanceof WP_User) {
            return;
        }

        if (!in_array(DegreeProgramAuthor::KEY, $user->roles, true)) {
            return;
        }

        $this->workflowAuthorsRepository->update($user);
    }
}
