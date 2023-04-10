<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

class NumericSettingsField implements SettingsField
{
    public function __construct(
        private string $id,
        private string $title,
        private ?float $default = null,
        private bool $showInRest = true,
        private ?float $min = null,
        private ?float $max = null,
        private ?float $step = null,
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
        return 'number';
    }

    public function templateData(mixed $value): array
    {
        return [
            'id' => $this->id,
            'value' => (string) $value,
            'title' => $this->title,
            'min' => $this->min,
            'max' => $this->max,
            'step' => $this->step,
        ];
    }

    public function type(): string
    {
        return 'number';
    }

    public function description(): string
    {
        return $this->description ?? $this->title;
    }

    public function sanitizer(): callable
    {
        return static function (mixed $value): mixed {
            return filter_var($value, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
        };
    }

    public function showInRest(): bool
    {
        return $this->showInRest;
    }

    public function default(): float|int|null
    {
        return $this->default;
    }
}
