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
                sprintf(
                    '%s/vendor/rrze/fau-studium-common/languages',
                    plugin_basename(dirname(__FILE__, 3))
                )
            );
        });

        return true;
    }
}
