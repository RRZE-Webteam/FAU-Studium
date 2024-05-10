<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use Inpsyde\Assets\Asset;
use Inpsyde\Assets\AssetManager;
use Inpsyde\Assets\Loader\ArrayLoader;
use Inpsyde\Assets\Script;
use Inpsyde\Modularity\Properties\PluginProperties;
use WP_Screen;

final class AssetsLoader
{
    public const HANDLE = 'ts/term-validation';

    public function __construct(
        private PluginProperties $pluginProperties,
    ) {
    }

    public function load(AssetManager $assetManager): void
    {
        /**
         * @var \Inpsyde\Assets\Asset[] $assets
         */
        $assets = (new ArrayLoader())->load([
            [
                'handle' => self::HANDLE,
                'url' => (string) $this->pluginProperties->baseUrl()
                    . 'assets/ts/term-meta-fields-validation.js',
                'location' => Asset::BACKEND,
                'type' => Script::class,
                'enqueue' => fn () => $this->isTermTaxonomyEditContext(),
            ],
        ]);

        $assetManager->register(...$assets);
    }

    private function isTermTaxonomyEditContext(): bool
    {
        if (! function_exists('get_current_screen')) {
            return false;
        }

        $screen = get_current_screen();
        if (!$screen instanceof WP_Screen) {
            return false;
        }

        return ! empty($screen->taxonomy);
    }
}
