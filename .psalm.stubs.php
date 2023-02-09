<?php

declare(strict_types=1);

namespace Psr\Container {
    interface ContainerInterface
    {
        /** @param string|class-string $name */
        public function has(string $name): bool;

        /**
         * @template T of object
         * @psalm-param string|class-string<T> $name
         * @psalm-return (
         *     $name is class-string
         *     ? T
         *     : ($name is \Inpsyde\Modularity\Package::PROPERTIES
         *        ? \Inpsyde\Modularity\Properties\PluginProperties
         *        : ($name is \Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta\TermMetaModule::TERM_META_FIELD_RENDERER
         *           ? \Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer
         *           : $name is \Fau\DegreeProgram\Infrastructure\Dashboard\Settings\SettingsModule::SETTINGS_FIELD_RENDERER
         *            ? \Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer
         *              : $name is \Fau\DegreeProgram\Infrastructure\CliModule::CLI_CACHE_WARMER
         *                ? \Fau\DegreeProgram\Common\Application\Cache\CacheWarmer
         *                  : $name is \Fau\DegreeProgram\Infrastructure\CliModule::CLI_LOGGER
         *                     ? \Psr\Log\LoggerInterface
         *                       : mixed)
         *        )
         * )
         */
        public function get(string $name): object;
    }
}

namespace {
    class WP_CLI {
        public static function add_command(string $name, callable|object $command, array $args = []): void
        {}
    }
}
