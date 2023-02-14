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
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_action(
            'edited_' . DegreeTaxonomy::KEY,
            [$container->get(DegreeProgramBulkUpdater::class), 'whenDegreeTermWasUpdated']
        );

        return true;
    }
}
