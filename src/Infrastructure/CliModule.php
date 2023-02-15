<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure;

use Fau\DegreeProgram\Common\Application\Cache\CacheInvalidator;
use Fau\DegreeProgram\Common\Infrastructure\Cli\DegreeProgramCacheCommand;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;
use WP_CLI;

final class CliModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            DegreeProgramCacheCommand::class => static fn(ContainerInterface $container) => new DegreeProgramCacheCommand(
                $container->get(CacheInvalidator::class),
            ),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_action('cli_init', static function () use ($container): void {
            WP_CLI::add_command(
                'fau cache',
                $container->get(DegreeProgramCacheCommand::class)
            );
        });

        return true;
    }
}
