import React from 'react';

import { BaseControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { decodeEntities } from '@wordpress/html-entities';

import { SelectorProps } from '../defs';

import { EntitySelectorProps, WpTerm } from '../../../defs';

const withTermSelectorProps = createHigherOrderComponent(
	( WrappedComponent: React.FC< Partial< EntitySelectorProps > > ) =>
		( { id, help, ...others }: SelectorProps ) => {
			return (
				<BaseControl id={ id } help={ help ?? '' }>
					<WrappedComponent
						entityToToken={ ( term: WpTerm ) => {
							if ( term.parent ) {
								return `--- ${ decodeEntities( term.name ) }`;
							}

							return decodeEntities( term.name );
						} }
						maxSuggestions={ 100 }
						{ ...others }
					/>
				</BaseControl>
			);
		},
	'withSelectorProps'
);

export default withTermSelectorProps;
