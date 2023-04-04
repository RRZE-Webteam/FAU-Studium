import { DegreeProgramEditorServerDataType } from 'defs';

if (global.window) {
    const mockServerData: DegreeProgramEditorServerDataType = {
        postType: 'studiengang',
        propertyName: 'degree_program',
        languages: {
            de: 'Deutsch',
            en: 'English',
        },
        taxonomySlugs: {
            applyNowLink: 'apply_now_link',
            areaOfStudy: 'area_of_study',
            attribute: 'attribute',
            bachelorOrTeachingDegreeAdmissionRequirement: 'bachelor_or_teaching_adm_req',
            degree: 'abschluss',
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

    global.window.DegreeProgramEditorServerData = mockServerData;
    global.window.matchMedia = () => ({
        matches: false,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        media: '',
        dispatchEvent: () => false,
        onchange: () => {},
        removeEventListener: () => {},
    });
}
