import { TabNames } from '../../defs/common';
import { DegreeProgramDataPaths } from '../../defs/degree-program-data';

export const FIELDS_BY_TABS: Record<
	TabNames,
	Array< DegreeProgramDataPaths >
> = {
	general: [
		'title',
		'subtitle',
		'featured_image',
		'teaser_image',
		'entry_text',
		'area_of_study',
		'start',
		'number_of_students',
		'teaching_language',
		'attributes',
		'degree',
		'faculty',
		'location',
		'subject_groups',
		'keywords',
		'videos',
		'standard_duration',
	],
	content: [ 'content' ],
	'admission-requirements': [
		'admission_requirements',
		'content_related_master_requirements',
		'application_deadline_winter_semester',
		'application_deadline_summer_semester',
		'details_and_notes',
		'language_skills',
		'language_skills_humanities_faculty',
		'german_language_skills_for_international_students',
	],
	'organizational-links': [
		'apply_now_link',
		'examinations_office',
		'module_handbook',
		'url',
		'department',
		'subject_specific_advice',
		'info_brochure',
		'examination_regulations',
		'fee_required',
		'degree_program_fees',
	],
};

export default {};
