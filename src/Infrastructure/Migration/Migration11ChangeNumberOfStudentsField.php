<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Migration;

use Fau\DegreeProgram\Common\Application\Cache\CacheKeyGenerator;
use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Domain\NumberOfStudents;
use Fau\DegreeProgram\Common\Infrastructure\Cache\PostMetaDegreeProgramCache;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\NumberOfStudentsTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;
use Psr\SimpleCache\CacheInterface;
use WP_Post;

final class Migration11ChangeNumberOfStudentsField
{
    public function __construct(
        private CacheKeyGenerator $cacheKeyGenerator,
        private CacheInterface $cache,
        private IdGenerator $idGenerator,
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
            $numberOfStudentsData = $this->generateNumberOrStudentsData($id) ?? NumberOfStudents::empty()->asArray();
            foreach ([CacheKeyGenerator::RAW_TYPE, CacheKeyGenerator::TRANSLATED_TYPE] as $type) {
                $this->updateNumberOrStudentsData($id, $type, $numberOfStudentsData);
            }
        }
    }

    private function generateNumberOrStudentsData(int $id): ?array
    {
        /** @var array<int, array|null> $cache */
        static $cache = [];
        $post = get_post($id);
        if (!$post instanceof WP_Post) {
            return null;
        }

        if ($post->post_parent) {
            $id = $post->post_parent;
        }

        if (array_key_exists($id, $cache)) {
            return $cache[$id];
        }

        $terms = get_the_terms($id, NumberOfStudentsTaxonomy::KEY);
        if (!is_array($terms) || count($terms) !== 1) {
            $cache[$id] = null;
            return null;
        }
        $term = $terms[0];

        $cache[$id] = [
            NumberOfStudents::ID => $this->idGenerator->generateTermId($term->term_id),
            NumberOfStudents::NAME => $term->name,
            NumberOfStudents::DESCRIPTION => term_description($term->term_id),
        ];
        return $cache[$id];
    }

    /**
     * @psalm-param 'raw'|'translated' $type
     */
    private function updateNumberOrStudentsData(
        int $id,
        string $type,
        array $numberOfStudentsData
    ): void {

        $key = $this->cacheKeyGenerator->generateForDegreeProgram(
            DegreeProgramId::fromInt($id),
            $type
        );

        /** @var array|null $data */
        $data = $this->cache->get($key);

        if (!$data) {
            return;
        }

        $data[DegreeProgram::NUMBER_OF_STUDENTS] = $numberOfStudentsData;
        $this->cache->set($key, $data);
    }
}
