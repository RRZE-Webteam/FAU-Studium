import React, { useState } from 'react';

import { createHigherOrderComponent } from '@wordpress/compose';
import type { Post } from '@wordpress/core-data';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

import serverData from '../../../util/serverData';

import { EntitySelectorProps } from '../../../defs';
import { SelectorProps } from '../../TermSelector/defs';

const useSearchedDegreeProgramPosts = (
	maxSuggestions: number
): Partial< EntitySelectorProps< Post< 'view' > > > => {
	const [ search, setSearch ] = useState( '' );

	const searchedEntities: Array< Post< 'view' > > = useSelect(
		( select: any ): Array< Post< 'view' > > => {
			const { getCurrentPost } = select( editorStore.name );
			const { getEntityRecords } = select( coreStore.name );

			const currentPost = getCurrentPost();

			return (
				( getEntityRecords( 'postType', serverData().postType, {
					...{
						per_page: maxSuggestions,
						orderby: 'title',
						order: 'asc',
						_fields: 'id,degree_program',
						context: 'view',
						search,
					},
					...( currentPost ? { exclude: currentPost.id } : {} ),
				} ) as Post< 'view' >[] ) || []
			);
		},
		[ maxSuggestions, search ]
	);

	return {
		searchedEntities,
		setSearch,
	};
};

const withSearchedDegreeProgramPosts = createHigherOrderComponent(
	( WrappedComponent: React.FC< Partial< EntitySelectorProps > > ) =>
		( props: SelectorProps & { maxSuggestions: number } ) => {
			const { maxSuggestions } = props;

			const { searchedEntities, setSearch } =
				useSearchedDegreeProgramPosts( maxSuggestions );

			return (
				<WrappedComponent
					{ ...props }
					searchedEntities={ searchedEntities }
					setSearch={ setSearch }
				/>
			);
		},
	'withSearchedDegreeProgramPosts'
);

export default withSearchedDegreeProgramPosts;
