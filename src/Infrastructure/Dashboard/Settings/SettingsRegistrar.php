<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer;

/**
 * phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
 */
final class SettingsRegistrar
{
    public function __construct(
        private Renderer $settingsRenderer,
    ) {
    }

    /**
     * phpcs:disable Inpsyde.CodeQuality.NestingLevel.High
     */
    public function registerSettings(SettingsPage ...$pages): void
    {
        foreach ($pages as $page) {
            add_action('admin_menu', function () use ($page) {
                $this->addPage($page);
            });

            add_action('admin_init', function () use ($page) {
                foreach ($page->sections() as $section) {
                    $this->addSection($section, $page->id());

                    foreach ($section->fields() as $field) {
                        $this->addSetting($field, $page->id(), $section->id());
                    }
                }
            });
        }
    }

    private function addPage(SettingsPage $page): void
    {
        add_options_page(
            $page->title(),
            $page->title(),
            $page->capability(),
            $page->id(),
            function () use ($page) {
                if (!current_user_can($page->capability())) {
                    return;
                }

                echo $this->settingsRenderer->render(
                    $page->template(),
                    [
                        'id' => $page->id(),
                    ]
                );
            },
        );
    }

    private function addSection(
        SettingsSection $section,
        string $pageId
    ): void {

        add_settings_section(
            $section->id(),
            $section->title(),
            function () use ($section) {
                if (!$section->template()) {
                    return;
                }

                echo $this->settingsRenderer->render(
                    $section->template(),
                    [
                        'id' => $section->id(),
                        'title' => $section->title(),
                    ]
                );
            },
            $pageId,
        );
    }

    private function addSetting(
        SettingsField $field,
        string $pageId,
        string $sectionId,
    ): void {

        register_setting(
            $pageId,
            $field->id(),
            [
                'type' => $field->type(),
                'description' => $field->description(),
                'sanitize_callback' => $field->sanitizer(),
                'show_in_rest' => $field->showInRest(),
                'default' => $field->default(),
            ]
        );

        add_settings_field(
            $field->id(),
            $field->title(),
            function () use ($field) {
                echo $this->settingsRenderer->render(
                    $field->templateName(),
                    $field->templateData(
                        get_option($field->id(), $field->default())
                    )
                );
            },
            $pageId,
            $sectionId,
        );
    }
}
