<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

interface Option
{
    public function type(): string;
    public function description(): string;
    public function sanitizer(): callable;
    public function showInRest(): bool|array;
    public function default(): mixed;
}
