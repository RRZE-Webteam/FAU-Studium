import { Degree, DEGREE_ABBREVIATION_GERMAN } from 'defs';

export const mockBachelorDegree: Degree = {
    abbreviation: {
        de: DEGREE_ABBREVIATION_GERMAN.BACHELOR,
        en: 'BA',
        id: 'term_meta:4:abbreviation',
    },
    id: 'term:4',
    name: {
        id: 'term:4:name',
        en: 'Bachelor',
        de: 'Bachelor',
    },
    parent: null,
};

export const mockTeachingDegree: Degree = {
    abbreviation: {
        id: 'term_meta:4:abbreviation',
        de: DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE,
        en: 'LA',
    },
    id: 'term:4',
    name: {
        id: 'term:4:name',
        de: 'Lehramt',
        en: 'Teaching Degree',
    },
    parent: null,
};

export const mockMastersDegree: Degree = {
    abbreviation: {
        id: 'term_meta:4:abbreviation',
        de: DEGREE_ABBREVIATION_GERMAN.MASTERS,
        en: 'MA',
    },
    id: 'term:4',
    name: {
        id: 'term:4:name',
        de: 'Master',
        en: 'Masters',
    },
    parent: null,
};
