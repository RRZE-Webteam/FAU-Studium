<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure;

use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\EventDispatcher\EventDispatcherInterface;
use Fau\DegreeProgram\Common\Infrastructure\EventDispatcher\WordPressHookEventDispatcher;

final class EventDispatcherModule implements ServiceModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            EventDispatcherInterface::class => static fn() => new WordPressHookEventDispatcher(),
        ];
    }
}
