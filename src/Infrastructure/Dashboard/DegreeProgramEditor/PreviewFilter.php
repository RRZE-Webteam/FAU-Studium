<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramEditor;

use Fau\DegreeProgram\Common\Application\DegreeProgramViewTranslated;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Domain\MultilingualString;

/**
 * @psalm-import-type LanguageCodes from MultilingualString
 */
final class PreviewFilter
{
    public function __construct(
        private DegreeProgramViewRepository $viewRepository,
    ) {
    }

    /**
     * @wp-hook fau.degree-program-output.single-view
     *
     * @psalm-param LanguageCodes $languageCode
     */
    public function filterView(
        ?DegreeProgramViewTranslated $originalView,
        int $degreeProgramId,
        string $languageCode,
    ): ?DegreeProgramViewTranslated {

        if (!is_preview()) {
            return $originalView;
        }

        return $this->viewRepository->findTranslated(
            DegreeProgramId::fromInt($degreeProgramId),
            $languageCode
        );
    }
}
