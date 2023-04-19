<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Migration;

use Fau\DegreeProgram\Common\Application\Cache\CacheKeyGenerator;
use Fau\DegreeProgram\Common\Application\Link;
use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Domain\MultilingualLink;
use Fau\DegreeProgram\Common\Infrastructure\Cache\PostMetaDegreeProgramCache;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Psr\SimpleCache\CacheInterface;

final class Migration0010AddInfoBrochureAndStudentInitiativesFields
{
    public function __construct(
        private CacheKeyGenerator $cacheKeyGenerator,
        private CacheInterface $cache,
    ) {
    }

    public function __invoke(): void
    {
        /** @var array<int> $degreeProgramIds */
        $degreeProgramIds = get_posts([
            'post_type' => [DegreeProgramPostType::KEY, 'revision'],
            'post_status' => ['any', 'trash', 'inherit'],
            'posts_per_page' => -1,
            'meta_query' => [
                'relation' => 'OR',
                [
                    'key' => PostMetaDegreeProgramCache::postMetaKey(
                        CacheKeyGenerator::RAW_TYPE
                    ),
                    'compare' => 'EXISTS',
                ],
                [
                    'key' => PostMetaDegreeProgramCache::postMetaKey(
                        CacheKeyGenerator::TRANSLATED_TYPE
                    ),
                    'compare' => 'EXISTS',
                ],
            ],
            'fields' => 'ids',
        ]);

        $patchedData = [
            CacheKeyGenerator::RAW_TYPE => [
                DegreeProgram::INFO_BROCHURE => '',
                DegreeProgram::STUDENT_INITIATIVES => MultilingualLink::empty()->asArray(),
            ],
            CacheKeyGenerator::TRANSLATED_TYPE => [
                DegreeProgram::INFO_BROCHURE => '',
                DegreeProgram::STUDENT_INITIATIVES => Link::empty()->asArray(),
            ],
        ];

        foreach ($degreeProgramIds as $id) {
            foreach ($patchedData as $type => $data) {
                $this->patchCachedData($id, $type, $data);
            }
        }
    }

    /**
     * @psalm-param 'raw'|'translated' $type
     */
    private function patchCachedData(int $postId, string $type, array $newData): void
    {
        $key = $this->cacheKeyGenerator->generateForDegreeProgram(
            DegreeProgramId::fromInt($postId),
            $type
        );

        /** @var array|null $data */
        $data = $this->cache->get($key);

        if (!$data) {
            return;
        }

        $data = array_merge($data, $newData);
        $this->cache->set($key, $data);
    }
}
