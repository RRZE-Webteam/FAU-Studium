<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application;

use Fau\DegreeProgram\Common\Domain\DegreeProgramDataValidator;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramSanitizer;

final class DegreeProgramUpdater
{
    public function __construct(
        private DegreeProgramRepository $degreeProgramRepository,
        private DegreeProgramDataValidator $degreeProgramDataValidator,
        private DegreeProgramSanitizer $degreeProgramSanitizer,
    ) {
    }

    public function updateDegreeProgram(
        int $id,
        array $data
    ): void {

        $degreeProgram = $this->degreeProgramRepository->getById(
            DegreeProgramId::fromInt($id)
        );

        $degreeProgram->update(
            $data,
            $this->degreeProgramDataValidator,
            $this->degreeProgramSanitizer,
        );

        $this->degreeProgramRepository->save($degreeProgram);
    }
}
