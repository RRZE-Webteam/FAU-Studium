<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramListTable;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TaxonomiesList;
use WP_Screen;
use WP_Term;

final class AdminRequest
{
    public function isDegreeProgramListTable(): bool
    {
        $screen = get_current_screen();
        if (!$screen instanceof WP_Screen) {
            return false;
        }

        return $screen->base === 'edit' && $screen->post_type === DegreeProgramPostType::KEY;
    }

    public function detectTermQuery(): ?WP_Term
    {
        foreach (TaxonomiesList::new()->keys() as $taxonomy) {
            $term = (string) filter_input(INPUT_GET, $taxonomy, FILTER_SANITIZE_SPECIAL_CHARS);
            if (!$term) {
                continue;
            }

            $termObject = get_term_by('slug', $term, $taxonomy);
            if (!$termObject instanceof WP_Term) {
                continue;
            }

            return $termObject;
        }

        return null;
    }
}
