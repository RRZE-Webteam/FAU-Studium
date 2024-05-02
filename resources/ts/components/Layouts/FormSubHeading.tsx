/* eslint-disable  @wordpress/no-unsafe-wp-apis */
import React, { PropsWithChildren } from 'react';

import { __experimentalHeading as Heading } from '@wordpress/components';

import { StyledFormFieldWrapper } from './style-definitions';

const FormSubHeading: React.FC< PropsWithChildren< unknown > > = ( {
	children,
} ) => {
	return (
		<StyledFormFieldWrapper isBlock={ undefined } fill="full">
			<Heading level={ 4 }>{ children }</Heading>
		</StyledFormFieldWrapper>
	);
};

export default FormSubHeading;
