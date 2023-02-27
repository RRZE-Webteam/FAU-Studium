<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\Revision;

use Fau\DegreeProgram\Common\Domain\DegreeProgramId;

interface DegreeProgramRevisionRepository
{
    public function addRevision(
        DegreeProgramId $degreeProgramId,
        DegreeProgramId $revisionId
    ): void;

    public function findRevision(DegreeProgramId $revisionId): ?DegreeProgramRevision;
}
