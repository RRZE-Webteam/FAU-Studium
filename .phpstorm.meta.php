<?php

namespace PHPSTORM_META {
    override(
        \Psr\Container\ContainerInterface::get(0),
        map([
            \Inpsyde\Modularity\Package::PROPERTIES => \Inpsyde\Modularity\Properties\PluginProperties::class,
            \Fau\DegreeProgram\Infrastructure\Dashboard\Settings\SettingsModule::SETTINGS_FIELD_RENDERER => \Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer::class,
            \Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta\TermMetaModule::TERM_META_FIELD_RENDERER => \Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer::class,
            \Fau\DegreeProgram\Infrastructure\CliModule::CLI_LOGGER => \Psr\Log\LoggerInterface::class,
            \Fau\DegreeProgram\Infrastructure\CliModule::CLI_CACHE_WARMER => \Fau\DegreeProgram\Common\Application\Cache\CacheWarmer::class,
            '' => '@',
        ])
    );
}
