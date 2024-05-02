import { __ } from '@wordpress/i18n';

import {
	transformedErrorMessages,
	transformedErrorMessagesBasedOnErrorCode,
} from './transformedErrorMessages';

import { DegreeProgramDataPaths, FormValidationError } from '../defs';

export function transformBasedOnErrorCode(
	fieldId: DegreeProgramDataPaths,
	error: FormValidationError
): string {
	let { errorCode } = error;

	if ( fieldId.match( /\.en$/i ) ) {
		errorCode += '_en';
	}

	if ( errorCode === 'rest_too_many_items' ) {
		// videos must contain at most 3 items. -> Field must contain at most 3 items.
		return error.message.replace(
			fieldId,
			__( 'Field', 'fau-degree-program' )
		);
	}

	return (
		transformedErrorMessagesBasedOnErrorCode[ errorCode ] ?? error.message
	);
}

export function transformErrorMessage(
	fieldId: DegreeProgramDataPaths,
	error: FormValidationError
): string {
	return (
		transformedErrorMessages[ fieldId ] ??
		transformBasedOnErrorCode( fieldId, error )
	);
}
