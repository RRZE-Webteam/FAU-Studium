<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramListTable;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Repository\StickyDegreeProgramRepository;
use Inpsyde\Assets\AssetManager;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Inpsyde\Modularity\Package;
use Psr\Container\ContainerInterface;

final class DegreeProgramListTableModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            StickyColumn::class => static fn(ContainerInterface $container) => new StickyColumn(
                $container->get(AdminRequest::class),
                $container->get(StickyDegreeProgramRepository::class),
            ),
            AssetsLoader::class => static fn(ContainerInterface $container) => new AssetsLoader(
                $container->get(Package::PROPERTIES),
                $container->get(AdminRequest::class),
            ),
            StickyDegreeProgramRepository::class => static fn() => new StickyDegreeProgramRepository(),
            ToggleStickyRequestHandler::class => static fn(ContainerInterface $container) => new ToggleStickyRequestHandler(
                $container->get(StickyDegreeProgramRepository::class),
            ),
            AdminRequest::class => static fn() => new AdminRequest(),
            EditPostsQueryModifier::class => static fn(ContainerInterface $container) => new EditPostsQueryModifier(
                $container->get(AdminRequest::class),
            ),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_action(
            AssetManager::ACTION_SETUP,
            [$container->get(AssetsLoader::class), 'load']
        );

        $sortableColumn = $container->get(StickyColumn::class);

        add_filter(
            sprintf('manage_%s_posts_columns', DegreeProgramPostType::KEY),
            [
                $sortableColumn,
                'registerStickyColumn',
            ]
        );
        add_action(
            sprintf('manage_%s_posts_custom_column', DegreeProgramPostType::KEY),
            [
                $sortableColumn,
                'renderStickyColumn',
            ],
            10,
            2
        );

        add_action(
            sprintf('wp_ajax_%s', ToggleStickyRequestHandler::ACTION),
            [
                $container->get(ToggleStickyRequestHandler::class),
                'handle',
            ]
        );

        add_action(
            'pre_get_posts',
            [
                $container->get(EditPostsQueryModifier::class),
                'setUpOrder',
            ]
        );

        return true;
    }
}
