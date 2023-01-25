import {
    ADMISSION_REQUIREMENT_FREE,
    FACULTY_NATURAL_SCIENCES,
    FACULTY_PHILOSOPHY,
    SEMESTER_SUMMER,
} from './constants';
import useDegreeProgramProperty from './useDegreeProgramProperty';

import { Degree, DEGREE_ABBREVIATION_GERMAN, MultilingualLink } from 'defs';

const ALLOWED_FACULTIES_FOR_COMBINATION = [FACULTY_PHILOSOPHY, FACULTY_NATURAL_SCIENCES];

export function useDegreeFeesEnabled() {
    const [feeRequired] = useDegreeProgramProperty<boolean>('fee_required');

    return !!feeRequired;
}

export function useCombinationOfDegreeProgramEnabled() {
    const [faculty] = useDegreeProgramProperty<MultilingualLink>('faculty');
    const [degree] = useDegreeProgramProperty<Degree>('degree');

    if (!faculty || !degree) {
        return false;
    }

    return (
        ALLOWED_FACULTIES_FOR_COMBINATION.includes(faculty.name.de) &&
        degree.abbreviation.de === DEGREE_ABBREVIATION_GERMAN.BACHELOR
    );
}

export function useAdmissionRequirementsForBachelorAndTeachingDegreesEnable() {
    const [degree] = useDegreeProgramProperty<Degree>('degree');

    if (!degree) {
        return false;
    }

    return (
        degree.abbreviation.de === DEGREE_ABBREVIATION_GERMAN.BACHELOR ||
        degree.abbreviation.de === DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE
    );
}

export function useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled() {
    const [bachelorOrTeachingAdmissionRequirement] = useDegreeProgramProperty<MultilingualLink>(
        'admission_requirements.bachelor_or_teaching_degree',
    );

    if (!bachelorOrTeachingAdmissionRequirement) {
        return false;
    }

    return bachelorOrTeachingAdmissionRequirement.name.de !== ADMISSION_REQUIREMENT_FREE;
}

export function useAdmissionRequirementsForMastersDegree() {
    const [degree] = useDegreeProgramProperty<Degree>('degree');

    if (!degree) {
        return false;
    }

    return degree.abbreviation.de === DEGREE_ABBREVIATION_GERMAN.MASTERS;
}

export function useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled() {
    const [degree] = useDegreeProgramProperty<Degree>('degree');
    const [faculty] = useDegreeProgramProperty<MultilingualLink>('faculty');

    if (!degree || !faculty) {
        return false;
    }

    return (
        (degree.abbreviation.de === DEGREE_ABBREVIATION_GERMAN.BACHELOR ||
            degree.abbreviation.de === DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE) &&
        faculty.name.de === FACULTY_PHILOSOPHY
    );
}

export function useApplicationDeadlineSummerSemesterEnabled() {
    const [semester] = useDegreeProgramProperty<Degree>('semester_dates');

    if (!semester) {
        return false;
    }

    return semester.name.de === SEMESTER_SUMMER;
}
