<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use Fau\DegreeProgram\Application\FormFieldValidation\FormFieldValidationRuleSet;

trait NoValidationTermMetaFieldTrait
{
    // Empty validation rule set.
    public function validationRules(): FormFieldValidationRuleSet
    {
        return FormFieldValidationRuleSet::new();
    }
}
