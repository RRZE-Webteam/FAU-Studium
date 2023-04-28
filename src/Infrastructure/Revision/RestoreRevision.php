<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision;

use Fau\DegreeProgram\Application\DegreeProgramUpdater;
use Fau\DegreeProgram\Common\Application\DegreeProgramViewRaw;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;

class RestoreRevision
{
    public function __construct(
        private DegreeProgramViewRepository $degreeProgramViewRepository,
        private DegreeProgramUpdater $degreeProgramUpdater,
    ) {
    }

    /**
     * @wp-hook wp_restore_post_revision
     */
    public function restore(int $postId, int $revisionId): void
    {
        $postType = get_post_type($postId);
        if ($postType !== DegreeProgramPostType::KEY) {
            return;
        }
        $revisionRaw = $this->degreeProgramViewRepository->findRaw(DegreeProgramId::fromInt($revisionId));
        if (!$revisionRaw instanceof DegreeProgramViewRaw) {
            return;
        }

        if (get_post_status($postId) === 'publish') {
            $this->degreeProgramUpdater->publish(
                $postId,
                $revisionRaw->asArray()
            );
            return;
        }

        $this->degreeProgramUpdater->updateDraft(
            $postId,
            $revisionRaw->asArray()
        );
    }
}
