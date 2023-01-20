<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Common\Domain\MultilingualString;
use Fau\DegreeProgram\Common\Infrastructure\Repository\BilingualRepository;

class PostSlugRepository
{
    public function save(int $postId, MultilingualString $slug): void
    {
        wp_update_post([
            'ID' => $postId,
            'post_name' => $slug->inGerman(),
            'meta_input' => [
                BilingualRepository::addEnglishSuffix('post_name') => $slug->inEnglish(),
            ],
        ]);
    }
}
