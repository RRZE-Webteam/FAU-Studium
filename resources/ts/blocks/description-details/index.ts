import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import Edit from './Edit';
import Save from './Save';

registerBlockType( metadata.name, {
	...metadata,
	edit: Edit,
	save: Save,
} );
