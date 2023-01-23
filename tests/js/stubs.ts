import { DegreeProgramEditorServerDataType } from 'defs';

const mockServerData: DegreeProgramEditorServerDataType = {
    postType: 'studiengang',
    propertyName: 'degree_program',
    languages: {
        de: 'Deutsch',
        en: 'English',
    },
    taxonomySlugs: {
        areaOfStudy: 'area_of_study',
        attribute: 'attribute',
        bachelorOrTeachingDegreeAdmissionRequirement: 'bachelor_or_teaching_adm_req',
        degree: 'abschluss',
        examinationRegulations: 'examination_regulation',
        examinationsOffice: 'examinations_office',
        faculty: 'faculty',
        germanLanguageSkillsForInternationalStudents: 'german_for_int_students',
        keyword: 'keyword',
        masterDegreeAdmissionRequirement: 'master_degree_adm_req',
        numberOfStudents: 'number_of_students',
        semester: 'semester',
        studyLocation: 'standort',
        subjectGroup: 'faechergruppe',
        subjectSpecificAdvice: 'subject_specific_advice',
        teachingDegreeHigherSemesterAdmissionRequirement: 'teaching_higher_semester_adm_req',
        teachingLanguage: 'sprache',
    },
};

(window as any).DegreeProgramEditorServerData = mockServerData;
