<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\Content;

use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;

class ContentModule implements ServiceModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            GeneratePostSlug::class => static fn(ContainerInterface $container) => new GeneratePostSlug(
                $container->get(DegreeProgramViewRepository::class),
                $container->get(IdGenerator::class),
            ),
        ];
    }
}
