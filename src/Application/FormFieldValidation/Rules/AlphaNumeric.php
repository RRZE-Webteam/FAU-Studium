<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\FormFieldValidation\Rules;

use Fau\DegreeProgram\Application\FormFieldValidation\FormFieldValidationRule;

class AlphaNumeric implements FormFieldValidationRule
{
    public function passes(mixed $value): bool
    {
        if ((string) $value === '') {
            return true;
        }

        return (bool) preg_match('/^[a-zA-Z0-9]+$/', (string) $value);
    }

    public function payload(): array
    {
        return [];
    }

    public static function name(): string
    {
        return 'alphaNumeric';
    }
}
