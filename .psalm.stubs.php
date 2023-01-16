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
         *            : mixed)
         *        )
         * )
         */
        public function get(string $name): object;
    }
}
