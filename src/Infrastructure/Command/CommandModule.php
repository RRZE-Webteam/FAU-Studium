<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Command;

use Fau\DegreeProgram\Application\Content\GeneratePostSlug;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Infrastructure\Repository\PostSlugRepository;
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
            UpdatePostSlug::class => static fn(ContainerInterface $container) => new UpdatePostSlug(
                generatePostSlug: $container->get(GeneratePostSlug::class),
                postSlugRepository: $container->get(PostSlugRepository::class),
            ),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_action(
            'save_post_' . DegreeProgramPostType::KEY,
            [$container->get(UpdatePostSlug::class), 'update']
        );

        return true;
    }
}
