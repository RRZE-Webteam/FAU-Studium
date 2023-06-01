<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramListTable;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Repository\StickyDegreeProgramRepository;
use WP_Post;
use WP_Term;

final class ToggleStickyRequestHandler
{
    public const ACTION = 'fau-toggle-sticky-degree-program';

    public function __construct(
        private StickyDegreeProgramRepository $stickyDegreeProgramRepository,
    ) {
    }

    /**
     * @wp-hook wp_ajax_fau-toggle-sticky-degree-program
     * phpcs:disable Inpsyde.CodeQuality.FunctionLength.TooLong
     */
    public function handle(): void
    {
        check_ajax_referer(self::ACTION);

        $requestData = filter_input_array(INPUT_POST, [
            'id' => [
                'filter' => FILTER_VALIDATE_INT,
                'options' => ['min_range' => 1],
            ],
            'taxonomy' => FILTER_SANITIZE_SPECIAL_CHARS,
            'term' => FILTER_VALIDATE_INT,
        ], false);

        $defaultData = [
            'id' => 0,
            'taxonomy' => '',
            'term' => 0,
        ];

        /**
         * @var array{
         *     id: int,
         *     taxonomy: string,
         *     term: int,
         * } $data
         */
        $data = array_merge($defaultData, $requestData ?: []);
        if (!$data['id']) {
            return;
        }

        $post = get_post($data['id']);
        if (!$post instanceof WP_Post || $post->post_type !== DegreeProgramPostType::KEY) {
            wp_send_json_error([
                'message' => _x(
                    'Invalid post id.',
                    'backoffice: AJAX error',
                    'fau-degree-program'
                ),
            ], 400);
        }

        $term = $data['taxonomy'] && $data['term']
            ? get_term($data['term'], $data['taxonomy'])
            : null;

        if (!$term instanceof WP_Term && $term !== null) {
            wp_send_json_error([
                'message' => _x(
                    'Invalid term.',
                    'backoffice: AJAX error',
                    'fau-degree-program'
                ),
            ], 400);
        }

        $result = $this->stickyDegreeProgramRepository->toggleSticky($post->ID, $term);
        if (!$result) {
            wp_send_json_error([
                'message' => _x(
                    'Could not toggle sticky.',
                    'backoffice: AJAX error',
                    'fau-degree-program'
                ),
            ], 400);
        }

        wp_send_json_success();
    }
}
