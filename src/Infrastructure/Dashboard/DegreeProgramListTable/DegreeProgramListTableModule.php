<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramListTable;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Repository\OrderRepository;
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
            SortableColumn::class => static fn() => new SortableColumn(),
            AssetsLoader::class => static fn(ContainerInterface $container) => new AssetsLoader(
                $container->get(Package::PROPERTIES),
                $container->get(AdminRequest::class),
            ),
            OrderRepository::class => static fn() => new OrderRepository(),
            UpdateOrderRequestHandler::class => static fn(ContainerInterface $container) => new UpdateOrderRequestHandler(
                $container->get(OrderRepository::class),
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

        $sortableColumn = $container->get(SortableColumn::class);

        add_filter(
            sprintf('manage_%s_posts_columns', DegreeProgramPostType::KEY),
            [
                $sortableColumn,
                'registerSortableColumn',
            ]
        );

        add_action(
            sprintf('wp_ajax_%s', UpdateOrderRequestHandler::ACTION),
            [
                $container->get(UpdateOrderRequestHandler::class),
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
