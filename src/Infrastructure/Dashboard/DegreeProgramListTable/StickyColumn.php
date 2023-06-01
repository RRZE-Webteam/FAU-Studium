<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramListTable;

use Fau\DegreeProgram\Common\Infrastructure\Repository\StickyDegreeProgramRepository;

final class StickyColumn
{
    private const STICKY_COLUMN = 'sticky-column';

    public function __construct(
        private AdminRequest $adminRequest,
        private StickyDegreeProgramRepository $stickyDegreeProgramRepository,
    ) {
    }

    /**
     * @wp-hook manage_studiengang_posts_columns
     */
    public function registerStickyColumn(array $columns): array
    {
        $columns[self::STICKY_COLUMN] = _x(
            'Sticky',
            'backoffice: degree program list',
            'fau-degree-program'
        );

        return $columns;
    }

    /**
     * @wp-hook manage_studiengang_posts_custom_column
     */
    public function renderStickyColumn(string $columnName, int $postId): void
    {
        if ($columnName !== self::STICKY_COLUMN) {
            return;
        }

        $isSticky = $this->stickyDegreeProgramRepository->isSticky(
            $postId,
            $this->adminRequest->detectTermQuery(),
        );

        printf(
            '<span class="dashicons dashicons-star-%s"></span>',
            esc_attr($isSticky ? 'filled' : 'empty')
        );
    }
}
