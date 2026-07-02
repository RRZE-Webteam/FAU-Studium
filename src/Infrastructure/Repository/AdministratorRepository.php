<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\Administrator;

final class AdministratorRepository
{
    /**
     * @return array<int>
     */
    public function fetchAllIds(): array
    {
        /** @var array<numeric-string> $ids */
        $ids = get_users([
            'role' => Administrator::KEY,
            'fields' => 'ID',
        ]);

        return array_map('intval', $ids);
    }
}
