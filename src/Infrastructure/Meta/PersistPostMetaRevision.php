<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Meta;

use Fau\DegreeProgram\Common\Infrastructure\Content\Meta\MetaFieldsList;

class PersistPostMetaRevision
{
    public function persist(int $postId): void
    {
        $parentPostId = wp_is_post_revision($postId);
        if ($parentPostId === false) {
            return;
        }

        $metaFieldKeys = MetaFieldsList::new();
        foreach ($metaFieldKeys as $key) {
            $metaValue = get_post_meta($parentPostId, $key, true);
            add_metadata('post', $postId, $key, $metaValue);
        }
    }
}
