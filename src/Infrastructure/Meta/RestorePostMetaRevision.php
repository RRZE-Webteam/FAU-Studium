<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Meta;

use Fau\DegreeProgram\Common\Infrastructure\Content\Meta\MetaFieldsList;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;

class RestorePostMetaRevision
{
    public function restore(int $postId, int $revisionId): void
    {
        $postType = get_post_type($postId);
        if ($postType !== DegreeProgramPostType::KEY) {
            return;
        }

        $metaFieldKeys = MetaFieldsList::new();
        foreach ($metaFieldKeys as $key) {
            $metaValue = get_metadata('post', $revisionId, $key, true);
            update_post_meta($postId, $key, $metaValue);
        }
    }
}
