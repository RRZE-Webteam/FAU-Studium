<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization;

use Fau\DegreeProgram\Infrastructure\Authorization\Capabilities\BlocksCapabilitiesModifier;
use Fau\DegreeProgram\Infrastructure\Authorization\Capabilities\EditPostCapabilitiesModifier;
use Fau\DegreeProgram\Infrastructure\Authorization\Capabilities\MediaCapabilitiesModifier;
use Fau\DegreeProgram\Infrastructure\Authorization\Capabilities\PublishDegreeProgramsCapabilitiesModifier;
use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;

class AuthorizationModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            MediaCapabilitiesModifier::class => static fn() => new MediaCapabilitiesModifier(),
            BlocksCapabilitiesModifier::class => static fn() => new BlocksCapabilitiesModifier(),
            EditPostCapabilitiesModifier::class => static fn(ContainerInterface $container) => new EditPostCapabilitiesModifier(
                $container->get(WorkflowAuthorsRepository::class)
            ),
            PublishDegreeProgramsCapabilitiesModifier::class => static fn(ContainerInterface $container) => new PublishDegreeProgramsCapabilitiesModifier(
                $container->get(WorkflowAuthorsRepository::class),
            ),
            DeletionDisabler::class => static fn() => new DeletionDisabler(),
            WordPress22895Fix::class => static fn() => new WordPress22895Fix(),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        $capabilityModifiers = [
            $container->get(MediaCapabilitiesModifier::class),
            $container->get(BlocksCapabilitiesModifier::class),
            $container->get(EditPostCapabilitiesModifier::class),
            $container->get(PublishDegreeProgramsCapabilitiesModifier::class),
        ];

        foreach ($capabilityModifiers as $modifier) {
            add_filter(
                'user_has_cap',
                [$modifier, 'modify'],
                10,
                4
            );
        }

        add_filter(
            'pre_delete_post',
            [
                $container->get(DeletionDisabler::class),
                'forbidDirectDeletionOfDegreePrograms',
            ],
            10,
            2
        );

        self::fixWordPressAuthorizationBug($container);

        return true;
    }

    private static function fixWordPressAuthorizationBug(ContainerInterface $container): void
    {
        $fixer = $container->get(WordPress22895Fix::class);

        add_action(
            'admin_menu',
            [
                $fixer,
                'saveDegreeProgramSubmenu',
            ]
        );

        add_action(
            'custom_menu_order',
            [
                $fixer,
                'restoreDegreeProgramSubmenu',
            ]
        );
    }
}
