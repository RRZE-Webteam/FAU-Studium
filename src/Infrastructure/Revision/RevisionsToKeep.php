<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision;

use Fau\DegreeProgram\Infrastructure\Repository\RevisionMetaRepository;

class RevisionsToKeep
{
    public function __construct(private RevisionMetaRepository $revisionMetaRepository)
    {
    }

    /**
     * @wp-hook wp_studiengang_revisions_to_keep
     */
    public function limit(): int
    {
        return $this->revisionMetaRepository->revisionsToKeep();
    }
}
