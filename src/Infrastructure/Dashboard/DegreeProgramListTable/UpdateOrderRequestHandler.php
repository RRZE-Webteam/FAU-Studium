<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramListTable;

use Fau\DegreeProgram\Common\Infrastructure\Repository\OrderRepository;

final class UpdateOrderRequestHandler
{
    public const ACTION = 'fau-update-degree-program-order';

    public function __construct(
        private OrderRepository $orderRepository,
    ) {
    }

    /**
     * @wp-hook wp_ajax_fau-update-degree-program-order
     */
    public function handle(): void
    {
        check_ajax_referer(self::ACTION);

        $requestData = filter_input_array(INPUT_POST, [
            'ids' => [
                'filter' => FILTER_VALIDATE_INT,
                'flags' => FILTER_REQUIRE_ARRAY,
                'options' => ['min_range' => 1],
            ],
            'current_page' => FILTER_VALIDATE_INT,
            'per_page' => FILTER_VALIDATE_INT,
            'taxonomy' => FILTER_SANITIZE_SPECIAL_CHARS,
            'term' => FILTER_VALIDATE_INT,
        ], false);

        $defaultData = [
            'ids' => [],
            'current_page' => 1,
            'per_page' => 20,
            'taxonomy' => '',
            'term' => 0,
        ];

        /**
         * @var array{
         *     ids: array<int>,
         *     current_page: int,
         *     per_page: int,
         *     taxonomy: string,
         *     term: int,
         * } $data
         */
        $data = array_merge($defaultData, $requestData ?: []);
        if (!$data['ids']) {
            return;
        }

        $start = $data['per_page'] * ($data['current_page'] - 1) + 1;

        if ($data['taxonomy'] && $data['term']) {
            $this->orderRepository->updateOrderByTerm(
                $start,
                $data['ids'],
                $data['taxonomy'],
                $data['term']
            );
            wp_send_json_success();
        }

        $this->orderRepository->updateMenuOrder($start, $data['ids']);
        wp_send_json_success();
    }
}
