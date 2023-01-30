import { DegreeAbbreviationEnglish } from './degree-program-data';
import { DegreeProgramEditorServerDataType } from './server-data';

export interface WpTerm<Meta extends Record<string, string> = never> {
    id: number;
    description: string;
    name: string;
    slug: string;
    taxonomy: string;
    meta: [Meta] extends [never] ? object : Meta;
}

export type EnglishNameMeta = {
    name_en: string;
};

export type MultilingualLinkMeta = {
    name_en: string;
    link_text: string;
    link_text_en: string;
    link_url: string;
    link_url_en: string;
};

export type DegreeMeta = {
    name_en: string;
    abbreviation: string;
    abbreviation_en: DegreeAbbreviationEnglish;
};

export type TaxonomySlug = keyof DegreeProgramEditorServerDataType['taxonomySlugs'];
