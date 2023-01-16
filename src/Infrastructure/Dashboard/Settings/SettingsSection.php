<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

final class SettingsSection
{
    /** @var array<SettingsField> */
    private array $fields;

    private function __construct(
        private string $id,
        private string $title,
        private string $template,
        SettingsField ...$fields,
    ) {

        $this->fields = $fields;
    }

    public static function new(
        string $id,
        string $title,
        string $template,
        SettingsField ...$fields,
    ): self {

        return new self(
            $id,
            $title,
            $template,
            ...$fields
        );
    }

    public static function default(
        string $id,
        string $title,
        SettingsField ...$fields,
    ): self {

        return new self(
            $id,
            $title,
            '',
            ...$fields
        );
    }

    public function id(): string
    {
        return $this->id;
    }

    public function title(): string
    {
        return $this->title;
    }

    public function template(): string
    {
        return $this->template;
    }

    /**
     * @return array<SettingsField>
     */
    public function fields(): array
    {
        return $this->fields;
    }
}
