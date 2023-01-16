<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Meta;

use Fau\DegreeProgram\Common\Infrastructure\Content\Meta\MetaFieldsList;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;

class UpdateListOfRevisionableFields
{
    /**
     * @wp-hook _wp_post_revision_fields
     * @param array $fields
     * @param array $post
     * @return array
     */
    public function update(array $fields, array $post): array
    {
        $postType = $post['post_type'] ?? '';
        if ($postType !== DegreeProgramPostType::KEY) {
            return $fields;
        }

        return array_merge(
            $fields,
            MetaFieldsList::new()->getArrayCopy()
        );
    }
}
