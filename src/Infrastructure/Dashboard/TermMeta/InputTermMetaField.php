<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

class InputTermMetaField implements TermMetaField
{
    public function __construct(
        protected string $key,
        protected string $title,
        protected string $description = '',
        protected string $type = 'text',
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
        return [
            'key' => $this->key,
            'value' => (string) $value,
            'title' => $this->title,
            'description' => $this->description,
            'type' => $this->type,
            'validationPattern' => $this->validationPattern(),
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

    public function validationPattern(): ?TermMetaFieldValidationPattern
    {
        return null;
    }
}
