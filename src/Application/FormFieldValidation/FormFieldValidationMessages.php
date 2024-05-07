<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\FormFieldValidation;

use Fau\DegreeProgram\Application\FormFieldValidation\Rules\AlphaNumeric;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\LowerCaseOnly;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\MaxLength;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\MinLength;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\NumericString;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\NumericStringNoLeadingZeros;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\UpperCaseOnly;

class FormFieldValidationMessages
{
    // phpcs:ignore Inpsyde.CodeQuality.FunctionLength.TooLong
    public function get(FormFieldValidationRule $failedRule, string $fieldLabel): string
    {
        return match (true) {
            $failedRule instanceof NumericString => sprintf(
                // translators: %s is field label
                __(
                    '"%s" field must only contain numbers.',
                    'fau-degree-program'
                ),
                $fieldLabel
            ),
            $failedRule instanceof NumericStringNoLeadingZeros => sprintf(
                // translators: %s is field label
                __(
                    '"%s" field must only contain numbers, leading zeros are not allowed.',
                    'fau-degree-program'
                ),
                $fieldLabel
            ),
            $failedRule instanceof MinLength => sprintf(
                // translators: %1$s is field label, %2$d is minimum characters length
                __(
                    '"%1$s" field must be at least %2$d characters long.',
                    'fau-degree-program'
                ),
                $fieldLabel,
                (string) $failedRule->payload()['value'],
            ),
            $failedRule instanceof MaxLength => sprintf(
                // translators: %1$s is field label, %2$d is maximum characters length
                __(
                    '"%1$s" field must be %2$d or less characters long.',
                    'fau-degree-program'
                ),
                $fieldLabel,
                (string) $failedRule->payload()['value'],
            ),
            $failedRule instanceof AlphaNumeric => sprintf(
                // translators: %s is field label
                __(
                    '"%s" field must only contain letters and numbers.',
                    'fau-degree-program'
                ),
                $fieldLabel,
            ),
            $failedRule instanceof LowerCaseOnly => sprintf(
                // translators: %s is field label
                __(
                    '"%s" field must only contain lowercase letters.',
                    'fau-degree-program'
                ),
                $fieldLabel,
            ),
            $failedRule instanceof UpperCaseOnly => sprintf(
                // translators: %s is field label
                __(
                    '"%s" field must only contain uppercase letters.',
                    'fau-degree-program'
                ),
                $fieldLabel,
            ),
            default => sprintf(
                // translators: %s is field label
                __(
                    '"%s" field validation failed.',
                    'fau-degree-program'
                ),
                $fieldLabel
            ),
        };
    }
}
