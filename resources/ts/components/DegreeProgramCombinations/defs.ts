import type { Immutable } from 'immer';

import { FormTokenFieldProps } from '@wordpress/components/build-types/form-token-field/types';

export type RelatedDegreeProgramsProps = Readonly< {
	label: string;
	messages: FormTokenFieldProps[ 'messages' ];
	relatedDegreeProgramIds: Immutable< Array< number > >;
	setRelatedDegreePrograms( value: Array< number > ): void;
	/**
	 * Could be used to restrict suggestions by tax query.
	 */
	additionalQuery?: Record< string, unknown >;
} >;
