import { LanguageCode } from './common';

export type DegreeProgramEditorServerDataType = Readonly<{
    postType: string;
    propertyName: string;
    languages: Record<LanguageCode, string>;
    taxonomySlugs: {
        areaOfStudy: string;
        attribute: string;
        bachelorOrTeachingDegreeAdmissionRequirement: string;
        degree: string;
        examinationsOffice: string;
        faculty: string;
        germanLanguageSkillsForInternationalStudents: string;
        keyword: string;
        masterDegreeAdmissionRequirement: string;
        numberOfStudents: string;
        semester: string;
        studyLocation: string;
        subjectGroup: string;
        subjectSpecificAdvice: string;
        teachingDegreeHigherSemesterAdmissionRequirement: string;
        teachingLanguage: string;
    };
}>;
