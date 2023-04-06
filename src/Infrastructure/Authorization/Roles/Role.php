<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\Roles;

interface Role
{
    public function key(): string;

    /**
     * @return array<string, bool>
     */
    public function capabilities(): array;
}
