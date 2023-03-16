import { SEMESTER_SUMMER, SEMESTER_WINTER } from 'hooks/constants';

import { DegreeProgramData } from 'defs';

export const mockSummerSemester: DegreeProgramData['start'] = [
    {
        id: 'term:10',
        de: SEMESTER_SUMMER,
        en: SEMESTER_SUMMER,
    },
];

export const mockWinterSemester: DegreeProgramData['start'] = [
    {
        id: 'term:10',
        de: SEMESTER_WINTER,
        en: SEMESTER_WINTER,
    },
];

export const mockAbcSemester: DegreeProgramData['start'] = [
    {
        id: 'term:10',
        de: 'abc',
        en: 'abc',
    },
];
