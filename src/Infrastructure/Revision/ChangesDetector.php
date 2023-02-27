<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision;

use Fau\DegreeProgram\Application\Revision\DegreeProgramRevision;
use Fau\DegreeProgram\Application\Revision\DegreeProgramRevisionRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use JsonException;
use WP_Post;

final class ChangesDetector
{
    public function __construct(private DegreeProgramRevisionRepository $degreeProgramRevisionRepository)
    {
    }

    /**
     * @wp-hook wp_save_post_revision_post_has_changed
     */
    public function hasDegreeProgramChanged(bool $postHasChanged, WP_Post $latestRevision, WP_Post $post): bool
    {
        if ($post->post_type !== DegreeProgramPostType::KEY) {
            return $postHasChanged;
        }

        $revision = $this->degreeProgramRevisionRepository->findRevision(DegreeProgramId::fromInt($latestRevision->ID));
        if (!$revision instanceof DegreeProgramRevision) {
            return true;
        }

        $currentState = $this->degreeProgramRevisionRepository->findRevision(DegreeProgramId::fromInt($post->ID));
        if (!$currentState instanceof DegreeProgramRevision) {
            return true;
        }

        try {
            return json_encode($revision->asArray(), JSON_THROW_ON_ERROR) !== json_encode($currentState->asArray(), JSON_THROW_ON_ERROR);
        } catch (JsonException) {
            return true;
        }
    }
}
