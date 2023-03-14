<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Patches;

use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;

final class PatchesModule implements ExecutableModule, ServiceModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            FAU171ThemePatch::class => static fn() => new FAU171ThemePatch(),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        foreach ($this->services() as $key => $resolver) {
            $service = $container->get($key);

            if ($service instanceof Patch) {
                $service->apply();
            }
        }

        return true;
    }
}
