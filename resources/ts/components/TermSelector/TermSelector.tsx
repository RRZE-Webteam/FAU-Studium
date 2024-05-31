import React from 'react';

import { compose, createHigherOrderComponent } from '@wordpress/compose';

import EntitySelector from '../EntitySelector';
import { TermSelectorProps } from './defs';
import {
	withDegreeProgramTerms,
	withSearchedDegreeProgramTerms,
	withTermSelectorProps,
} from './hoc';

import { EntitySelectorProps, WpTerm } from '../../defs';

const withSingleTermSelectorProps = createHigherOrderComponent(
	( WrappedComponent: React.FC< Partial< EntitySelectorProps > > ) =>
		( { onChange, ...others }: TermSelectorProps ) => {
			return (
				<WrappedComponent
					onChange={ ( terms: Array< WpTerm > ) => {
						if ( terms.length === 0 ) {
							onChange( null );
							return;
						}

						onChange( terms[ 0 ] );
					} }
					maxLength={ 1 }
					{ ...others }
				/>
			);
		},
	'withSingleTermSelectorProps'
);

export default compose(
	withSingleTermSelectorProps,
	withTermSelectorProps,
	withDegreeProgramTerms,
	withSearchedDegreeProgramTerms
)( EntitySelector ) as React.FC< TermSelectorProps >;
