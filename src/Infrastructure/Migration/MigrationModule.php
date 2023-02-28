<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Migration;

use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;

final class MigrationModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    private const MIGRATIONS_KEY = 'fau_degree_program_migrations';

    public function services(): array
    {
        return [
            Migration002TransformVideosMeta::class => static fn() => new Migration002TransformVideosMeta(),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_action(
            'admin_init',
            fn() => $this->applyMigrations($container)
        );

        return true;
    }

    public function applyMigrations(ContainerInterface $container): void
    {
        /** @var array<class-string, int> $performedMigrations */
        $performedMigrations = get_option(self::MIGRATIONS_KEY, []);

        foreach ($this->services() as $key => $definition) {
            if (isset($performedMigrations[$key])) {
                continue;
            }

            /** @var callable $migration */
            $migration = $container->get($key);
            $migration();

            $performedMigrations[$key] = time();
        }

        update_option(self::MIGRATIONS_KEY, $performedMigrations);
    }
}
