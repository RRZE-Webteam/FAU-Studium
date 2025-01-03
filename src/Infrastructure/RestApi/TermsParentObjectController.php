<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\RestApi;

use Fau\DegreeProgram\Common\Domain\AdmissionRequirement;
use Fau\DegreeProgram\Common\Domain\Degree;
use Fau\DegreeProgram\Common\Domain\MultilingualLink;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\BachelorOrTeachingDegreeAdmissionRequirementTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\DegreeTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\GermanLanguageSkillsForInternationalStudentsTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\MasterDegreeAdmissionRequirementTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TeachingDegreeHigherSemesterAdmissionRequirementTaxonomy;
use Fau\DegreeProgram\Infrastructure\Repository\TermsRepository;
use WP_Term;

/**
 * @psalm-import-type DegreeType from Degree
 * @psalm-import-type AdmissionRequirementType from AdmissionRequirement
 * @psalm-import-type MultilingualLinkType from MultilingualLink
 */
final class TermsParentObjectController
{
    public function __construct(private TermsRepository $termsRepository)
    {
    }

    /**
     * @param array{id: int, parent: int, taxonomy: string} $term
     */
    public function get(array $term): ?array
    {
        if (!$term['parent']) {
            return null;
        }

        $parentTerm = get_term_by('id', $term['parent'], $term['taxonomy']);

        if (!$parentTerm instanceof WP_Term) {
            return null;
        }

        switch ($term['taxonomy']) {
            case DegreeTaxonomy::KEY:
                return $this->parentDegree($parentTerm);

            case MasterDegreeAdmissionRequirementTaxonomy::KEY:
            case BachelorOrTeachingDegreeAdmissionRequirementTaxonomy::KEY:
            case TeachingDegreeHigherSemesterAdmissionRequirementTaxonomy::KEY:
                return $this->parentAdmissionRequirement($parentTerm);

            case GermanLanguageSkillsForInternationalStudentsTaxonomy::KEY:
                return $this->parentGermanLanguageSkillsForInternationalStudents($parentTerm);

            default:
                return null;
        }
    }

    /**
     * @psalm-return DegreeType
     */
    private function parentDegree(WP_Term $term): array
    {
        return $this->termsRepository->degreeFromTerm($term)->asArray();
    }

    /**
     * @psalm-return AdmissionRequirementType
     */
    private function parentAdmissionRequirement(WP_Term $term): array
    {
        return $this->termsRepository->admissionRequirement($term)->asArray();
    }

    /**
     * @psalm-return MultilingualLinkType
     */
    private function parentGermanLanguageSkillsForInternationalStudents(WP_Term $term): array
    {
        return $this->termsRepository->multilingualLinkFromTerm($term)->asArray();
    }
}
