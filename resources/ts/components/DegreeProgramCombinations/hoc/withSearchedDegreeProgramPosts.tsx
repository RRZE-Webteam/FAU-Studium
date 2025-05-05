import React, { useState } from 'react';

import { createHigherOrderComponent } from '@wordpress/compose';
import type { Post } from '@wordpress/core-data';
import { store as coreStore } from '@wordpress/core-data';
import { withSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

import serverData from '../../../util/serverData';

import { EntitySelectorProps } from '../../../defs';
import { SelectorProps } from '../../TermSelector/defs';

const withSearchedPostsSelect = withSelect(
	(
		select,
		ownProps: EntitySelectorProps< Post< 'view' > >
	): Partial< EntitySelectorProps< Post< 'view' > > > => {
		const { getCurrentPost } = select( editorStore.name );
		const { getEntityRecords } = select( coreStore.name );

		const currentPost = getCurrentPost();

		const posts = getEntityRecords( 'postType', serverData().postType, {
			...{
				per_page: ownProps.maxSuggestions,
				orderby: 'title',
				order: 'asc',
				_fields: 'id,degree_program',
				context: 'view',
				search: ownProps.search,
			},
			...( currentPost ? { exclude: currentPost.id } : {} ),
		} );

		return {
			searchedEntities: posts ?? [],
		};
	}
);

const withSearchedDegreeProgramPosts = createHigherOrderComponent(
	( WrappedComponent: React.FC< Partial< EntitySelectorProps > > ) =>
		( props: SelectorProps ) => {
			const [ search, setSearch ] = useState( '' );
			const EnhancedComponent: React.FC<
				Partial< EntitySelectorProps >
			> = withSearchedPostsSelect( WrappedComponent );

			return (
				<EnhancedComponent
					{ ...props }
					search={ search }
					setSearch={ setSearch }
				/>
			);
		},
	'withSearchedDegreeProgramPosts'
);

export default withSearchedDegreeProgramPosts;
