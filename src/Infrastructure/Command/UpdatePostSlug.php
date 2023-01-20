<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Command;

use Fau\DegreeProgram\Application\Content\GeneratePostSlug;
use Fau\DegreeProgram\Infrastructure\Repository\PostSlugRepository;

class UpdatePostSlug
{
    public function __construct(
        private GeneratePostSlug $generatePostSlug,
        private PostSlugRepository $postSlugRepository
    ) {
    }

    /**
     * @wp-hook save_post_studiengang
     * @param int $postId
     * @return void
     */
    public function update(int $postId): void
    {
        if (wp_is_post_revision($postId)) {
            return;
        }

        remove_action(
            current_action(),
            [$this, 'update']
        );

        $slug = $this->generatePostSlug->generate($postId);
        $this->postSlugRepository->save($postId, $slug);
    }
}
