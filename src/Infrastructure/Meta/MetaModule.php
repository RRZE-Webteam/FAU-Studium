<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Meta;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;

class MetaModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            PersistPostMetaRevision::class => static fn() => new PersistPostMetaRevision(),
            RestorePostMetaRevision::class => static fn() => new RestorePostMetaRevision(),
            UpdateListOfRevisionableFields::class => static fn() => new UpdateListOfRevisionableFields(),
            RelatedPostMetaRemover::class => static fn() => new RelatedPostMetaRemover(),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_action(
            'save_post_' . DegreeProgramPostType::KEY,
            [$container->get(PersistPostMetaRevision::class), 'persist']
        );

        add_action(
            'wp_restore_post_revision',
            [$container->get(RestorePostMetaRevision::class), 'restore'],
            10,
            2
        );

        add_filter(
            '_wp_post_revision_fields',
            [$container->get(UpdateListOfRevisionableFields::class), 'update'],
            10,
            2
        );

        add_action(
            'deleted_post',
            [$container->get(RelatedPostMetaRemover::class), 'whenDegreeProgramDeleted'],
            10,
            2
        );

        return true;
    }
}
