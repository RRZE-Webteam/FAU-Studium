<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization;

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
            DeletionDisabler::class => static fn() => new DeletionDisabler(),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_filter(
            'user_has_cap',
            [$container->get(MediaCapabilitiesModifier::class), 'modify'],
            10,
            4
        );

        add_filter(
            'user_has_cap',
            [$container->get(BlocksCapabilitiesModifier::class), 'modify'],
            10,
            4
        );

        add_filter(
            'pre_delete_post',
            [
                $container->get(DeletionDisabler::class),
                'forbidDirectDeletionOfDegreePrograms',
            ],
            10,
            2
        );

        return true;
    }
}
