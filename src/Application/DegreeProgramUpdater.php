<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application;

use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Domain\DegreeProgramDataValidator;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramSanitizer;

/**
 * @psalm-import-type DegreeProgramArrayType from DegreeProgram
 */
final class DegreeProgramUpdater
{
    public function __construct(
        private DegreeProgramRepository $degreeProgramRepository,
        private DegreeProgramDataValidator $degreeProgramDataValidator,
        private DegreeProgramSanitizer $degreeProgramSanitizer,
    ) {
    }

    /**
     * @psalm-param DegreeProgramArrayType $data
     */
    public function publish(
        int $id,
        array $data
    ): void {

        $degreeProgram = $this->degreeProgramRepository->getById(
            DegreeProgramId::fromInt($id)
        );

        $degreeProgram->publish(
            $data,
            $this->degreeProgramDataValidator,
            $this->degreeProgramSanitizer,
        );

        $this->degreeProgramRepository->save($degreeProgram);
    }

    /**
     * @psalm-param DegreeProgramArrayType $data
     */
    public function updateDraft(
        int $id,
        array $data
    ): void {

        $degreeProgram = $this->degreeProgramRepository->getById(
            DegreeProgramId::fromInt($id)
        );

        $degreeProgram->updateDraft(
            $data,
            $this->degreeProgramDataValidator,
            $this->degreeProgramSanitizer,
        );

        $this->degreeProgramRepository->save($degreeProgram);
    }
}
