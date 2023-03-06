import { store } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

import serverData from 'util/serverData';

import {
    CoreDataSelectors,
    DegreeMeta,
    DegreeProgramEditorServerDataType,
    EnglishNameMeta,
    MapSelect,
    MultilingualLinkMeta,
    WpTerm,
} from '../defs';

type TaxonomySlug = keyof DegreeProgramEditorServerDataType['taxonomySlugs'];
type Term<T> = T extends
    | 'areaOfStudy'
    | 'bachelorOrTeachingDegreeAdmissionRequirement'
    | 'examinationsOffice'
    | 'faculty'
    | 'germanLanguageSkillsForInternationalStudents'
    | 'masterDegreeAdmissionRequirement'
    | 'subjectSpecificAdvice'
    | 'teachingDegreeHigherSemesterAdmissionRequirement'
    ? WpTerm<MultilingualLinkMeta>
    : T extends
          | 'attribute'
          | 'keyword'
          | 'semester'
          | 'studyLocation'
          | 'subjectGroup'
          | 'teachingLanguage'
    ? WpTerm<EnglishNameMeta>
    : T extends 'degree'
    ? WpTerm<DegreeMeta>
    : T extends 'numberOfStudents'
    ? WpTerm
    : never;

/**
 * Hook that returns Degree Program terms for selected taxonomy.
 *
 * @param taxonomy Taxonomy name. One of DegreeProgramEditorServerDataType['taxonomySlugs'] keys.
 * @returns Terms array.
 *
 * @example
 * ```
 * function MultilingualSelect() {
 *     const areaOfStudyTermsList = useDegreeProgramTerms('areaOfStudy');
 *     areaOfStudyTermsList.forEach((term) => {
 *         options.push({
 *             value: term.id,
 *             label: term.meta.name_en + term.meta.link_text_en
 *         })
 *     })
 *
 *     return <SelectControl options={options} />;
 * }
 * ```
 */
export default function useDegreeProgramTerms<T extends TaxonomySlug>(taxonomy: T): Array<Term<T>> {
    return useSelect<MapSelect<CoreDataSelectors>>(
        (select) => {
            const { getEntityRecords } = select(store.name);
            return getEntityRecords('taxonomy', serverData().taxonomySlugs[taxonomy]) || [];
        },
        [taxonomy],
    );
}
