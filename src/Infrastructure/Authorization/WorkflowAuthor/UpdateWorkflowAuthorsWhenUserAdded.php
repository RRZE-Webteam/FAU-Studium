<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramAuthor;
use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;

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
        $role = $userdata['role'] ?? '';
        if ($role !== DegreeProgramAuthor::KEY) {
            return;
        }

        $username = $userdata['user_login'];
        if (! $username) {
            return;
        }

        $this->workflowAuthorsRepository->create($username);
    }
}
