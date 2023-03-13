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
} from 'defs';

const ALLOWED_FACULTIES_FOR_COMBINATION = [FACULTY_PHILOSOPHY, FACULTY_NATURAL_SCIENCES];

export function useDegreeFeesEnabled() {
    const [feeRequired] = useDegreeProgramProperty<boolean>('fee_required');

    return !!feeRequired;
}

export function useCombinationOfDegreeProgramEnabled() {
    const [faculty] = useDegreeProgramProperty<MultilingualLink[]>('faculty');
    const [degree] = useDegreeProgramProperty<Degree>('degree');

    if (!faculty || !degree) {
        return false;
    }

    const parentDegree = degree.parent?.abbreviation?.de ?? '';

    return (
        !!faculty.find((facultyItem) =>
            ALLOWED_FACULTIES_FOR_COMBINATION.includes(facultyItem.name.de),
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
    const [faculty] = useDegreeProgramProperty<MultilingualLink[]>('faculty');

    if (!degree || !faculty) {
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
        !!faculty.find((facultyItem) => facultyItem.name.de === FACULTY_PHILOSOPHY)
    );
}

export function useApplicationDeadlineSummerSemesterEnabled() {
    const [semester] = useDegreeProgramProperty<MultilingualLink>('semester_dates');

    if (!semester) {
        return false;
    }

    return semester.name.de === SEMESTER_SUMMER;
}
