<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramEditor;

final class DegreeProgramEditorRepository
{
    /**
     * @return array<int>
     */
    public function fetchAllIds(): array
    {
        /** @var array<numeric-string> $ids */
        $ids = get_users([
            'role' => DegreeProgramEditor::KEY,
            'fields' => 'ID',
        ]);

        return array_map('intval', $ids);
    }
}
