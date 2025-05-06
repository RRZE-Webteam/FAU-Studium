import React, { useState } from 'react';

import { createHigherOrderComponent } from '@wordpress/compose';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

import serverData from '../../../util/serverData';

import { EntitySelectorProps, WpTerm } from '../../../defs';
import { SelectorProps } from '../defs';

const useSearchedDegreeProgramTerms = (
	taxonomy: string,
	maxSuggestions: number
): Partial< EntitySelectorProps< WpTerm > > => {
	const [ search, setSearch ] = useState( '' );

	const searchedEntities: Array< WpTerm > = useSelect(
		( select ): Array< WpTerm > => {
			const { getEntityRecords } = select( coreStore );

			return (
				( getEntityRecords(
					'taxonomy',
					serverData().taxonomySlugs[ taxonomy ],
					{
						per_page: maxSuggestions,
						orderby: 'name',
						order: 'asc',
						context: 'view',
						search,
					}
				) as WpTerm[] ) || []
			);
		},
		[ taxonomy, maxSuggestions, search ]
	);

	return {
		searchedEntities,
		setSearch,
	};
};

const withSearchedDegreeProgramTerms = createHigherOrderComponent(
	( WrappedComponent: React.FC< Partial< EntitySelectorProps > > ) =>
		( props: SelectorProps & { maxSuggestions: number } ) => {
			const { taxonomy, maxSuggestions } = props;

			const { searchedEntities, setSearch } =
				useSearchedDegreeProgramTerms( taxonomy, maxSuggestions );

			return (
				<WrappedComponent
					{ ...props }
					searchedEntities={ searchedEntities }
					setSearch={ setSearch }
				/>
			);
		},
	'withSearchedDegreeProgramTerms'
);

export default withSearchedDegreeProgramTerms;
