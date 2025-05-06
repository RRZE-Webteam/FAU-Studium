/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import produce from 'immer';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import {
	Button,
	Flex,
	Icon,
	TextControl,
	VisuallyHidden,
} from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import { useFieldContext } from '../FormField/FormField';

interface FieldItem {
	id: string;
	value: string;
}

interface Props {
	value: string[];
	emptyMessage?: string;
	onChange( val: string[] ): void;
	type?: 'text' | 'url';
	maxItems?: number;
}

const transformRawValue = ( value: string[] ): FieldItem[] => {
	return value.map( ( str ) => ( {
		value: str,
		id: nanoid(),
	} ) );
};

const StyledFieldRow = styled( Flex )`
	align-items: stretch;
	margin-bottom: 5px;

	> .components-base-control {
		flex: 1;

		.components-base-control__field,
		.components-text-control__input {
			margin-bottom: 0;
			height: 100%;
		}
	}
`;

const StyledNoItemsMessage = styled.p`
	background-color: #eee;
	padding: 10px;
	border-radius: 2px;
`;

const TextControlCollection = ( {
	emptyMessage = undefined,
	value,
	onChange,
	type = 'text',
	maxItems,
}: Props ) => {
	const initialValue = value.length ? value : [ '' ];
	const [ fields, setFields ] = useState< FieldItem[] >(
		transformRawValue( initialValue )
	);

	useEffect( () => {
		// Filter-out empty values
		onChange(
			fields.filter( ( f ) => !! f.value ).map( ( f ) => f.value )
		);
	}, [ fields ] );

	const { required } = useFieldContext();

	return (
		<div>
			{ fields.map( ( field, index ) => (
				<StyledFieldRow key={ field.id }>
					<TextControl
						value={ field.value }
						onChange={ ( text: string ) => {
							setFields(
								produce( fields, ( draft ) => {
									draft[ index ].value = text;
								} )
							);
						} }
						type={ type }
						aria-required={ required }
					/>

					<Button
						isDestructive
						onClick={ () => {
							setFields( [
								...fields.filter( ( f ) => f.id !== field.id ),
							] );
						} }
					>
						<Icon icon="no" />
						<VisuallyHidden>
							{ _x(
								'Remove',
								'backoffice: TextControlCollection',
								'fau-degree-program'
							) }
						</VisuallyHidden>
					</Button>
				</StyledFieldRow>
			) ) }

			{ fields.length === 0 && (
				<StyledNoItemsMessage>
					{ emptyMessage ??
						_x(
							'No items added yet',
							'backoffice: text control collection',
							'fau-degree-program'
						) }
				</StyledNoItemsMessage>
			) }

			{ ( ! maxItems || fields.length < maxItems ) && (
				<Button
					onClick={ () => {
						setFields(
							produce( fields, ( draft ) => {
								draft.push( {
									id: nanoid(),
									value: '',
								} );
							} )
						);
					} }
					variant="primary"
				>
					{ _x(
						'Add',
						'backoffice: TextControlCollection',
						'fau-degree-program'
					) }
				</Button>
			) }
		</div>
	);
};
export default TextControlCollection;
