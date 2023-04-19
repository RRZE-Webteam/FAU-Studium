<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure;

use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Psr\Container\ContainerInterface;

final class TranslationModule implements ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function run(ContainerInterface $container): bool
    {
        add_action('init', static function (): void {
            // Bail if text domain is already loaded by the output plugin.
            if (is_textdomain_loaded('fau-degree-program-common')) {
                return;
            }

            load_plugin_textdomain(
                'fau-degree-program-common',
                false,
                'fau-degree-program/vendor/inpsyde/fau-degree-program-common/languages'
            );
        });

        return true;
    }
}
