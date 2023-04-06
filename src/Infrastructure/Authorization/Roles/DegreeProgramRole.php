<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\Roles;

interface DegreeProgramRole extends Role
{
    public function label(): string;
}
