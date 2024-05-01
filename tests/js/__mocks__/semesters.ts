import { SEMESTER_SUMMER, SEMESTER_WINTER } from '../../../resources/ts/hooks/constants';

import { DegreeProgramData } from '../../../resources/ts/defs';

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
