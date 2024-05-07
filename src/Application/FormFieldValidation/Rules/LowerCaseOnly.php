<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\FormFieldValidation\Rules;

use Fau\DegreeProgram\Application\FormFieldValidation\FormFieldValidationRule;

class LowerCaseOnly implements FormFieldValidationRule
{
    public function passes(mixed $value): bool
    {
        if ((string) $value === '') {
            return true;
        }

        return $value === strtolower((string) $value);
    }

    public function payload(): array
    {
        return [];
    }

    public static function name(): string
    {
        return 'lowerCaseOnly';
    }
}
