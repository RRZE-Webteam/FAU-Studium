import type { Post } from '@wordpress/core-data';
import { store as coreStore } from '@wordpress/core-data';
import { withSelect } from '@wordpress/data';

import serverData from '../../../util/serverData';

import { RelatedDegreeProgramsProps } from '../defs';

const withDegreeProgramPosts = withSelect(
	(
		select,
		ownProps: RelatedDegreeProgramsProps
	): { entities: Array< Post< 'view' > > } => {
		if ( ownProps.relatedDegreeProgramIds.length === 0 ) {
			return {
				entities: [],
			};
		}

		const { getEntityRecords } = select( coreStore.name );
		const query = {
			...{
				per_page: -1,
				orderby: 'include',
				_fields: 'id,degree_program',
				context: 'view',
			},
			include: ownProps.relatedDegreeProgramIds.join( ',' ),
		};

		return {
			entities:
				getEntityRecords( 'postType', serverData().postType, query ) ??
				[],
		};
	}
);

export default withDegreeProgramPosts;
