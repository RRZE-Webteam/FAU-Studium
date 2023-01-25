<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramEditor;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use WP_Post;

final class InlineEditingDisabler
{
    /**
     * @wp-hook post_row_actions
     */
    public function disableForDegreeProgram(array $actions, WP_Post $post): array
    {
        if ($post->post_type !== DegreeProgramPostType::KEY) {
            return $actions;
        }

        unset($actions['inline hide-if-no-js']);

        return $actions;
    }
}
