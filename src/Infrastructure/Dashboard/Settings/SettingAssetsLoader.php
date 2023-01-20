<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

use Inpsyde\Assets\Asset;
use Inpsyde\Assets\AssetManager;
use Inpsyde\Assets\Style;
use Inpsyde\Modularity\Properties\PluginProperties;
use WP_Screen;

class SettingAssetsLoader
{
    public function __construct(
        private PluginProperties $pluginProperties,
        private array $ids,
    ) {
    }

    public function load(AssetManager $assetManager): void
    {
        $settingStyle = (new Style(
            'fau_dashboard_settings',
            (string) $this->pluginProperties->baseUrl() . 'assets/css/dashboard-settings.css',
            Asset::BACKEND
        ))
            ->canEnqueue([$this, 'isSettingPage']);

        $assetManager->register($settingStyle);
    }

    public function isSettingPage(): bool
    {
        $screen = get_current_screen();
        if (!$screen instanceof WP_Screen) {
            return false;
        }

        return in_array(
            str_replace('settings_page_', '', $screen->base),
            $this->ids,
            true
        );
    }
}
