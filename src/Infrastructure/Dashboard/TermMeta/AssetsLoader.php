<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use Inpsyde\Assets\Asset;
use Inpsyde\Assets\AssetManager;
use Inpsyde\Assets\Loader\ArrayLoader;
use Inpsyde\Assets\Script;
use Inpsyde\Assets\Style;
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
                'enqueue' => fn () => !is_null($this->currentTaxonomy()),
                'localize' => [
                    'termMetaValidationRules' => $this->validationRules(),
                ],
            ],
            [
                'handle' => self::HANDLE,
                'url' => (string) $this->pluginProperties->baseUrl()
                    . 'assets/css/term-meta-fields-validation.css',
                'location' => Asset::BACKEND,
                'type' => Style::class,
                'enqueue' => fn () => !is_null($this->currentTaxonomy()),
            ],
        ]);

        $assetManager->register(...$assets);
    }

    private function validationRules(): array
    {
        $taxonomy = $this->currentTaxonomy();

        if (is_null($taxonomy)) {
            return [];
        }

        return (array) apply_filters(
            "fau.degree_programs.taxonnomy_{$taxonomy}_term_metas.validation_rules",
            [],
        );
    }

    private function currentTaxonomy(): ?string
    {
        if (! function_exists('get_current_screen')) {
            return null;
        }

        $screen = get_current_screen();
        if (!$screen instanceof WP_Screen) {
            return null;
        }

        return ! empty($screen->taxonomy) ? $screen->taxonomy : null;
    }
}
