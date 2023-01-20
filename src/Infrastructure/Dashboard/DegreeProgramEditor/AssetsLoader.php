<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramEditor;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Inpsyde\Assets\Asset;
use Inpsyde\Assets\AssetManager;
use Inpsyde\Assets\Loader\ArrayLoader;
use Inpsyde\Assets\Script;
use Inpsyde\Assets\Style;
use Inpsyde\Modularity\Properties\PluginProperties;
use WP_Screen;

final class AssetsLoader
{
    public const BLOCK_ASSET_HANDLE = 'ts/degree-program-editor';

    public function __construct(
        private PluginProperties $pluginProperties,
        private ServerDataProvider $serverDataProvider,
    ) {
    }

    public function load(AssetManager $assetManager): void
    {
        /**
         * @var \Inpsyde\Assets\Asset[] $assets
         */
        $assets = (new ArrayLoader())->load([
            [
                'handle' => self::BLOCK_ASSET_HANDLE,
                'url' => (string) $this->pluginProperties->baseUrl()
                    . 'assets/ts/degree-program-editor.js',
                'location' => Asset::BLOCK_EDITOR_ASSETS,
                'type' => Script::class,
                'enqueue' => [$this, 'isDegreeProgramPostType'],
                'localize' => [
                    ServerDataProvider::JS_OBJECT_NAME => [
                        $this->serverDataProvider,
                        'provide',
                    ],
                ],
            ],
            [
                'handle' => self::BLOCK_ASSET_HANDLE,
                'url' => (string) $this->pluginProperties->baseUrl()
                    . 'assets/ts/degree-program-editor.css',
                'location' => Asset::BLOCK_EDITOR_ASSETS,
                'type' => Style::class,
                'enqueue' => [$this, 'isDegreeProgramPostType'],
            ],
        ]);

        $assetManager->register(...$assets);
    }

    public function isDegreeProgramPostType(): bool
    {
        $screen = get_current_screen();
        if (!$screen instanceof WP_Screen) {
            return false;
        }

        return $screen->post_type === DegreeProgramPostType::KEY;
    }
}
