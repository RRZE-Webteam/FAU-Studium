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
    ) {
    }

    public function key(): string
    {
        return $this->key;
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
