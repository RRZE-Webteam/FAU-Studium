<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Content;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\DegreeTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TaxonomiesList;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\Taxonomy;
use Fau\DegreeProgram\Infrastructure\Authorization\Capabilities;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;

final class ContentModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            TaxonomiesList::class => fn() => TaxonomiesList::new(),
            SortableDegreeTaxonomyColumn::class => fn() => new SortableDegreeTaxonomyColumn(),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_action('init', static function () use ($container): void {
            self::registerPostType();
            self::registerTaxonomies(
                $container->get(TaxonomiesList::class),
            );
        });

        add_filter(
            'manage_edit-' . DegreeProgramPostType::KEY . '_sortable_columns',
            [$container->get(SortableDegreeTaxonomyColumn::class), 'addDegreeToSortableColumns'],
        );

        add_filter(
            'posts_clauses',
            [$container->get(SortableDegreeTaxonomyColumn::class), 'modifyClauses'],
            10,
            2
        );

        return true;
    }

    private static function registerPostType(): void
    {
        register_post_type(
            DegreeProgramPostType::KEY,
            DegreeProgramPostType::public()
                ->merge([
                    'capability_type' => ['degree_program', 'degree_programs'],
                    'capabilities' => [
                        'create_posts' => Capabilities::CREATE_DEGREE_PROGRAMS,
                    ],
                    'map_meta_cap' => true,
                    'template' => [
                        ['fau/degree-program-form'],
                    ],
                    'template_lock' => 'all',
                    'supports' => [
                        'editor',
                        'revisions',
                        'author',
                    ],
                ])
                ->args()
        );
    }

    private static function registerTaxonomies(TaxonomiesList $taxonomiesList): void
    {
        $taxonomiesToShowAdminColumn = [
            DegreeTaxonomy::class,
        ];

        foreach ($taxonomiesList as $taxonomyClass) {
            /** @var Taxonomy $taxonomyObject */
            // phpcs:ignore NeutronStandard.Functions.DisallowCallUserFunc.CallUserFunc
            $taxonomyObject = call_user_func([$taxonomyClass, 'public']);
            $taxonomyObject = $taxonomyObject->merge([
                'capabilities' => [
                    'manage_terms' => Capabilities::MANAGE_DEGREE_PROGRAM_TERMS,
                    'edit_terms' => Capabilities::EDIT_DEGREE_PROGRAM_TERMS,
                    'delete_terms' => Capabilities::DELETE_DEGREE_PROGRAM_TERMS,
                    'assign_terms' => Capabilities::ASSIGN_DEGREE_PROGRAM_TERMS,
                ],
                'show_in_nav_menus' => false,
            ]);

            if (in_array($taxonomyClass, $taxonomiesToShowAdminColumn, true)) {
                $taxonomyObject = $taxonomyObject->showAdminColumn();
            }

            register_taxonomy(
                $taxonomyObject->key(),
                DegreeProgramPostType::KEY,
                $taxonomyObject->args()
            );
        }
    }
}
