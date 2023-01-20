<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Common\Application\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Infrastructure\Sanitizer\HtmlDegreeProgramSanitizer;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;

class RepositoryModule implements ServiceModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            DegreeProgramRepository::class => static fn() => new WordPressDatabaseDegreeProgramRepository(),
            DegreeProgramViewRepository::class =>
                static fn(ContainerInterface $container) => new WordPressDatabaseDegreeProgramViewRepository(
                    $container->get(DegreeProgramRepository::class),
                    $container->get(HtmlDegreeProgramSanitizer::class),
                ),
            PostSlugRepository::class => static fn() => new PostSlugRepository(),
        ];
    }
}