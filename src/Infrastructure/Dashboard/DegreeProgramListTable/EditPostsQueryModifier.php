<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramListTable;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Repository\StickyDegreeProgramRepository;
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

        $term = $this->adminRequest->detectTermQuery();
        $key = StickyDegreeProgramRepository::stickyKey($term);

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
            $key => 'DESC', // 1 (sticky posts), 0 (other posts)
            'date' => 'DESC',
        ]);
    }

    private function isDegreeProgramQuery(WP_Query $query): bool
    {
        return in_array(
            DegreeProgramPostType::KEY,
            (array) $query->get('post_type'),
            true
        );
    }
}
