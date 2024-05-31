import { DegreeProgramData } from '../../../resources/ts/defs';

export const mockNatFaculty: DegreeProgramData['faculty'] = [
    {
        id: 'term:10',
        link_url: {
            id: 'term_meta:10:link_url',
            de: 'https://fau.localhost',
            en: 'https://fau.localhost/en',
        },
        link_text: {
            id: 'term_meta:10:link_text',
            de: 'Nat',
            en: 'Nat',
        },
        name: {
            id: 'term:10:name',
            de: 'Nat',
            en: 'Nat',
        },
    },
];

export const mockPhilFaculty: DegreeProgramData['faculty'] = [
    {
        id: 'term:10',
        link_url: {
            id: 'term_meta:10:link_url',
            de: 'https://fau.localhost',
            en: 'https://fau.localhost/en',
        },
        link_text: {
            id: 'term_meta:10:link_text',
            de: 'Phil',
            en: 'Phil',
        },
        name: {
            id: 'term:10:name',
            de: 'Phil',
            en: 'Phil',
        },
    },
];

export const mockAbcFaculty: DegreeProgramData['faculty'] = [
    {
        id: 'term:10',
        link_url: {
            id: 'term_meta:10:link_url',
            de: 'https://fau.localhost',
            en: 'https://fau.localhost/en',
        },
        link_text: {
            id: 'term_meta:10:link_text',
            de: 'Abc',
            en: 'Abc',
        },
        name: {
            id: 'term:10:name',
            de: 'Abc',
            en: 'Abc',
        },
    },
];

export const mockEmptyFaculty: DegreeProgramData['faculty'] = [
    {
        id: '',
        link_url: {
            id: '',
            de: '',
            en: '',
        },
        link_text: {
            id: '',
            de: '',
            en: '',
        },
        name: {
            id: '',
            de: '',
            en: '',
        },
    },
];
