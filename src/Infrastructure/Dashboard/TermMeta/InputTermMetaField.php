<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

class InputTermMetaField implements TermMetaField
{
    public function __construct(
        private string $key,
        private string $title,
        private string $description = '',
        private string $type = 'text',
        private ?TermMetaFieldValidationPattern $validationPattern = null,
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
        $showInRest = true;

        if (! is_null($this->validationPattern)) {
            $showInRest = [
                'schema' => [
                    'type' => 'string',
                    'pattern' => $this->validationPattern->pattern(),
                ],
            ];
        }

        return [
            'key' => $this->key,
            'value' => (string) $value,
            'title' => $this->title,
            'description' => $this->description,
            'type' => $this->type,
            'validationPattern' => $this->validationPattern(),
            'show_in_rest' => $showInRest,
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
        return $this->validationPattern;
    }
}
