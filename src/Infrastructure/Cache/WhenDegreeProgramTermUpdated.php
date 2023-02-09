<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Cache;

use Fau\DegreeProgram\Common\Application\Cache\CacheInvalidator;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Psr\SimpleCache\InvalidArgumentException;

final class WhenDegreeProgramTermUpdated
{
    public function __construct(
        private CacheInvalidator $cacheInvalidator
    ) {
    }

    /**
     * @throws InvalidArgumentException
     */
    public function invalidateCache(int $termId, string $taxonomy): void
    {
        $ids = $this->findDegreeProgramsIds($termId, $taxonomy);
        if (count($ids) === 0) {
            return;
        }

        $this->cacheInvalidator->invalidatePartially($ids);
    }

    /**
     * @TODO: consider moving to the standalone repository
     *
     * @psalm-return array<int>
     */
    private function findDegreeProgramsIds(int $termId, string $taxonomy): array
    {
        /** @var array<int> $ids */
        $ids = get_posts(
            [
                'numberposts' => -1,
                'post_type' => DegreeProgramPostType::KEY,
                'tax_query' => [
                    [
                        'taxonomy' => $taxonomy,
                        'terms' => [$termId],
                    ],
                ],
                'fields' => 'ids',
            ]
        );

        return $ids;
    }
}
