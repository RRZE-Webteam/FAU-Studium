import { useFacultyTerms } from 'hooks/useTaxonomyTerm';

import {
    ADDITIONAL_DEGREE_NAME,
    ADMISSION_REQUIREMENT_FREE,
    FACULTY_NATURAL_SCIENCES,
    FACULTY_PHILOSOPHY,
    SEMESTER_SUMMER,
    SEMESTER_WINTER,
} from './constants';
import useDegreeProgramProperty from './useDegreeProgramProperty';

import { AdmissionRequirement, Degree, DEGREE_ABBREVIATION_GERMAN, MultilingualString } from 'defs';

const ALLOWED_FACULTY_SLUGS_FOR_COMBINATION = [FACULTY_PHILOSOPHY, FACULTY_NATURAL_SCIENCES];

function isBachelorContext(degree: Degree): boolean {
    const parentDegree = degree.parent?.abbreviation?.de ?? '';

    return (
        degree.abbreviation.de === DEGREE_ABBREVIATION_GERMAN.BACHELOR ||
        parentDegree === DEGREE_ABBREVIATION_GERMAN.BACHELOR ||
        degree.name.de === ADDITIONAL_DEGREE_NAME
    );
}

function isTeachingDegreeContext(degree: Degree): boolean {
    const parentDegree = degree.parent?.abbreviation?.de ?? '';

    return (
        degree.abbreviation.de === DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE ||
        parentDegree === DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE
    );
}

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

    return (
        !!facultyTerms.find((facultyItem) =>
            ALLOWED_FACULTY_SLUGS_FOR_COMBINATION.includes(facultyItem.slug),
        ) && isBachelorContext(degree)
    );
}

export function useAdmissionRequirementsForBachelorAndTeachingDegreesEnable() {
    const [degree] = useDegreeProgramProperty<Degree>('degree');

    if (!degree) {
        return false;
    }

    return isBachelorContext(degree) || isTeachingDegreeContext(degree);
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

    return (
        (isBachelorContext(degree) || isTeachingDegreeContext(degree)) &&
        !!facultyTerms.find((facultyItem) => facultyItem.slug === FACULTY_PHILOSOPHY)
    );
}

function useSemestersContain(name: string): boolean {
    const [semesters] = useDegreeProgramProperty<MultilingualString[]>('start');

    if (!semesters) {
        return false;
    }

    return !!semesters.find((semester) => semester.de === name);
}

export function useApplicationDeadlineSummerSemesterEnabled() {
    return useSemestersContain(SEMESTER_SUMMER);
}

export function useApplicationDeadlineWinterSemesterEnabled() {
    return useSemestersContain(SEMESTER_WINTER);
}
