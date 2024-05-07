<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\FormFieldValidation\Rules;

use Fau\DegreeProgram\Application\FormFieldValidation\FormFieldValidationRule;

class NumericStringNoLeadingZeros implements FormFieldValidationRule
{
    public function passes(mixed $value): bool
    {
        if ((string) $value === '') {
            return true;
        }

        return (bool) preg_match('/^[1-9][0-9]*$/', (string) $value);
    }

    public function payload(): array
    {
        return [];
    }

    public static function name(): string
    {
        return 'numericStringNoLeadingZeros';
    }
}
