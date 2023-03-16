<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramAuthor;
use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;
use WP_User;

class UpdateWorkflowAuthorsWhenUserAdded
{
    public function __construct(private WorkflowAuthorsRepository $workflowAuthorsRepository)
    {
    }

    /**
     * @wp-hook user_register
     * @param int $userId
     * @param array{role: string, user_login: string} $userdata
     * @return void
     */
    public function update(int $userId, array $userdata): void
    {
        $user = get_user_by('ID', $userId);

        if (!$user instanceof WP_User) {
            return;
        }

        $role = $userdata['role'] ?? '';
        if ($role !== DegreeProgramAuthor::KEY) {
            return;
        }

        $this->workflowAuthorsRepository->create($user);
    }
}
