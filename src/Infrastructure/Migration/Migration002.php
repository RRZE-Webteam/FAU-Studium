<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Migration;

use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\LanguageExtension\ArrayOfStrings;

final class Migration002
{
    public function __invoke(): void
    {
        /** @var array<int> $degreeProgramIds */
        $degreeProgramIds = get_posts([
            'post_type' => DegreeProgramPostType::KEY,
            'post_status' => ['any', 'trash'],
            'posts_per_page' => -1,
            'fields' => 'ids',
        ]);

        foreach ($degreeProgramIds as $id) {
            $videos = get_post_meta($id, DegreeProgram::VIDEOS, true);
            if (is_string($videos)) {
                continue;
            }

            if ($videos instanceof ArrayOfStrings) {
                $videos = $videos->getArrayCopy();
                update_post_meta($id, DegreeProgram::VIDEOS, implode(',', $videos));
                continue;
            }

            // Unsupported format
            delete_post_meta($id, DegreeProgram::VIDEOS);
        }
    }
}
