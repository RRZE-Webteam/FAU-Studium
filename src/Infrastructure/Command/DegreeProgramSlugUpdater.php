<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Command;

use Fau\DegreeProgram\Application\DegreeProgramBulkUpdater;
use Fau\DegreeProgram\Common\Domain\Degree;

final class DegreeProgramSlugUpdater
{
    public function __construct(
        private DegreeProgramBulkUpdater $degreeProgramBulkUpdater
    ) {
    }

    /**
     * @wp-hook updated_term_meta
     */
    public function whenTermMetaUpdated(int $metaId, int $objectId, string $metaKey): void
    {
        if ($metaKey !== Degree::ABBREVIATION) {
            return;
        }

        $this->degreeProgramBulkUpdater->whenDegreeTermUpdated($objectId);
    }
}
