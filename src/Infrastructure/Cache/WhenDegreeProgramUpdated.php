<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Cache;

use Fau\DegreeProgram\Common\Application\Cache\CacheInvalidator;
use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Domain\Event\DegreeProgramUpdated;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Psr\SimpleCache\InvalidArgumentException;

final class WhenDegreeProgramUpdated
{
    public function __construct(
        private CacheInvalidator $cacheInvalidator
    ) {
    }

    /**
     * @throws InvalidArgumentException
     */
    public function invalidateCache(DegreeProgramUpdated $event): void
    {
        $postId = $event->id();
        $combinationIds = $this->findRelatedIds(DegreeProgram::COMBINATIONS, $postId);
        $limitedCombinationIds = $this->findRelatedIds(DegreeProgram::LIMITED_COMBINATIONS, $postId);
        $ids = array_unique(array_merge([$postId], $combinationIds, $limitedCombinationIds));

        $this->cacheInvalidator->invalidatePartially($ids);
    }

    /**
     * @TODO: move to the standalone repository
     *
     * @return array<int>
     */
    private function findRelatedIds(string $key, int $degreeProgramId): array
    {
        /** @var array<int> $ids */
        $ids = get_posts([
            'numberposts' => -1,
            'post_type' => DegreeProgramPostType::KEY,
            'meta_query' => [
                [
                    'key' => $key,
                    'value' => $degreeProgramId,
                    'type' => 'UNSIGNED',
                ],
            ],
            'fields' => 'ids',
        ]);

        return $ids;
    }
}
