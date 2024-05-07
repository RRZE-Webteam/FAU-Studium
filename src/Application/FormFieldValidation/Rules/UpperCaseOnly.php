<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\FormFieldValidation\Rules;

use Fau\DegreeProgram\Application\FormFieldValidation\FormFieldValidationRule;

class UpperCaseOnly implements FormFieldValidationRule
{
    public function passes(mixed $value): bool
    {
        if ((string) $value === '') {
            return true;
        }

        return $value === strtoupper((string) $value);
    }

    public function payload(): array
    {
        return [];
    }

    public static function name(): string
    {
        return 'upperCaseOnly';
    }
}
