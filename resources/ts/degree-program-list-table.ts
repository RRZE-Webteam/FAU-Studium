// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Window {
	ajaxurl: string;
	DegreeProgramListTableServerData: object;
}

const IS_LOADING_CLASS = 'spinner';
const FILLED_STAR_CLASS = 'dashicons-star-filled';
const EMPTY_STAR_CLASS = 'dashicons-star-empty';

const toggleSticky = ( icon: HTMLSpanElement ): void => {
	const isSticky = icon.classList.contains( FILLED_STAR_CLASS );
	if ( isSticky ) {
		icon.classList.remove( FILLED_STAR_CLASS );
		icon.classList.add( EMPTY_STAR_CLASS );
		return;
	}

	icon.classList.remove( EMPTY_STAR_CLASS );
	icon.classList.add( FILLED_STAR_CLASS );
};

const onStickyCellClick = ( cell: HTMLTableCellElement ): boolean => {
	const icon = cell.querySelector< HTMLSpanElement >( 'span' );
	if ( ! icon ) {
		return false;
	}

	if ( icon.classList.contains( IS_LOADING_CLASS ) ) {
		return false;
	}

	const id = ( cell.parentElement?.id ?? '' ).split( '-' )[ 1 ];
	if ( ! id ) {
		return false;
	}

	icon.classList.add( IS_LOADING_CLASS );

	const request = new URLSearchParams( {
		...window.DegreeProgramListTableServerData,
		id,
	} );

	fetch( window.ajaxurl, {
		method: 'POST',
		body: request,
	} )
		.then( ( response ) => {
			return response.json();
		} )
		.then( ( response ) => {
			if ( ! response.success ) {
				// eslint-disable-next-line no-alert
				alert( response.data.message );
				return;
			}

			toggleSticky( icon );
		} )
		.finally( () => {
			icon.classList.remove( IS_LOADING_CLASS );
		} );

	return false;
};

document
	.querySelectorAll< HTMLTableCellElement >( 'td.sticky-column' )
	.forEach( ( cell ) => {
		cell.addEventListener( 'click', () => onStickyCellClick( cell ) );
	} );
