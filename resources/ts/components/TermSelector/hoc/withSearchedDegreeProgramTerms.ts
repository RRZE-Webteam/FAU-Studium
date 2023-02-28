import { useState } from 'react';

import { store as coreStore } from '@wordpress/core-data';
import { withSelect } from '@wordpress/data';

import serverData from 'util/serverData';

import { EntitySelectorProps, WpTerm } from 'defs';

const withSearchedDegreeProgramTerms = withSelect(
    (
        select,
        ownProps: { taxonomy: string; maxSuggestions: number },
    ): Partial<EntitySelectorProps<WpTerm>> => {
        const [search, setSearch] = useState('');
        const { getEntityRecords } = select(coreStore.name);

        const terms = getEntityRecords('taxonomy', serverData().taxonomySlugs[ownProps.taxonomy], {
            ...{
                per_page: ownProps.maxSuggestions,
                orderby: 'name',
                order: 'asc',
                context: 'view',
            },
            search,
        });

        return {
            searchedEntities: terms ?? [],
            setSearch,
        };
    },
);

export default withSearchedDegreeProgramTerms;
