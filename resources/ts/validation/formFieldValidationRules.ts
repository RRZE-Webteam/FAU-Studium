import { ValidationRule } from './defs';

export const alphaNumeric = ( value: string ): boolean => {
	if ( value.length === 0 ) {
		return true;
	}

	return /^[a-zA-Z0-9]+$/.test( value );
};

export const lowerCaseOnly = ( value: string ): boolean => {
	if ( value.length === 0 ) {
		return true;
	}

	return value === value.toLowerCase();
};

export const upperCaseOnly = ( value: string ): boolean => {
	if ( value.length === 0 ) {
		return true;
	}

	return value === value.toUpperCase();
};

export const minLength = ( value: string, length: number ): boolean => {
	return value.length >= length;
};

export const maxLength = ( value: string, length: number ): boolean => {
	return value.length <= length;
};

export const numericString = ( value: string ): boolean => {
	if ( value.length === 0 ) {
		return true;
	}

	return /^[0-9]+$/.test( value );
};

export const numericStringNoLeadingZeros = ( value: string ): boolean => {
	if ( value.length === 0 ) {
		return true;
	}

	return /^[1-9][0-9]*$/.test( value );
};

export const validatorsMapping = {
	alphaNumeric,
	lowerCaseOnly,
	upperCaseOnly,
	minLength,
	maxLength,
	numericString,
	numericStringNoLeadingZeros,
};

export const isInputValid = (
	value: string,
	validationRule: ValidationRule
): boolean => {
	const validator = validatorsMapping[ validationRule.name ];

	if ( typeof validator !== 'function' ) {
		return false;
	}

	if (
		validationRule.name === 'minLength' ||
		validationRule.name === 'maxLength'
	) {
		return validator( value, validationRule.payload.value );
	}

	return validator( value, validationRule );
};
