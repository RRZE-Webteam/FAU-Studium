<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Content;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\DegreeTaxonomy;
use WP_Query;

class SortableDegreeTaxonomyColumn
{
    /**
     * @wp-hook manage_edit-abschluss_sortable_columns
     */
    public function addDegreeToSortableColumns(array $columns): array
    {
        $columns['taxonomy-' . DegreeTaxonomy::KEY] = DegreeTaxonomy::KEY;
        return $columns;
    }

    /**
     * @wp-hook posts_clauses
     * @param array{join: string, where: string} $clauses
     */
    public function modifyClauses(array $clauses, WP_Query $query): array
    {
        if (!is_admin() || $query->query['post_type'] !== DegreeProgramPostType::KEY) {
            return $clauses;
        }

        if (!isset($query->query['orderby']) || $query->query['orderby'] !== DegreeTaxonomy::KEY) {
            return $clauses;
        }

        global $wpdb;

        $clauses['join'] .= <<<SQL
            LEFT OUTER JOIN {$wpdb->term_relationships}
                ON {$wpdb->posts}.ID={$wpdb->term_relationships}.object_id
            LEFT OUTER JOIN {$wpdb->term_taxonomy} USING (term_taxonomy_id)
            LEFT OUTER JOIN {$wpdb->terms} USING (term_id)
        SQL;

        $clauses['where'] .= " AND (taxonomy = '" . DegreeTaxonomy::KEY . "')";
        $clauses['groupby'] = "object_id";
        $clauses['orderby'] = "GROUP_CONCAT({$wpdb->terms}.name ORDER BY name ASC) ";
        $clauses['orderby'] .= ('ASC' === strtoupper((string) $query->get('order')))
            ? 'ASC'
            : 'DESC';
        $clauses['orderby'] .= ", {$wpdb->posts}.post_name ASC";

        return $clauses;
    }
}
