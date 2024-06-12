<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Command;

use Fau\DegreeProgram\Application\DegreeProgramBulkUpdater;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\DegreeTaxonomy;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;

class CommandModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            DegreeProgramBulkUpdater::class => static fn(ContainerInterface $container) => new DegreeProgramBulkUpdater(
                $container->get(DegreeProgramCollectionRepository::class),
                $container->get(DegreeProgramRepository::class),
            ),
            DegreeProgramSlugUpdater::class => static fn(ContainerInterface $container) => new DegreeProgramSlugUpdater(
                $container->get(DegreeProgramBulkUpdater::class),
            ),
            RelatedPostMetaRemover::class => static fn() => new RelatedPostMetaRemover(),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_action(
            'updated_term_meta',
            [$container->get(DegreeProgramSlugUpdater::class), 'whenTermMetaUpdated'],
            10,
            3
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
