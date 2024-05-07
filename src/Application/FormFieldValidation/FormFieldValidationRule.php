<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\FormFieldValidation;

interface FormFieldValidationRule
{
    public static function name(): string;
    public function passes(mixed $value): bool;
    public function payload(): array;
}
