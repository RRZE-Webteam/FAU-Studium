<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramListTable;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramEditor\ServerDataProvider;
use Inpsyde\Assets\Asset;
use Inpsyde\Assets\AssetManager;
use Inpsyde\Assets\Loader\ArrayLoader;
use Inpsyde\Assets\Script;
use Inpsyde\Assets\Style;
use Inpsyde\Modularity\Properties\PluginProperties;
use WP_Screen;
use WP_Term;

final class AssetsLoader
{
    private const HANDLE = 'degree-program-list-table';

    public function __construct(
        private PluginProperties $pluginProperties,
        private AdminRequest $adminRequest,
    ) {
    }

    public function load(AssetManager $assetManager): void
    {
        /**
         * @var Asset[] $assets
         */
        $assets = (new ArrayLoader())->load([
            [
                'handle' => self::HANDLE,
                'url' => (string) $this->pluginProperties->baseUrl()
                    . 'assets/ts/degree-program-list-table.js',
                'location' => Asset::BACKEND,
                'type' => Script::class,
                'enqueue' => [$this->adminRequest, 'isDegreeProgramListTable'],
                'localize' => [
                        'DegreeProgramListTableServerData' => $this->serverData(),
                ],
                'translation' => [
                    'domain' => 'fau-degree-program',
                    'path' => $this->pluginProperties->basePath() . 'languages',
                ],
            ],
            [
                'handle' => self::HANDLE,
                'url' => (string) $this->pluginProperties->baseUrl()
                    . 'assets/css/degree-program-list-table.css',
                'location' => Asset::BACKEND,
                'type' => Style::class,
                'enqueue' => [$this->adminRequest, 'isDegreeProgramListTable'],
            ],
        ]);

        $assetManager->register(...$assets);
    }

    private function serverData(): array
    {
        $serverData = [
            '_ajax_nonce' => wp_create_nonce(ToggleStickyRequestHandler::ACTION),
            'action' => ToggleStickyRequestHandler::ACTION,
        ];

        $term = $this->adminRequest->detectTermQuery();
        if (!$term instanceof WP_Term) {
            return $serverData;
        }

        $serverData['term'] = $term->term_id;
        $serverData['taxonomy'] = $term->taxonomy;

        return $serverData;
    }
}
