<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Migration;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TaxonomiesList;

final class Migration13RemoveCustomOrdering
{
    public function __invoke(): void
    {
        global $wpdb;

        $wpdb->update(
            $wpdb->posts,
            [
                'menu_order' => 0,
            ],
            [
                'post_type' => DegreeProgramPostType::KEY,
            ]
        );

        foreach (TaxonomiesList::new()->keys() as $slug) {
            /** @var array<int> $termIds */
            $termIds = get_terms(
                [
                    'taxonomy' => $slug,
                    'fields' => 'ids',
                    'hide_empty' => false,
                ]
            );

            foreach ($termIds as $id) {
                delete_post_meta_by_key(
                    sprintf('_order_%s_%d', $slug, $id)
                );
            }
        }
    }
}
