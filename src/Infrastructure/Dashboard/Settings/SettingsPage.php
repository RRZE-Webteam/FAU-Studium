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
        private string $readCapability,
        private string $editCapability,
        private string $template,
        SettingsSection ...$sections,
    ) {

        $this->sections = $sections;
    }

    public static function new(
        string $id,
        string $title,
        string $readCapability,
        string $editCapability,
        string $template,
        SettingsSection ...$sections,
    ): self {

        return new self(
            $id,
            $title,
            $readCapability,
            $editCapability,
            $template,
            ...$sections
        );
    }

    public static function default(
        string $id,
        string $title,
        string $readCapability,
        string $editCapability,
        SettingsSection ...$sections,
    ): self {

        return new self(
            $id,
            $title,
            $readCapability,
            $editCapability,
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

    public function readCapability(): string
    {
        return $this->readCapability;
    }

    public function editCapability(): string
    {
        return $this->editCapability;
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
