import { addFilter } from '@wordpress/hooks';

function addShortcodeBlockVariations( settings, name ) {
	if ( name !== 'core/shortcode' ) {
		return settings;
	}

	return {
		...settings,
		variations: [
			{
				name: 'Alert',
				isDefault: true,
				title: 'Alert',
				attributes: { text: '[alert]' },
			},
			{
				name: 'Contact',
				title: 'Contact',
				attributes: { text: '[contact]' },
			},
			{
				name: 'Video',
				title: 'Video',
				attributes: { text: '[fau-video]' },
			},
		],
	};
}

addFilter(
	'blocks.registerBlockType',
	'fau/variations/shortcode',
	addShortcodeBlockVariations
);
