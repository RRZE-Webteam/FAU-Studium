<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Command;

use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use WP_Post;

final class RelatedPostMetaRemover
{
    /**
     * @wp-hook deleted_post
     */
    public function whenDegreeProgramDeleted(int|string $postId, WP_Post $post): void
    {
        if ($post->post_type !== DegreeProgramPostType::KEY) {
            return;
        }

        delete_metadata(
            'post',
            0,
            DegreeProgram::COMBINATIONS,
            (string) $postId,
            true
        );
        delete_metadata(
            'post',
            0,
            DegreeProgram::LIMITED_COMBINATIONS,
            (string) $postId,
            true
        );
    }
}
