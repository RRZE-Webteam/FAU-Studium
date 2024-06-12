<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application;

use Fau\DegreeProgram\Common\Application\Filter\DegreeFilter;
use Fau\DegreeProgram\Common\Application\Repository\CollectionCriteria;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Application\Repository\PaginationAwareCollection;
use Fau\DegreeProgram\Common\Domain\Degree;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;

final class DegreeProgramBulkUpdater
{
    public function __construct(
        private DegreeProgramCollectionRepository $degreeProgramCollectionRepository,
        private DegreeProgramRepository $degreeProgramRepository,
    ) {
    }

    /**
     * Degree program slugs are calculated based on the "abbreviation" term meta value.
     * Therefore, if the abbreviation changes, we must update all related programs.
     *
     * @wp-hook updated_term_meta
     */
    public function whenTermMetaUpdated(int $metaId, int $objectId, string $metaKey): void
    {
        if ($metaKey !== Degree::ABBREVIATION) {
            return;
        }

        $this->updateDegreeProgramsByTerm($objectId);
    }

    private function updateDegreeProgramsByTerm(int $termId): void
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
