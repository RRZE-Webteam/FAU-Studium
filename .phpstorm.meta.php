<?php

namespace PHPSTORM_META {

    override(
        \Psr\Container\ContainerInterface::get(0),
        map([
            \Inpsyde\Modularity\Package::PROPERTIES
                => \Inpsyde\Modularity\Properties\PluginProperties::class,
            \Fau\DegreeProgram\Infrastructure\Dashboard\Settings\SettingsModule::SETTINGS_FIELD_RENDERER
                => \Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer::class,
            \Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta\TermMetaModule::TERM_META_FIELD_RENDERER
                => \Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer::class,
            \Fau\DegreeProgram\Infrastructure\Revision\Notification\RevisionNotificationModule::REVISION_NOTIFICATION_RENDERER
            => \Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer::class,
            \Fau\DegreeProgram\Infrastructure\Repository\RepositoryModule::VIEW_REPOSITORY_UNCACHED
                => \Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository::class,
            \Fau\DegreeProgram\Infrastructure\Repository\RepositoryModule::COLLECTION_REPOSITORY_UNCACHED
                => \Fau\DegreeProgram\Common\Application\Repository\DegreeProgramCollectionRepository::class,
            '' => '@',
        ])
    );
}
