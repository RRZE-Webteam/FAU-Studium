import { useMemo } from 'react';
import { TaxonomySlug } from 'defs/term';
import useDegreeProgramTerms from 'hooks/useDegreeProgramTerms';

import {} from '@wordpress/components/src/combobox-control';

export interface SelectOption {
    label: string;
    value: string;
}

export function useTermsListAsSelectOptions(taxonomy: TaxonomySlug): SelectOption[] {
    const terms = useDegreeProgramTerms(taxonomy);

    const options = useMemo(
        () =>
            terms.map((term) => ({
                label: term.name,
                value: term.id.toString(),
            })),
        [terms],
    );

    return options;
}

export default {};
