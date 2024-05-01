import { dispatch, select } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import { store as richTextStore } from '@wordpress/rich-text';

interface FormatType {
	name: string;
	[ key: string ]: unknown;
}

const ALLOWED_FORMATS = [ 'core/bold', 'core/link' ];

domReady( () => {
	const registeredFormats = select(
		richTextStore
	).getFormatTypes() as Array< FormatType >;
	const formatNamesToDisable = < Array< string > >[];
	registeredFormats.forEach( ( formatType ) => {
		if ( ALLOWED_FORMATS.includes( formatType.name ) ) {
			return;
		}

		formatNamesToDisable.push( formatType.name );
	} );

	dispatch( richTextStore ).removeFormatTypes( formatNamesToDisable );
} );
