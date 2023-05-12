<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramListTable;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Repository\OrderRepository;
use WP_Query;

final class EditPostsQueryModifier
{
    public function __construct(
        private AdminRequest $adminRequest,
    ) {
    }

    /**
     * @wp-hook pre_get_post
     * phpcs:disable Inpsyde.CodeQuality.NoAccessors.NoSetter
     */
    public function setUpOrder(WP_Query $query): void
    {
        if (
            !$query->is_admin
            || !$query->is_main_query()
            || $query->get('orderby')
            || !$this->isDegreeProgramQuery($query)
        ) {
            return;
        }

        $termData = $this->adminRequest->detectTermQuery();

        if ($termData) {
            $key = OrderRepository::orderByTermKey($termData['taxonomy'], $termData['term']);

            $query->set(
                'meta_query',
                [
                    'relation' => 'AND',
                    [
                        'relation' => 'OR',
                        $key => [
                            'key' => $key,
                            'type' => 'UNSIGNED',
                        ],
                        [
                            'key' => $key,
                            'compare' => 'NOT EXISTS',
                        ],
                    ],
                    // Preserve existing `meta_query` and append to ours via `AND` relation
                    array_filter((array) $query->get('meta_query')),
                ],
            );

            $query->set('orderby', [
                $key => 'ASC',
            ]);
            return;
        }

        $query->set('orderby', [
            'menu_order' => 'ASC',
        ]);
    }

    private function isDegreeProgramQuery(WP_Query $query): bool
    {
        return in_array(DegreeProgramPostType::KEY, (array) $query->get('post_type'), true);
    }
}
