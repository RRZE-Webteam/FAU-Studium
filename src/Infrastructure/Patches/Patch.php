<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Patches;

interface Patch
{
    public function apply(): void;
}
