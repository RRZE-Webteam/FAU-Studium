import { useFacultyTerms } from 'hooks/useTaxonomyTerm';

import {
    ADMISSION_REQUIREMENT_FREE,
    FACULTY_NATURAL_SCIENCES,
    FACULTY_PHILOSOPHY,
    SEMESTER_SUMMER,
} from './constants';
import useDegreeProgramProperty from './useDegreeProgramProperty';

import {
    AdmissionRequirement,
    Degree,
    DEGREE_ABBREVIATION_GERMAN,
    DegreeAbbreviationGerman,
    MultilingualLink,
    MultilingualString,
} from 'defs';

const ALLOWED_FACULTY_SLUGS_FOR_COMBINATION = [FACULTY_PHILOSOPHY, FACULTY_NATURAL_SCIENCES];

export function useDegreeFeesEnabled() {
    const [feeRequired] = useDegreeProgramProperty<boolean>('fee_required');

    return !!feeRequired;
}

export function useCombinationOfDegreeProgramEnabled() {
    const facultyTerms = useFacultyTerms();
    const [degree] = useDegreeProgramProperty<Degree>('degree');

    if (!facultyTerms.length || !degree) {
        return false;
    }

    const parentDegree = degree.parent?.abbreviation?.de ?? '';

    return (
        !!facultyTerms.find((facultyItem) =>
            ALLOWED_FACULTY_SLUGS_FOR_COMBINATION.includes(facultyItem.slug),
        ) &&
        (degree.abbreviation.de === DEGREE_ABBREVIATION_GERMAN.BACHELOR ||
            parentDegree === DEGREE_ABBREVIATION_GERMAN.BACHELOR)
    );
}

export function useAdmissionRequirementsForBachelorAndTeachingDegreesEnable() {
    const [degree] = useDegreeProgramProperty<Degree>('degree');

    if (!degree) {
        return false;
    }

    const acceptedDegrees: DegreeAbbreviationGerman[] = [
        DEGREE_ABBREVIATION_GERMAN.BACHELOR,
        DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE,
    ];
    const parentDegree = degree.parent?.abbreviation?.de ?? '';

    return (
        acceptedDegrees.includes(degree.abbreviation.de) || acceptedDegrees.includes(parentDegree)
    );
}

export function useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled() {
    const enabled = useAdmissionRequirementsForBachelorAndTeachingDegreesEnable();
    const [bachelorOrTeachingAdmissionRequirement] = useDegreeProgramProperty<AdmissionRequirement>(
        'admission_requirements.bachelor_or_teaching_degree',
    );

    if (!bachelorOrTeachingAdmissionRequirement) {
        return false;
    }

    return (
        enabled &&
        bachelorOrTeachingAdmissionRequirement.name.de !== ADMISSION_REQUIREMENT_FREE &&
        bachelorOrTeachingAdmissionRequirement?.parent?.name?.de !== ADMISSION_REQUIREMENT_FREE
    );
}

export function useAdmissionRequirementsForMastersDegree() {
    const [degree] = useDegreeProgramProperty<Degree>('degree');

    if (!degree) {
        return false;
    }

    return (
        degree.abbreviation.de === DEGREE_ABBREVIATION_GERMAN.MASTERS ||
        degree?.parent?.abbreviation?.de === DEGREE_ABBREVIATION_GERMAN.MASTERS
    );
}

export function useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled() {
    const [degree] = useDegreeProgramProperty<Degree>('degree');
    const facultyTerms = useFacultyTerms();

    if (!degree || !facultyTerms.length) {
        return false;
    }

    const acceptedDegrees: DegreeAbbreviationGerman[] = [
        DEGREE_ABBREVIATION_GERMAN.BACHELOR,
        DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE,
    ];
    const parentDegree = degree.parent?.abbreviation?.de ?? '';

    return (
        (acceptedDegrees.includes(degree.abbreviation.de) ||
            acceptedDegrees.includes(parentDegree)) &&
        !!facultyTerms.find((facultyItem) => facultyItem.slug === FACULTY_PHILOSOPHY)
    );
}

export function useApplicationDeadlineSummerSemesterEnabled() {
    const [semester] = useDegreeProgramProperty<MultilingualString[]>('start');

    if (!semester) {
        return false;
    }

    return !!semester.find((semesterItem) => semesterItem.de === SEMESTER_SUMMER);
}
