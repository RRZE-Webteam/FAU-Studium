<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Common\Domain\AdmissionRequirement;
use Fau\DegreeProgram\Common\Domain\Degree;
use Fau\DegreeProgram\Common\Infrastructure\Repository\BilingualRepository;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;
use WP_Term;

final class TermsRepository extends BilingualRepository
{
    public function __construct(IdGenerator $idGenerator)
    {
        parent::__construct($idGenerator);
    }

    public function degreeFromTerm(WP_Term $term): Degree
    {
        $parent = get_term($term->parent);

        return Degree::new(
            $this->idGenerator->generateTermId($term),
            $this->bilingualTermName($term),
            $this->bilingualTermMeta($term, Degree::ABBREVIATION),
            $parent instanceof WP_Term ? $this->degreeFromTerm($parent) : null,
        );
    }

    public function admissionRequirement(?WP_Term $term): AdmissionRequirement
    {
        if (!$term instanceof WP_Term) {
            return AdmissionRequirement::empty();
        }

        $parent = $term->parent ? get_term($term->parent) : null;

        return AdmissionRequirement::new(
            $this->bilingualLinkFromTerm($term),
            $parent instanceof WP_Term ? $this->admissionRequirement($parent) : null,
        );
    }
}
