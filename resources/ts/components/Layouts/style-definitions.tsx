import styled from 'styled-components';

import { Flex, FlexItem } from '@wordpress/components';

import { FormFieldWrapperProps } from './defs';

const GAP_COLUMN = '15px';
const GAP_ROW = '15px';

export const StyledFormFieldWrapper = styled( FlexItem )< {
	fill: FormFieldWrapperProps[ 'fill' ];
} >`
	padding-left: ${ GAP_COLUMN };
	padding-right: ${ GAP_COLUMN };
	margin-bottom: ${ GAP_ROW };

	${ ( { fill } ) =>
		fill === 'full' &&
		`
        width: 100%;
        flex: 0 0 100%;
    ` }

	${ ( { fill } ) =>
		fill === 'half' &&
		`
        width: 50%;
        flex: 0 0 50%;
    ` }

    ${ ( { fill } ) =>
		fill === 'third' &&
		`
        width: 33.333333333%;
        flex: 0 0 33.333333333%;
    ` }
`;

export const StyledFormWrapper = styled( Flex )`
	margin: 0 -${ GAP_COLUMN };
`;
