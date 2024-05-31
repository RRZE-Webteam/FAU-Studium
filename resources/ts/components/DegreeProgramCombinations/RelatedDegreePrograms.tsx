import React from 'react';
import type { Immutable } from 'immer';

import { compose, createHigherOrderComponent } from '@wordpress/compose';
import type { Post } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';

import { DegreeProgramPost } from '../../defs/degree-program-data';
import { EntitySelectorProps } from '../../defs/entity-selector';
import EntitySelector from '../EntitySelector';
import { withDegreeProgramPosts, withSearchedDegreeProgramPosts } from './hoc';

export type RelatedDegreeProgramsProps = Pick<
	EntitySelectorProps,
	'label' | 'messages'
> & {
	relatedDegreeProgramIds: Immutable< Array< number > >;
	setRelatedDegreePrograms( value: Array< number > ): void;
};

const withRelatedDegreeProgramProps = createHigherOrderComponent(
	( WrappedComponent: React.FC< Partial< EntitySelectorProps > > ) =>
		( {
			setRelatedDegreePrograms,
			...others
		}: RelatedDegreeProgramsProps ) => {
			return (
				<WrappedComponent
					entityToToken={ ( post: DegreeProgramPost ) =>
						`${ decodeEntities( post.degree_program.title.de ) } (${
							post.degree_program.degree.abbreviation.de
						})`
					}
					onChange={ ( posts: Array< Post > ) => {
						setRelatedDegreePrograms(
							posts.map( ( post ) => post.id )
						);
					} }
					maxSuggestions={ 300 }
					{ ...others }
				/>
			);
		},
	'withRelatedDegreeProgramProps'
);

export default compose(
	withRelatedDegreeProgramProps,
	withDegreeProgramPosts,
	withSearchedDegreeProgramPosts
)( EntitySelector ) as React.FC< RelatedDegreeProgramsProps >;
