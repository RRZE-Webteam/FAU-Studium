<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application;

use Fau\DegreeProgram\Common\Application\Filter\DegreeFilter;
use Fau\DegreeProgram\Common\Application\Repository\CollectionCriteria;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Application\Repository\PaginationAwareCollection;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;

final class DegreeProgramBulkUpdater
{
    public function __construct(
        private DegreeProgramCollectionRepository $degreeProgramCollectionRepository,
        private DegreeProgramRepository $degreeProgramRepository,
    ) {
    }

    /**
     * Degree program values are calculated based on the degree term.
     * So if the term was changed, we have to update all related degree programs.
     */
    public function whenDegreeTermUpdated(int $termId): void
    {
        $rawViews = $this->degreeProgramCollectionRepository->findRawCollection(
            CollectionCriteria::new()
            ->withoutPagination()
            ->addFilter(DegreeFilter::fromInput($termId))
        );

        if (!$rawViews instanceof PaginationAwareCollection) {
            return;
        }

        foreach ($rawViews as $rawView) {
            $entity = $this->degreeProgramRepository->getById($rawView->id());
            $this->degreeProgramRepository->save($entity);
        }
    }
}
