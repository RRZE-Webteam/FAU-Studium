import domReady from '@wordpress/dom-ready';
import type { ValidationRule } from './validation/defs';
import { isInputValid } from './validation/formFieldValidationRules';

const SUBMIT_BUTTON_SELECTOR = '#submit';
const VALIDATION_ERRROS_CLASSNAME = 'term-meta-validation-errors';

declare global {
	interface Window {
		termMetaValidationRules?: Record< string, ValidationRule[] >;
	}
}

const errors = new Map< string, Map< string, string > >();

const renderErrors = ( fieldName: string ) => {
	const fieldWrapper = document
		.querySelector< HTMLDivElement >( `[name="${ fieldName }"]` )
		?.closest< HTMLDivElement >( '.form-field' );

	if ( ! fieldWrapper ) {
		return;
	}

	let validationErrors = fieldWrapper.querySelector< HTMLUListElement >(
		`.${ VALIDATION_ERRROS_CLASSNAME }`
	);
	const fieldErrors = errors.get( fieldName );

	if ( ! fieldErrors || fieldErrors.size === 0 ) {
		validationErrors?.remove();
		fieldWrapper.classList.remove( 'form-invalid' );
		return;
	}

	if ( ! validationErrors ) {
		validationErrors = document.createElement( 'ul' );
		validationErrors.classList.add( VALIDATION_ERRROS_CLASSNAME );
	}

	validationErrors.innerHTML = '';

	fieldWrapper.classList.add( 'form-invalid' );

	fieldErrors.forEach( ( errorMessage ) => {
		const errorItemElement = document.createElement( 'li' );
		errorItemElement.classList.add( 'form-invalid-message' );
		errorItemElement.textContent = errorMessage;
		( validationErrors as HTMLUListElement ).appendChild(
			errorItemElement
		);
	} );

	fieldWrapper.appendChild( validationErrors );
};

const disableSubmit = () => {
	const submitButton = document.querySelector<
		HTMLInputElement | HTMLButtonElement
	>( SUBMIT_BUTTON_SELECTOR );

	if ( ! submitButton ) {
		return;
	}

	submitButton.disabled = true;
};

const enableSubmit = () => {
	const submitButton = document.querySelector<
		HTMLInputElement | HTMLButtonElement
	>( SUBMIT_BUTTON_SELECTOR );

	if ( ! submitButton ) {
		return;
	}

	submitButton.disabled = false;
};

const validateInput = ( input: HTMLElement, rules: ValidationRule[] ) => {
	if ( ! ( input instanceof HTMLInputElement ) ) {
		return;
	}

	const fieldErrors = errors.get( input.name ) || new Map< string, string >();

	rules.forEach( ( rule ) => {
		if ( ! isInputValid( input.value, rule ) ) {
			fieldErrors.set( rule.name, rule.errorMessage );
			disableSubmit();
			return;
		}

		fieldErrors.delete( rule.name );
	} );

	errors.set( input.name, fieldErrors );
	renderErrors( input.name );

	if ( fieldErrors.size === 0 ) {
		enableSubmit();
	}
};

domReady( () => {
	if ( typeof window.termMetaValidationRules === 'undefined' ) {
		return;
	}

	Object.entries( window.termMetaValidationRules ).forEach(
		( [ key, rules ] ) => {
			const input = document.querySelector< HTMLInputElement >(
				`input[name="${ key }"]`
			);

			if ( ! input ) {
				return;
			}

			input.addEventListener( 'input', ( event ) => {
				validateInput( event.target as HTMLElement, rules );
			} );
		}
	);
} );
