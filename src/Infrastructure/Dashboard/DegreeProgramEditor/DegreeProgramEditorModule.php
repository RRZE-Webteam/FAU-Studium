<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramEditor;

use Inpsyde\Assets\AssetManager;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Inpsyde\Modularity\Package;
use Psr\Container\ContainerInterface;

final class DegreeProgramEditorModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            ServerDataProvider::class => static fn() => new ServerDataProvider(),
            AssetsLoader::class => static fn (ContainerInterface $container) => new AssetsLoader(
                $container->get(Package::PROPERTIES),
                $container->get(ServerDataProvider::class),
            ),
            PostTypeEditor::class => static fn () => new PostTypeEditor(),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_action(
            AssetManager::ACTION_SETUP,
            [$container->get(AssetsLoader::class), 'load']
        );

        add_filter(
            'use_block_editor_for_post_type',
            [$container->get(PostTypeEditor::class), 'forceBlockEditor'],
            PHP_INT_MAX,
            2
        );

        return true;
    }
}