<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Content;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\AreaOfStudyTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\KeywordTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TaxonomiesList;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\Taxonomy;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Psr\Container\ContainerInterface;

final class ContentModule implements ExecutableModule
{
    use ModuleClassNameIdTrait;

    public function run(ContainerInterface $container): bool
    {
        add_action('init', static function (): void {
            self::registerPostType();
            self::registerTaxonomies();
        });

        return true;
    }

    private static function registerPostType(): void
    {
        register_post_type(
            DegreeProgramPostType::KEY,
            DegreeProgramPostType::public()
                ->merge([
                    'template' => [
                        ['fau/degree-program-form'],
                    ],
                    'template_lock' => 'all',
                ])
                ->args()
        );
    }

    private static function registerTaxonomies(): void
    {
        $taxonomiesToShowAdminColumn = [
            KeywordTaxonomy::class,
            AreaOfStudyTaxonomy::class,
        ];

        foreach (TaxonomiesList::new() as $taxonomyClass) {
            /** @var Taxonomy $taxonomyObject */
            // phpcs:ignore NeutronStandard.Functions.DisallowCallUserFunc.CallUserFunc
            $taxonomyObject = call_user_func([$taxonomyClass, 'public']);

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
