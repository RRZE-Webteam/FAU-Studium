<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramEditor;

use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TaxonomiesList;
use WP_REST_Request;
use WP_REST_Response;
use WP_Taxonomy;

class TaxonomyVisibilityModifier
{
    /**
     * @wp-hook rest_prepare_taxonomy
     * @param WP_REST_Response $response
     * @param WP_Taxonomy $taxonomy
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     */
    public function modify(WP_REST_Response $response, WP_Taxonomy $taxonomy, WP_REST_Request $request): WP_REST_Response
    {
        $degreeProgramTaxonomies = array_map(
            static fn(string $taxonomyClassName): string => (string) $taxonomyClassName::KEY,
            (TaxonomiesList::new())->getArrayCopy()
        );

        if (! in_array($taxonomy->name, $degreeProgramTaxonomies, true)) {
            return $response;
        }

        $context = $request['context'] ?? 'view';
        if ($context !== 'edit') {
            return $response;
        }

        if ($taxonomy->meta_box_cb !== false) {
            return $response;
        }

        /**
         * @var array{visibility: array{show_ui: bool}} $data
         */
        $data = $response->get_data();
        $data['visibility']['show_ui'] = false;
        $response->set_data($data);

        return $response;
    }
}
