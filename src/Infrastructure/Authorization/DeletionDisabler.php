<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use WP_Post;

final class DeletionDisabler
{
    /**
     * @wp-hook pre_delete_post
     *
     * Return false to prevent deletion.
     *
     * @see wp_scheduled_delete
     * @see wp_delete_post
     */
    public function forbidDirectDeletionOfDegreePrograms(mixed $delete, WP_Post $post): mixed
    {
        if ($post->post_type !== DegreeProgramPostType::KEY) {
            return $delete;
        }

        /** @psalm-suppress TypeDoesNotContainType */
        if (!EMPTY_TRASH_DAYS) {
            return $delete;
        }

        if ($post->post_status !== 'trash') {
            return false;
        }

        if ($this->wasPostInTrashLongEnough($post)) {
            return $delete;
        }

        return false;
    }

    private function wasPostInTrashLongEnough(WP_Post $post): bool
    {
        $trashTime = (int) get_post_meta($post->ID, '_wp_trash_meta_time', true);
        return time() - $trashTime >= DAY_IN_SECONDS * EMPTY_TRASH_DAYS;
    }
}
