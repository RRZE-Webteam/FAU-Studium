<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

final class TabbedSettingPage
{
    /** @var array<SettingsPage> */
    private array $pages;

    private function __construct(
        private string $id,
        private string $title,
        private string $capability,
        private string $template,
        SettingsPage ...$pages
    ) {

        $this->pages = $pages;
    }

    public static function new(
        string $id,
        string $title,
        string $capability,
        string $template,
        SettingsPage ...$pages
    ): self {

        return new self(
            $id,
            $title,
            $capability,
            $template,
            ...$pages,
        );
    }

    public static function default(
        string $id,
        string $title,
        string $capability,
        SettingsPage ...$pages,
    ): self {

        return new self(
            $id,
            $title,
            $capability,
            'tabbed-page',
            ...$pages
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
     * @return array<SettingsPage>
     */
    public function pages(): array
    {
        return $this->pages;
    }
}
