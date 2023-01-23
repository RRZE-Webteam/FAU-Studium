import { useState } from 'react';
import { EntitySelectorProps, WpTerm } from 'defs';
import serverData from 'util/serverData';

import { store as coreStore } from '@wordpress/core-data';
import { withSelect } from '@wordpress/data';

const withSearchedDegreeProgramTerms = withSelect(
    (
        select,
        ownProps: { taxonomy: string; maxSuggestions: number },
    ): Partial<EntitySelectorProps<WpTerm>> => {
        const [search, setSearch] = useState('');
        const { getEntityRecords } = select(coreStore.name);
        if (search.length === 0) {
            return {
                searchedEntities: [],
                setSearch,
            };
        }

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
