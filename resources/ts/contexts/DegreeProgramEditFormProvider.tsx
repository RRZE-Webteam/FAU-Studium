import React, {
	createContext,
	ReactNode,
	useCallback,
	useContext,
} from 'react';
import produce from 'immer';
import { set } from 'lodash';

import { useEntityProp } from '@wordpress/core-data';
import { useDispatch } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

import serverData from '../util/serverData';

import { useValidation } from './DegreeProgramValidationProvider';

import { DegreeProgramData, DegreeProgramDataPaths } from '../defs';

interface ContextValue {
	values: DegreeProgramData;
	handleChange: < Value >( path: DegreeProgramDataPaths, val: Value ) => void;
}

export const DegreeProgramEditFormContext = createContext< ContextValue >(
	{} as ContextValue
);

interface Props {
	children: ReactNode;
}

const DegreeProgramEditFormProvider = ( { children }: Props ) => {
	const [ degreeProgramData, setDegreeProgramData ] = useEntityProp(
		'postType',
		serverData().postType,
		serverData().propertyName
	) as [ DegreeProgramData, ( val: DegreeProgramData ) => void, unknown ];
	const { removeError } = useValidation();

	const { editPost } = useDispatch( editorStore );

	/**
	 * This function provides a workaround to enable the "Publish" button for new degree programs.
	 * Gutenberg marks new posts as unsavable
	 * if no title, excerpt, or content changes are detected.
	 * We cannot update the title because it causes a JS error,
	 * so we must update the excerpt to change the post record.
	 *
	 * @param path
	 * @param val
	 *
	 * @see https://github.com/WordPress/gutenberg/blob/55fbdd96aa2642dff194cb69ebe02c3669eebae0/packages/editor/src/components/post-publish-button/index.js#L124-L129
	 * @see https://github.com/WordPress/gutenberg/blob/c30e2f6a83ab3d458f5c31560b766216fc499e10/packages/editor/src/store/selectors.js#L476-L497
	 */
	const enablePostPublishButton = useCallback(
		( path: DegreeProgramDataPaths, val: any ): void => {
			if ( path === 'title.de' && typeof val === 'string' ) {
				editPost( { excerpt: val } );
			}
		},
		[ editPost ]
	);

	const handleChange = useCallback(
		< Value, >( path: DegreeProgramDataPaths, val: Value ) => {
			removeError( path );
			setDegreeProgramData(
				produce( degreeProgramData, ( draft ) =>
					set( draft, path, val )
				)
			);
			enablePostPublishButton( path, val );
		},
		[
			setDegreeProgramData,
			degreeProgramData,
			removeError,
			enablePostPublishButton,
		]
	);

	return (
		<DegreeProgramEditFormContext.Provider
			value={ {
				handleChange,
				values: degreeProgramData,
			} }
		>
			{ children }
		</DegreeProgramEditFormContext.Provider>
	);
};

export const useEditDegreeProgram = () =>
	useContext( DegreeProgramEditFormContext );

export default DegreeProgramEditFormProvider;
