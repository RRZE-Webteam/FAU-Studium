<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application;

use Fau\DegreeProgram\Common\Application\DegreeProgramViewRaw;
use Fau\DegreeProgram\Common\Application\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;

final class DegreeProgramRetriever
{
    public function __construct(
        private DegreeProgramViewRepository $degreeProgramViewRepository,
    ) {
    }

    public function retrieveDegreeProgramView(
        int $id
    ): ?DegreeProgramViewRaw {

        return $this->degreeProgramViewRepository->findRaw(
            DegreeProgramId::fromInt($id)
        );
    }
}
