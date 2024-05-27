<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Migration;

use Fau\DegreeProgram\Common\Application\Cache\CacheKeyGenerator;
use Fau\DegreeProgram\Common\Application\DegreeProgramViewTranslated;
use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Infrastructure\Cache\PostMetaDegreeProgramCache;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Psr\SimpleCache\CacheInterface;

final class Migration0015CampoKeyMeta
{
    public function __construct(
        private CacheKeyGenerator $cacheKeyGenerator,
        private CacheInterface $cache
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

        foreach ($degreeProgramIds as $id) {
            foreach ([CacheKeyGenerator::RAW_TYPE, CacheKeyGenerator::TRANSLATED_TYPE] as $type) {
                $this->initializeCampoKeys($id, $type);
            }
        }
    }

    /**
     * @psalm-param 'raw'|'translated' $type
     */
    private function initializeCampoKeys(int $id, string $type): void
    {
        $key = $this->cacheKeyGenerator->generateForDegreeProgram(
            DegreeProgramId::fromInt($id),
            $type
        );

        /** @var array|null $data */
        $data = $this->cache->get($key);

        if (is_null($data)) {
            return;
        }

        $data[DegreeProgram::CAMPO_KEYS] = [];

        if (
            isset($data[DegreeProgramViewTranslated::TRANSLATIONS])
            && is_array($data[DegreeProgramViewTranslated::TRANSLATIONS])
        ) {
            foreach ($data[DegreeProgramViewTranslated::TRANSLATIONS] as &$translation) {
                is_array($translation) && $translation[DegreeProgram::CAMPO_KEYS] = [];
            }
        }

        $this->cache->set($key, $data);
    }
}
