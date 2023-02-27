<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision;

use Fau\DegreeProgram\Application\Revision\DegreeProgramRevisionRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;

class PersistRevision
{
    public function __construct(
        private DegreeProgramRevisionRepository $degreeProgramRevisionRepository
    ) {
    }

    /**
     * @wp-hook _wp_put_post_revision
     */
    public function persist(int $postId): void
    {
        $parentPostId = wp_is_post_revision($postId);

        if ($parentPostId === false) {
            return;
        }

        if (get_post_type($parentPostId) !== DegreeProgramPostType::KEY) {
            return;
        }

        $this->degreeProgramRevisionRepository->addRevision(
            DegreeProgramId::fromInt($parentPostId),
            DegreeProgramId::fromInt($postId),
        );
    }
}
