<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramListTable;

final class SortableColumn
{
    private const SORTABLE_COLUMN_ID = 'sortable-column';

    /**
     * @wp-hook manage_studiengang_posts_columns
     */
    public function registerSortableColumn(array $columns): array
    {
        $url = remove_query_arg(['order', 'orderby']);

        $title = sprintf(
            '<a href="%1$s">' .
            '<span class="dashicons dashicons-sort"></span>' .
            '</a>',
            esc_url($url),
        );

        return [self::SORTABLE_COLUMN_ID => $title] + $columns;
    }
}
