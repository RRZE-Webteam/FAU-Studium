<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Common\Application\Cache\CacheKeyGenerator;
use Fau\DegreeProgram\Common\Application\Repository\CachedDegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Infrastructure\Sanitizer\HtmlDegreeProgramSanitizer;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;
use Psr\EventDispatcher\EventDispatcherInterface;
use Psr\SimpleCache\CacheInterface;

class RepositoryModule implements ServiceModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            IdGenerator::class => static fn() => new IdGenerator(),
            DegreeProgramRepository::class => static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramRepository(
                $container->get(IdGenerator::class),
                $container->get(EventDispatcherInterface::class),
            ),
            DegreeProgramViewRepository::class => static function (ContainerInterface $container): DegreeProgramViewRepository {
                $repository = new WordPressDatabaseDegreeProgramViewRepository(
                    $container->get(DegreeProgramRepository::class),
                    $container->get(HtmlDegreeProgramSanitizer::class),
                );

                return new CachedDegreeProgramViewRepository(
                    $repository,
                    $container->get(CacheKeyGenerator::class),
                    $container->get(CacheInterface::class),
                );
            },
            DegreeProgramCollectionRepository::class => static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramCollectionRepository(
                $container->get(DegreeProgramViewRepository::class),
            ),
            PostSlugRepository::class => static fn() => new PostSlugRepository(),
        ];
    }
}
