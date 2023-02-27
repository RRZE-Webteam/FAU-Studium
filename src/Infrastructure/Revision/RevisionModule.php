<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision;

use Fau\DegreeProgram\Application\DegreeProgramUpdater;
use Fau\DegreeProgram\Application\Revision\DegreeProgramRevisionRepository;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\Event\DegreeProgramUpdated;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;

class RevisionModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            ChangesDetector::class => static fn(ContainerInterface $container) => new ChangesDetector(
                $container->get(DegreeProgramRevisionRepository::class),
            ),
            PersistRevision::class => static fn(ContainerInterface $container) => new PersistRevision(
                $container->get(DegreeProgramRevisionRepository::class),
            ),
            ReplaceListOfRevisionableFields::class => static fn(ContainerInterface $container) => new ReplaceListOfRevisionableFields(
                $container->get(DegreeProgramRevisionRepository::class),
                $container->get(FieldRetriever::class),
            ),
            FieldRetriever::class => static fn(ContainerInterface $container) => new FieldRetriever(
                $container->get(DegreeProgramRevisionRepository::class),
            ),
            PrepareRevisionForJs::class => static fn(ContainerInterface $container) => new PrepareRevisionForJs(
                $container->get(DegreeProgramRevisionRepository::class),
            ),
            RestoreRevision::class => static fn(ContainerInterface $container) => new RestoreRevision(
                $container->get(DegreeProgramViewRepository::class),
                $container->get(DegreeProgramUpdater::class),
            ),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        self::saveDegreeProgramRevisionOnDomainEventOnly();

        add_filter(
            'wp_save_post_revision_post_has_changed',
            [$container->get(ChangesDetector::class), 'hasDegreeProgramChanged'],
            10,
            3
        );

        add_action(
            '_wp_put_post_revision',
            [$container->get(PersistRevision::class), 'persist']
        );

        add_filter(
            '_wp_post_revision_fields',
            [$container->get(ReplaceListOfRevisionableFields::class), 'replace'],
            10,
            2
        );

        add_filter(
            'wp_prepare_revision_for_js',
            [$container->get(PrepareRevisionForJs::class), 'prepare'],
        );

        add_action(
            'wp_restore_post_revision',
            [$container->get(RestoreRevision::class), 'restore'],
            10,
            2
        );

        return true;
    }

    private static function saveDegreeProgramRevisionOnDomainEventOnly(): void
    {
        remove_action('post_updated', 'wp_save_post_revision', 10);
        add_action('post_updated', static function (int $postId): void {
            if (get_post_type($postId) === DegreeProgramPostType::KEY) {
                return;
            }

            wp_save_post_revision($postId);
        });

        add_action(DegreeProgramUpdated::NAME, static function (DegreeProgramUpdated $event): void {
            wp_save_post_revision($event->id());
        }, 20); // After cache invalidation
    }
}
