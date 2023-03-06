import { Post } from '@wordpress/core-data';

import { ObjectValues, Paths } from './generic';

export interface DegreeProgramData {
    id: number;
    featured_image: Image;
    teaser_image: Image;
    title: MultilingualString;
    subtitle: MultilingualString;
    standard_duration: number;
    fee_required: boolean;
    start: Array<MultilingualString>;
    number_of_students: {
        id: string;
        description: string;
    };
    teaching_language: MultilingualString;
    attributes: Array<MultilingualString>;
    degree: Degree;
    faculty: Array<MultilingualLink>;
    location: Array<MultilingualString>;
    subject_groups: Array<MultilingualString>;
    videos: string[];
    meta_description: MultilingualString;
    content: {
        about: ContentItem;
        structure: ContentItem;
        specializations: ContentItem;
        qualities_and_skills: ContentItem;
        why_should_study: ContentItem;
        career_prospects: ContentItem;
        special_features: ContentItem;
        testimonials: ContentItem;
    };
    admission_requirements: {
        bachelor_or_teaching_degree: MultilingualLink;
        teaching_degree_higher_semester: MultilingualLink;
        master: MultilingualLink;
    };
    content_related_master_requirements: MultilingualString;
    application_deadline_winter_semester: string;
    application_deadline_summer_semester: string;
    details_and_notes: MultilingualString;
    language_skills: MultilingualString;
    language_skills_humanities_faculty: string;
    german_language_skills_for_international_students: MultilingualLink;
    readonly start_of_semester: MultilingualLink;
    readonly semester_dates: MultilingualLink;
    examinations_office: MultilingualLink;
    examination_regulations: MultilingualString;
    module_handbook: string;
    url: MultilingualString;
    readonly department: MultilingualLink;
    readonly student_advice: MultilingualLink;
    subject_specific_advice: MultilingualLink;
    readonly service_centers: MultilingualLink;
    student_representatives: string;
    readonly semester_fee: MultilingualLink;
    degree_program_fees: MultilingualString;
    readonly abroad_opportunities: MultilingualLink;
    keywords: Array<MultilingualString>;
    area_of_study: Array<MultilingualLink>;
    combinations: Array<number>;
    limited_combinations: Array<number>;
}

export const DEGREE_ABBREVIATION_ENGLISH = {
    BACHELOR: 'B.A.',
    MASTERS: 'M.A.',
    TEACHING_DEGREE: 'B.S.E.',
} as const;

export const DEGREE_ABBREVIATION_GERMAN = {
    BACHELOR: 'BA',
    MASTERS: 'MA',
    TEACHING_DEGREE: 'LA',
} as const;

export type DegreeAbbreviationEnglish = ObjectValues<typeof DEGREE_ABBREVIATION_ENGLISH> | '';
export type DegreeAbbreviationGerman = ObjectValues<typeof DEGREE_ABBREVIATION_GERMAN> | '';

export interface DegreeProgramAbbreviation extends MultilingualString {
    en: DegreeAbbreviationEnglish;
    de: DegreeAbbreviationGerman;
}

export interface Degree {
    id: string;
    name: MultilingualString;
    abbreviation: DegreeProgramAbbreviation;
}

export type Image = {
    id: number;
    url: string;
};

export type MultilingualString = {
    id: string;
    de: string;
    en: string;
};

export type MultilingualLink = {
    id: string;
    name: MultilingualString;
    link_text: MultilingualString;
    link_url: MultilingualString;
};

export type ContentItem = {
    readonly title: MultilingualString;
    description: MultilingualString;
};

export type DegreeProgramDataPaths = Paths<DegreeProgramData, 3>;

export interface DegreeProgramPost extends Post {
    degree_program: DegreeProgramData;
}
