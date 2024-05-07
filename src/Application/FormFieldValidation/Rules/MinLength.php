<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\FormFieldValidation\Rules;

use Fau\DegreeProgram\Application\FormFieldValidation\FormFieldValidationRule;

class MinLength implements FormFieldValidationRule
{
    public function __construct(private int $value)
    {
    }

    public function passes(mixed $value): bool
    {
        return strlen((string) $value) >= $this->value;
    }

    public function payload(): array
    {
        return [
            'value' => $this->value,
        ];
    }

    public static function name(): string
    {
        return 'minLength';
    }
}
