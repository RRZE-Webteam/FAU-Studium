import { Degree, DEGREE_ABBREVIATION_ENGLISH, DEGREE_ABBREVIATION_GERMAN } from 'defs';

// FIXME: Replace german texts and abbreviations with correct ones if needed

export const mockBachelorDegree: Degree = {
    abbreviation: {
        de: DEGREE_ABBREVIATION_GERMAN.BACHELOR,
        en: DEGREE_ABBREVIATION_ENGLISH.BACHELOR,
        id: 'term_meta:4:abbreviation',
    },
    id: 'term:4',
    name: {
        id: 'term:4:name',
        en: 'Bachelor',
        de: 'Bachelor',
    },
};

export const mockTeachingDegree: Degree = {
    abbreviation: {
        id: 'term_meta:4:abbreviation',
        de: DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE,
        en: DEGREE_ABBREVIATION_ENGLISH.TEACHING_DEGREE,
    },
    id: 'term:4',
    name: {
        id: 'term:4:name',
        de: 'Lehramt',
        en: 'Teaching Degree',
    },
};

export const mockMastersDegree: Degree = {
    abbreviation: {
        id: 'term_meta:4:abbreviation',
        de: DEGREE_ABBREVIATION_GERMAN.MASTERS,
        en: DEGREE_ABBREVIATION_ENGLISH.MASTERS,
    },
    id: 'term:4',
    name: {
        id: 'term:4:name',
        de: 'Master',
        en: 'Masters',
    },
};
