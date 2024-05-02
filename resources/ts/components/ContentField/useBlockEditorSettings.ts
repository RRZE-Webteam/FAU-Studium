/* eslint-disable  @wordpress/no-unsafe-wp-apis */
import { useMemo } from 'react';

import {
	__experimentalFetchLinkSuggestions as fetchLinkSuggestions,
	__experimentalFetchUrlData as fetchUrlData,
	store as coreStore,
} from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { uploadMedia } from '@wordpress/media-utils';

import { ALLOWED_BLOCK_TYPES, ALLOWED_MIME_TYPES } from './constants';

const SETTINGS = {
	allowedBlockTypes: ALLOWED_BLOCK_TYPES,
	codeEditingEnabled: false,
};

const useBlockEditorSettings = () => {
	const hasUploadPermissions = useSelect(
		( select ) => select( coreStore ).canUser( 'create', 'media' ) ?? false,
		[]
	);

	return useMemo( () => {
		let mediaUploadBlockEditor;
		if ( hasUploadPermissions ) {
			mediaUploadBlockEditor = ( { onError, ...argumentsObject } ) => {
				uploadMedia( {
					wpAllowedMimeTypes: ALLOWED_MIME_TYPES,
					onError: ( { message } ) => onError( message ),
					...argumentsObject,
				} );
			};
		}

		return {
			...SETTINGS,
			mediaUpload: mediaUploadBlockEditor,
			__experimentalFetchLinkSuggestions: ( search, searchOptions ) =>
				fetchLinkSuggestions( search, searchOptions ),
			__experimentalFetchRichUrlData: fetchUrlData,
		};
	}, [ hasUploadPermissions ] );
};

export default useBlockEditorSettings;
