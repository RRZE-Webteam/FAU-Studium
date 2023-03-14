import { useEntityRecord, useEntityRecords } from '@wordpress/core-data';

import { entityId } from 'util/idHelpers';
import serverData from 'util/serverData';

import useDegreeProgramProperty from './useDegreeProgramProperty';

import { MultilingualLink, TaxonomySlug, WpTerm } from 'defs';

export default function useTaxonomyTerm(id: string, taxonomy: TaxonomySlug): WpTerm | null {
    const termId = entityId(id);
    const { record, isResolving } = useEntityRecord('taxonomy', taxonomy, termId);

    if (isResolving) {
        return null;
    }

    return record as WpTerm;
}

export function useTaxonomyTerms(ids: string[], taxonomy: TaxonomySlug): WpTerm[] {
    const termIds = ids.map((id) => entityId(id));
    const { records, isResolving } = useEntityRecords('taxonomy', taxonomy, {
        include: termIds,
        per_page: -1,
    });

    if (!termIds.length || !records || isResolving) {
        return [];
    }

    return records as WpTerm[];
}

export function useFacultyTerms(): WpTerm[] {
    const [faculty] = useDegreeProgramProperty<MultilingualLink[]>('faculty');
    const facultyTerms = useTaxonomyTerms(
        faculty?.map((facultyItem) => facultyItem.id) ?? [],
        serverData().taxonomySlugs.faculty as TaxonomySlug,
    );

    return facultyTerms;
}
