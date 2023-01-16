<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramEditor;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;

final class PostTypeEditor
{
    /**
     * @wp-hook use_block_editor_for_post_type
     */
    public function forceBlockEditor(bool $enabled, string $postType): bool
    {
        return $postType === DegreeProgramPostType::KEY ? true : $enabled;
    }
}
