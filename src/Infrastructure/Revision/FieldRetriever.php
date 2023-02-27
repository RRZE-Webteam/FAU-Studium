<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision;

use Fau\DegreeProgram\Application\Revision\DegreeProgramRevision;
use Fau\DegreeProgram\Application\Revision\DegreeProgramRevisionRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use WP_Post;

final class FieldRetriever
{
    public function __construct(private DegreeProgramRevisionRepository $degreeProgramRevisionRepository)
    {
    }

    /**
     * @wp-hook _wp_post_revision_field_{$key}
     */
    public function retrieve(string $value, string $field, WP_Post $post): string
    {
        $revision = $this->degreeProgramRevisionRepository->findRevision(DegreeProgramId::fromInt($post->ID));
        if (!$revision instanceof DegreeProgramRevision) {
            return $value;
        }

        $data = $revision->asArray();
        return $data[$field] ?? $value;
    }
}
