import domReady from '@wordpress/dom-ready';

const TERM_EDIT_FORM_SELECTOR = '#addtag, #edittag';

domReady( () => {
	const form = document.querySelector< HTMLFormElement >(
		TERM_EDIT_FORM_SELECTOR
	);
	const submitButton = form?.querySelector< HTMLButtonElement >(
		"input[type='submit']"
	);

	if ( ! form || ! submitButton ) {
		return;
	}

	form.querySelectorAll< HTMLInputElement >( '.form-field input' ).forEach(
		( input ) => {
			input.addEventListener( 'input', () => {
				if ( form.checkValidity() ) {
					submitButton.disabled = false;
					return;
				}

				if ( input.checkValidity() ) {
					return;
				}

				submitButton.disabled = true;
				form.reportValidity();
			} );
		}
	);
} );
