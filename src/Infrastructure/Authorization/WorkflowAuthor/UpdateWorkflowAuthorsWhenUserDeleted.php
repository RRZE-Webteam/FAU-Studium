<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor;

use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;
use WP_User;

class UpdateWorkflowAuthorsWhenUserDeleted
{
    public function __construct(private WorkflowAuthorsRepository $workflowAuthorsRepository)
    {
    }

    /**
     * @wp-hook deleted_user
     * @param int $userId
     * @param int|null $reassignToUserId
     * @param WP_User $user
     * @return void
     */
    public function update(int $userId, ?int $reassignToUserId, WP_User $user): void
    {
        $this->workflowAuthorsRepository->delete($user->user_login);
    }
}
