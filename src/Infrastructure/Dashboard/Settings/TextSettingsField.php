<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

class TextSettingsField implements SettingsField
{
    public function __construct(
        private string $id,
        private string $title,
        private ?string $default = null,
        private bool $showInRest = true,
        private ?string $description = null,
    ) {
    }

    public function id(): string
    {
        return $this->id;
    }

    public function title(): string
    {
        return $this->title;
    }

    public function templateName(): string
    {
        return 'text';
    }

    public function templateData(mixed $value): array
    {
        return [
            'id' => $this->id,
            'value' => (string) $value,
            'title' => $this->title,
        ];
    }

    public function type(): string
    {
        return 'string';
    }

    public function description(): string
    {
        return $this->description ?? $this->title;
    }

    public function sanitizer(): callable
    {
        return 'esc_html';
    }

    public function showInRest(): bool
    {
        return $this->showInRest;
    }

    public function default(): string
    {
        return $this->default ?? '';
    }
}
