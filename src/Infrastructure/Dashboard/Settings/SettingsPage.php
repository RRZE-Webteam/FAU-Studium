<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

final class SettingsPage
{
    /** @var array<SettingsSection> */
    private array $sections;

    private function __construct(
        private string $id,
        private string $title,
        private string $capability,
        private string $template,
        SettingsSection ...$sections,
    ) {

        $this->sections = $sections;
    }

    public static function new(
        string $id,
        string $title,
        string $capability,
        string $template,
        SettingsSection ...$sections,
    ): self {

        return new self(
            $id,
            $title,
            $capability,
            $template,
            ...$sections
        );
    }

    public static function default(
        string $id,
        string $title,
        string $capability,
        SettingsSection ...$sections,
    ): self {

        return new self(
            $id,
            $title,
            $capability,
            'page',
            ...$sections
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

    public function capability(): string
    {
        return $this->capability;
    }

    public function template(): string
    {
        return $this->template;
    }

    /**
     * @return array<SettingsSection>
     */
    public function sections(): array
    {
        return $this->sections;
    }
}
