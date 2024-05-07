<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use Fau\DegreeProgram\Application\FormFieldValidation\Rules;

class InputTermMetaField implements TermMetaField
{
    use NoValidationTermMetaFieldTrait;

    public function __construct(
        private string $key,
        protected string $title,
        protected string $description = '',
        private string $type = 'text',
    ) {
    }

    public function key(): string
    {
        return $this->key;
    }

    public function title(): string
    {
        return $this->title;
    }

    public function sanitize(mixed $value): string
    {
        return sanitize_text_field((string) $value);
    }

    public function templateName(): string
    {
        return 'input-term';
    }

    public function templateData(mixed $value): array
    {
        /** @var ?Rules\MinLength $minLength */
        $minLength = $this->validationrules()->get(Rules\MinLength::name());
        /** @var ?Rules\MaxLength $maxLength */
        $maxLength = $this->validationrules()->get(Rules\MaxLength::name());

        return [
            'key' => $this->key,
            'value' => (string) $value,
            'title' => $this->title(),
            'description' => $this->description,
            'type' => $this->type,
            'minLength' => $minLength?->payload()['value'] ?? null,
            'maxLength' => $maxLength?->payload()['value'] ?? null,
        ];
    }

    public function metaArgs(): array
    {
        return [
            'type' => 'string',
            'description' => $this->description,
            'single' => true,
            'default' => '',
            'sanitize_callback' => [$this, 'sanitize'],
            'show_in_rest' => true,
        ];
    }
}
