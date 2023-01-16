<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Common\Application\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\WordPressDatabaseDegreeProgramRepository;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;

class RepositoryModule implements ServiceModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            DegreeProgramViewRepository::class => static fn() => new WordPressDatabaseDegreeProgramRepository(),
            DegreeProgramRepository::class => static fn() => new WordPressDatabaseDegreeProgramRepository(),
            PostSlugRepository::class => static fn() => new PostSlugRepository(),
        ];
    }
}
