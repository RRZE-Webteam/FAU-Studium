import { SEMESTER_SUMMER } from 'hooks/constants';

import { DegreeProgramData } from 'defs';

export const mockSummerSemester: DegreeProgramData['semester_dates'] = {
    id: 'term:10',
    link_url: {
        id: 'term_meta:10:link_url',
        de: 'https://fau.localhost',
        en: 'https://fau.localhost/en',
    },
    link_text: {
        id: 'term_meta:10:link_text',
        de: SEMESTER_SUMMER,
        en: SEMESTER_SUMMER,
    },
    name: {
        id: 'term:10:name',
        de: SEMESTER_SUMMER,
        en: SEMESTER_SUMMER,
    },
};

export const mockAbcSemester: DegreeProgramData['semester_dates'] = {
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
};
