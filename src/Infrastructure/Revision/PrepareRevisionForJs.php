<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision;

use Fau\DegreeProgram\Application\Revision\DegreeProgramRevision;
use Fau\DegreeProgram\Application\Revision\DegreeProgramRevisionRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;

final class PrepareRevisionForJs
{
    public function __construct(private DegreeProgramRevisionRepository $degreeProgramRevisionRepository)
    {
    }

    /**
     * @wp-hook wp_prepare_revision_for_js
     */
    public function prepare(array $revisionData): array
    {
        $id = (int) $revisionData['id'];
        $revision = $this->degreeProgramRevisionRepository->findRevision(DegreeProgramId::fromInt($id));
        if (!$revision instanceof DegreeProgramRevision) {
            return $revisionData;
        }

        return array_merge($revisionData, $revision->asArray());
    }
}
