<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Infrastructure\Authorization\Capabilities;
use Fau\DegreeProgram\Infrastructure\Repository\WorkflowAuthorsRepository;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;

final class WorkflowAuthorModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            UpdateWorkflowAuthorsWhenUserAdded::class => static fn(ContainerInterface $container) => new UpdateWorkflowAuthorsWhenUserAdded(
                $container->get(WorkflowAuthorsRepository::class)
            ),
            UpdateWorkflowAuthorsWhenUserDeleted::class => static fn(ContainerInterface $container) => new UpdateWorkflowAuthorsWhenUserDeleted(
                $container->get(WorkflowAuthorsRepository::class)
            ),
            UpdateWorkflowAuthorsWhenUserRemovedFromSite::class => static fn(ContainerInterface $container) => new UpdateWorkflowAuthorsWhenUserRemovedFromSite(
                $container->get(WorkflowAuthorsRepository::class)
            ),
            UpdateWorkflowAuthorsWhenUserRoleAdded::class => static fn(ContainerInterface $container) => new UpdateWorkflowAuthorsWhenUserRoleAdded(
                $container->get(WorkflowAuthorsRepository::class)
            ),
            UpdateWorkflowAuthorsWhenUserRoleRemoved::class => static fn(ContainerInterface $container) => new UpdateWorkflowAuthorsWhenUserRoleRemoved(
                $container->get(WorkflowAuthorsRepository::class)
            ),
            UpdateWorkflowAuthorsWhenUserUpdated::class => static fn(ContainerInterface $container) => new UpdateWorkflowAuthorsWhenUserUpdated(
                $container->get(WorkflowAuthorsRepository::class)
            ),
        ];
    }

    /**
     * phpcs:disable Inpsyde.CodeQuality.FunctionLength.TooLong
     */
    public function run(ContainerInterface $container): bool
    {

        add_action(
            'user_register',
            [$container->get(UpdateWorkflowAuthorsWhenUserAdded::class), 'update'],
            10,
            2
        );

        add_action(
            'deleted_user',
            [$container->get(UpdateWorkflowAuthorsWhenUserDeleted::class), 'update'],
            10,
            3
        );

        add_action(
            'remove_user_from_blog',
            [$container->get(UpdateWorkflowAuthorsWhenUserRemovedFromSite::class), 'update'],
            10,
            3
        );

        add_action(
            'add_user_role',
            [$container->get(UpdateWorkflowAuthorsWhenUserRoleAdded::class), 'update'],
            10,
            2
        );

        add_action(
            'remove_user_role',
            [$container->get(UpdateWorkflowAuthorsWhenUserRoleRemoved::class), 'update'],
            10,
            2
        );

        add_action(
            'profile_update',
            [$container->get(UpdateWorkflowAuthorsWhenUserUpdated::class), 'update'],
        );

        $workflowAuthorTaxonomy = WorkflowAuthorTaxonomy::hidden()->merge([
            'show_in_rest' => true,
            'show_ui' => true,
            'show_in_menu' => false,
            'rewrite' => false,
            'show_admin_column' => true,
            'capabilities' => [
                'manage_terms' => Capabilities::MANAGE_WORKFLOW_AUTHORS_TERMS,
                'edit_terms' => Capabilities::EDIT_WORKFLOW_AUTHORS_TERMS,
                'delete_terms' => Capabilities::DELETE_WORKFLOW_AUTHORS_TERMS,
                'assign_terms' => Capabilities::ASSIGN_WORKFLOW_AUTHORS_TERMS,
            ],
        ]);

        add_action('init', static function () use ($workflowAuthorTaxonomy) {
            register_taxonomy(
                $workflowAuthorTaxonomy->key(),
                DegreeProgramPostType::KEY,
                $workflowAuthorTaxonomy->args(),
            );
        });

        return true;
    }
}
