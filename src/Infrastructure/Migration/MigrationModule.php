<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Migration;

use Fau\DegreeProgram\Common\Application\Cache\CacheKeyGenerator;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;
use Psr\SimpleCache\CacheInterface;

final class MigrationModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    private const MIGRATIONS_KEY = 'fau_degree_program_migrations';

    public function services(): array
    {
        return [
            Migration002TransformVideosMeta::class => static fn() => new Migration002TransformVideosMeta(),
            Migration0010AddInfoBrochureAndStudentInitiativesFields::class => static function (
                ContainerInterface $container
            ): Migration0010AddInfoBrochureAndStudentInitiativesFields {
                return new Migration0010AddInfoBrochureAndStudentInitiativesFields(
                    $container->get(CacheKeyGenerator::class),
                    $container->get(CacheInterface::class),
                );
            },
            Migration0014WorkflowAuthorsTermMeta::class => static fn() => new Migration0014WorkflowAuthorsTermMeta(),
            Migration11ChangeNumberOfStudentsField::class => static function (
                ContainerInterface $container
            ): Migration11ChangeNumberOfStudentsField {
                return new Migration11ChangeNumberOfStudentsField(
                    $container->get(CacheKeyGenerator::class),
                    $container->get(CacheInterface::class),
                    $container->get(IdGenerator::class),
                );
            },
            Migration13RemoveCustomOrdering::class => static fn() => new Migration13RemoveCustomOrdering(),
            Migration0015CampoKeyMeta::class => static function (
                ContainerInterface $container
            ): Migration0015CampoKeyMeta {
                return new Migration0015CampoKeyMeta(
                    $container->get(CacheKeyGenerator::class),
                    $container->get(CacheInterface::class)
                );
            },
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
