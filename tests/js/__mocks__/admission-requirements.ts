import { DegreeProgramData } from 'defs';

export const mockFreiAdmissionRequirement: DegreeProgramData['admission_requirements']['bachelor_or_teaching_degree'] =
    {
        id: 'term:10',
        link_url: {
            id: 'term_meta:10:link_url',
            de: 'https://fau.localhost',
            en: 'https://fau.localhost/en',
        },
        link_text: {
            id: 'term_meta:10:link_text',
            de: 'frei',
            en: 'frei',
        },
        name: {
            id: 'term:10:name',
            de: 'frei',
            en: 'frei',
        },
        parent: null,
    };

export const mockAbcAdmissionRequirement: DegreeProgramData['admission_requirements']['bachelor_or_teaching_degree'] =
    {
        id: 'term:10',
        link_url: {
            id: 'term_meta:10:link_url',
            de: 'https://fau.localhost',
            en: 'https://fau.localhost/en',
        },
        link_text: {
            id: 'term_meta:10:link_text',
            de: 'abc',
            en: 'abc',
        },
        name: {
            id: 'term:10:name',
            de: 'abc',
            en: 'abc',
        },
        parent: null,
    };
