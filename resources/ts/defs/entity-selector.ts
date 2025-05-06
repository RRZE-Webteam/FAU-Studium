import { ReactNode } from 'react';

import { FormTokenFieldProps } from '@wordpress/components/build-types/form-token-field/types';

export type EntitySelectorProps< Entity = object > = Readonly< {
	label?: ReactNode;
	messages: FormTokenFieldProps[ 'messages' ];
	maxLength?: number;
	maxSuggestions: number;
	entities: Array< Entity >;
	childOnly?: boolean;
	onChange( value: Array< Entity > ): void;
	entityToToken( entity: Entity ): string;
	searchedEntities: Array< Entity >;
	setSearch( value: string ): void;
} >;
