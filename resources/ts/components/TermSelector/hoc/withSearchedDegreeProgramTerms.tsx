import React, { useState } from 'react';

import { createHigherOrderComponent } from '@wordpress/compose';
import { store as coreStore } from '@wordpress/core-data';
import { withSelect } from '@wordpress/data';

import serverData from '../../../util/serverData';

import { EntitySelectorProps, WpTerm } from '../../../defs';
import { SelectorProps } from '../defs';

const withSearchedTermsSelect = withSelect(
	(
		select,
		ownProps: { taxonomy: string; maxSuggestions: number; search: string }
	): Partial< EntitySelectorProps< WpTerm > > => {
		const { getEntityRecords } = select( coreStore.name );

		const terms = getEntityRecords(
			'taxonomy',
			serverData().taxonomySlugs[ ownProps.taxonomy ],
			{
				per_page: ownProps.maxSuggestions,
				orderby: 'name',
				order: 'asc',
				context: 'view',
				search: ownProps.search,
			}
		);

		return {
			searchedEntities: terms ?? [],
		};
	}
);

const withSearchedDegreeProgramTerms = createHigherOrderComponent(
	( WrappedComponent: React.FC< Partial< EntitySelectorProps > > ) =>
		( props: SelectorProps ) => {
			const [ search, setSearch ] = useState( '' );
			const EnhancedComponent: React.FC<
				Partial< EntitySelectorProps >
			> = withSearchedTermsSelect( WrappedComponent );

			return (
				<EnhancedComponent
					{ ...props }
					search={ search }
					setSearch={ setSearch }
				/>
			);
		},
	'withSearchedDegreeProgramTerms'
);

export default withSearchedDegreeProgramTerms;
