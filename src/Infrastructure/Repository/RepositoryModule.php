<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Application\Revision\DegreeProgramRevisionRepository;
use Fau\DegreeProgram\Application\Revision\RevisionNotificationRepository;
use Fau\DegreeProgram\Common\Application\Cache\CacheKeyGenerator;
use Fau\DegreeProgram\Common\Application\Repository\CachedDegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TaxonomiesList;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Infrastructure\Sanitizer\DegreeProgramFieldsSanitizer;
use Fau\DegreeProgram\Common\Infrastructure\Sanitizer\HtmlDegreeProgramSanitizer;
use Fau\DegreeProgram\Infrastructure\Revision\RevisionModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;
use Psr\EventDispatcher\EventDispatcherInterface;
use Psr\SimpleCache\CacheInterface;

class RepositoryModule implements ServiceModule
{
    use ModuleClassNameIdTrait;

    public const VIEW_REPOSITORY_UNCACHED = 'view_repository_uncached';
    public const COLLECTION_REPOSITORY_UNCACHED = 'collection_repository_uncached';

    public function services(): array
    {
        return [
            IdGenerator::class => static fn() => new IdGenerator(),
            DegreeProgramRepository::class => static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramRepository(
                $container->get(IdGenerator::class),
                $container->get(EventDispatcherInterface::class),
                $container->get(HtmlDegreeProgramSanitizer::class),
            ),
            self::VIEW_REPOSITORY_UNCACHED => static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramViewRepository(
                $container->get(DegreeProgramRepository::class),
                $container->get(HtmlDegreeProgramSanitizer::class),
            ),
            DegreeProgramViewRepository::class => static fn(ContainerInterface $container) => new CachedDegreeProgramViewRepository(
                $container->get(self::VIEW_REPOSITORY_UNCACHED),
                $container->get(CacheKeyGenerator::class),
                $container->get(CacheInterface::class),
            ),
            self::COLLECTION_REPOSITORY_UNCACHED => static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramCollectionRepository(
                $container->get(self::VIEW_REPOSITORY_UNCACHED),
                $container->get(TaxonomiesList::class),
            ),
            DegreeProgramCollectionRepository::class => static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramCollectionRepository(
                $container->get(DegreeProgramViewRepository::class),
                $container->get(TaxonomiesList::class),
            ),
            DegreeProgramRevisionRepository::class => static fn(ContainerInterface $container) => new CacheBasedRevisionRepository(
                $container->get(CacheKeyGenerator::class),
                $container->get(CacheInterface::class),
                $container->get(RepositoryModule::VIEW_REPOSITORY_UNCACHED),
                $container->get(DegreeProgramViewRepository::class),
                $container->get(IdGenerator::class),
            ),
            RevisionNotificationRepository::class => static fn(ContainerInterface $container) => new WordPressRevisionNotificationRepository(
                $container->get(DegreeProgramEditorRepository::class),
                $container->get(WorkflowAuthorsRepository::class),
            ),
            RevisionMetaRepository::class => static fn() => new RevisionMetaRepository(),
            WorkflowAuthorsRepository::class => static fn() => new WorkflowAuthorsRepository(),
            TermsRepository::class => static fn(ContainerInterface $container) => new TermsRepository(
                $container->get(IdGenerator::class),
            ),
            DegreeProgramEditorRepository::class => static fn() => new DegreeProgramEditorRepository(),
        ];
    }
}
