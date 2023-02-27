<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision\Notification;

use Fau\DegreeProgram\Application\Event\RevisionNotificationCompleted;
use Fau\DegreeProgram\Application\Revision\RevisionNotificationRepository;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\DirectoryLocator;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\TemplateRenderer;
use Fau\DegreeProgram\Infrastructure\Repository\RevisionMetaRepository;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Inpsyde\Modularity\Package;
use Psr\Container\ContainerInterface;
use Psr\EventDispatcher\EventDispatcherInterface;

final class RevisionNotificationModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    private const REVISION_NOTIFICATION_RENDERER = 'revision_notification_renderer';

    public function services(): array
    {
        return [
            RevisionDiff::class => static fn() => new RevisionDiff(),
            self::REVISION_NOTIFICATION_RENDERER => static fn(ContainerInterface $container): Renderer => TemplateRenderer::new(
                DirectoryLocator::new(
                    $container->get(Package::PROPERTIES)->basePath() . '/templates/revision-notification'
                )
            ),
            RevisionNotificationFormatter::class => static fn(ContainerInterface $container) => new RevisionNotificationFormatter(
                $container->get(self::REVISION_NOTIFICATION_RENDERER),
                $container->get(RevisionDiff::class),
                $container->get(RevisionNotificationRepository::class),
                $container->get(RevisionMetaRepository::class),
            ),
            RevisionNotificationSender::class => static fn() => new RevisionNotificationSender(),
            RevisionNotifier::class => static fn(ContainerInterface $container) => new RevisionNotifier(
                $container->get(RevisionNotificationRepository::class),
                $container->get(RevisionNotificationFormatter::class),
                $container->get(RevisionNotificationSender::class),
                $container->get(EventDispatcherInterface::class),
            ),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        $revisionMetaRepository = $container->get(RevisionMetaRepository::class);
        add_action(
            RevisionNotificationCompleted::NAME,
            fn(RevisionNotificationCompleted $completed)
                => $revisionMetaRepository->markRevisionsAsSent(
                    ...$completed->processedIds()
                ),
        );

        add_action(
            RevisionNotificationCompleted::NAME,
            [$revisionMetaRepository, 'updateNotificationRunTimestamp']
        );

        return true;
    }
}
