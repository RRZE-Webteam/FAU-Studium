<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Cache;

use Fau\DegreeProgram\Common\Application\Cache\CacheInvalidator;
use Fau\DegreeProgram\Common\Application\Cache\CacheKeyGenerator;
use Fau\DegreeProgram\Common\Application\Cache\CacheWarmer;
use Fau\DegreeProgram\Common\Application\Event\CacheInvalidated;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Domain\Content;
use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Domain\Event\DegreeProgramUpdated;
use Fau\DegreeProgram\Common\Infrastructure\Cache\PostMetaDegreeProgramCache;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TaxonomiesList;
use Fau\DegreeProgram\Common\Infrastructure\Repository\BilingualRepository;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;
use Psr\EventDispatcher\EventDispatcherInterface;
use Psr\Log\LoggerInterface;
use Psr\SimpleCache\CacheInterface;

final class CacheModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    private const SHARED_PROPERTIES = [
        Content::ABOUT,
        Content::STRUCTURE,
        Content::SPECIALIZATIONS,
        Content::QUALITIES_AND_SKILLS,
        Content::WHY_SHOULD_STUDY,
        Content::CAREER_PROSPECTS,
        Content::SPECIAL_FEATURES,
        Content::TESTIMONIALS,
        DegreeProgram::START_OF_SEMESTER,
        DegreeProgram::SEMESTER_DATES,
        DegreeProgram::DEPARTMENT,
        DegreeProgram::STUDENT_ADVICE,

    ];

    public function services(): array
    {
        return [
            CacheKeyGenerator::class => static fn() => new CacheKeyGenerator(),
            CacheInterface::class => static fn(ContainerInterface $container) => new PostMetaDegreeProgramCache(
                $container->get(CacheKeyGenerator::class),
            ),
            CacheInvalidator::class => static fn(ContainerInterface $container) => new CacheInvalidator(
                $container->get(CacheKeyGenerator::class),
                $container->get(CacheInterface::class),
                $container->get(EventDispatcherInterface::class),
                $container->get(LoggerInterface::class),
            ),
            CacheWarmer::class => static fn(ContainerInterface $container) => new CacheWarmer(
                $container->get(CacheKeyGenerator::class),
                $container->get(CacheInterface::class),
                $container->get(DegreeProgramCollectionRepository::class),
                $container->get(LoggerInterface::class),
            ),
            WhenDegreeProgramUpdated::class => static fn(ContainerInterface $container) => new WhenDegreeProgramUpdated(
                $container->get(CacheInvalidator::class),
            ),
            WhenDegreeProgramSharedPropertyUpdated::class => static fn(ContainerInterface $container) => new WhenDegreeProgramSharedPropertyUpdated(
                $container->get(CacheInvalidator::class),
            ),
            WhenDegreeProgramTermUpdated::class => static fn(ContainerInterface $container) => new WhenDegreeProgramTermUpdated(
                $container->get(CacheInvalidator::class),
            ),
            WhenCacheInvalidated::class => static fn() => new WhenCacheInvalidated(),
            WhenWarmingToBeStarted::class => static fn(ContainerInterface $container) => new WhenWarmingToBeStarted(
                $container->get(CacheWarmer::class),
            ),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        self::setUpInvalidationListeners($container);

        add_action(
            CacheInvalidated::NAME,
            [
                $container->get(WhenCacheInvalidated::class),
                'scheduleWarming',
            ]
        );

        add_action(
            WhenWarmingToBeStarted::HOOK,
            [
                $container->get(WhenWarmingToBeStarted::class),
                'warm',
            ],
            10,
            2
        );

        return true;
    }

    /**
     * phpcs:disable Inpsyde.CodeQuality.NoAccessors.NoSetter
     */
    private static function setUpInvalidationListeners(ContainerInterface $container): void
    {
        add_action(
            DegreeProgramUpdated::NAME,
            [
                $container->get(WhenDegreeProgramUpdated::class),
                'invalidateCache',
            ]
        );

        foreach (self::SHARED_PROPERTIES as $option) {
            $prefixedOption = BilingualRepository::addOptionPrefix($option);
            add_action(
                "update_option_{$prefixedOption}",
                [
                    $container->get(WhenDegreeProgramSharedPropertyUpdated::class),
                    'invalidateCache',
                ]
            );
        }

        $taxonomies = TaxonomiesList::new()->keys();
        $whenTermUpdatedListener = $container->get(WhenDegreeProgramTermUpdated::class);

        foreach ($taxonomies as $key) {
            add_action(
                "edited_{$key}",
                static function (int $termId) use ($key, $whenTermUpdatedListener): void {
                    $whenTermUpdatedListener->invalidateCache($termId, $key);
                }
            );
        }

        add_action(
            'pre_delete_term',
            static function (int $termId, string $taxonomy) use ($whenTermUpdatedListener, $taxonomies): void {
                if (!in_array($taxonomy, $taxonomies->getArrayCopy(), true)) {
                    return;
                }

                $whenTermUpdatedListener->invalidateCache($termId, $taxonomy);
            },
            10,
            2
        );
    }
}
