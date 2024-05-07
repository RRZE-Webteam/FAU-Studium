<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use Fau\DegreeProgram\Application\FormFieldValidation\FormFieldValidationRuleSet;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules;

class CampoKeyMetaField extends InputTermMetaField
{
    public const KEY = 'uniquename';

    public function __construct(
        protected string $description,
        private FormFieldValidationRuleSet $validationRules
    ) {

        parent::__construct(
            self::KEY,
            __('Campo Key', 'fau-degree-program'),
            $description,
            'url'
        );
    }

    public function sanitize(mixed $value): string
    {
        return sanitize_text_field((string) $value);
    }

    public function metaArgs(): array
    {
        $schema = [
            'type' => 'string',
        ];

        $minLength = $this->validationrules()->get(Rules\MinLength::name());
        $maxLength = $this->validationrules()->get(Rules\MaxLength::name());

        if ($minLength instanceof Rules\MinLength) {
            $schema['minLength'] = $minLength->payload()['value'];
        }

        if ($maxLength instanceof Rules\MaxLength) {
            $schema['maxLength'] = $maxLength->payload()['value'];
        }

        $args = parent::metaArgs();
        $args['show_in_rest'] = [
            'schema' => $schema,
        ];

        return $args;
    }

    public function validationRules(): FormFieldValidationRuleSet
    {
        return $this->validationRules;
    }
}
