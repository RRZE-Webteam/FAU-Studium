<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Application\Revision\DegreeProgramRevisionRepository;
use Fau\DegreeProgram\Application\Revision\RevisionNotificationRepository;
use Fau\DegreeProgram\Common\Application\Cache\CacheKeyGenerator;
use Fau\DegreeProgram\Common\Application\ConditionalFieldsFilter;
use Fau\DegreeProgram\Common\Application\Repository\CachedDegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TaxonomiesList;
use Fau\DegreeProgram\Common\Infrastructure\Repository\CampoKeysRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\FacultyRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;
use Fau\DegreeProgram\Common\Infrastructure\Repository\TimestampRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WpQueryArgsBuilder;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WpQuerySplitter;
use Fau\DegreeProgram\Common\Infrastructure\Sanitizer\HtmlDegreeProgramSanitizer;
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

    // phpcs:ignore Inpsyde.CodeQuality.FunctionLength.TooLong
    public function services(): array
    {
        return [
            IdGenerator::class => static fn() => new IdGenerator(),
            CampoKeysRepository::class => static fn() => new CampoKeysRepository(),
            ConditionalFieldsFilter::class => static fn() => new ConditionalFieldsFilter(),
            FacultyRepository::class => static fn() => new FacultyRepository(),
            TimestampRepository::class => static fn() => new TimestampRepository(),
            DegreeProgramRepository::class => static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramRepository(
                $container->get(IdGenerator::class),
                $container->get(EventDispatcherInterface::class),
                $container->get(HtmlDegreeProgramSanitizer::class),
                $container->get(CampoKeysRepository::class),
            ),
            self::VIEW_REPOSITORY_UNCACHED => static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramViewRepository(
                $container->get(DegreeProgramRepository::class),
                $container->get(HtmlDegreeProgramSanitizer::class),
                $container->get(ConditionalFieldsFilter::class),
                $container->get(FacultyRepository::class),
                $container->get(TimestampRepository::class),
            ),
            DegreeProgramViewRepository::class => static fn(ContainerInterface $container) => new CachedDegreeProgramViewRepository(
                $container->get(self::VIEW_REPOSITORY_UNCACHED),
                $container->get(CacheKeyGenerator::class),
                $container->get(CacheInterface::class),
            ),
            WpQueryArgsBuilder::class => static fn(ContainerInterface $container) => new WpQueryArgsBuilder(
                $container->get(TaxonomiesList::class),
                $container->get(CampoKeysRepository::class),
            ),
            WpQuerySplitter::class => static fn(ContainerInterface $container) => new WpQuerySplitter(
                $container->get(WpQueryArgsBuilder::class),
            ),
            self::COLLECTION_REPOSITORY_UNCACHED => static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramCollectionRepository(
                $container->get(self::VIEW_REPOSITORY_UNCACHED),
                $container->get(WpQueryArgsBuilder::class),
                $container->get(WpQuerySplitter::class),
            ),
            DegreeProgramCollectionRepository::class => static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramCollectionRepository(
                $container->get(DegreeProgramViewRepository::class),
                $container->get(WpQueryArgsBuilder::class),
                $container->get(WpQuerySplitter::class),
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
