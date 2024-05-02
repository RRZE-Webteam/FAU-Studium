import React, {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';

import { store as coreStore } from '@wordpress/core-data';
import { select, subscribe, useDispatch, useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

import { transformErrorMessage } from '../util/errorTransforms';
import serverData from '../util/serverData';

import {
	DegreeProgramDataPaths,
	EditorStoreSelectors,
	FormValidationError,
	FormValidationErrors,
	MapSelect,
} from '../defs';

interface ContextValue {
	errors: FormValidationErrors;
	getFieldErrors: ( fieldId: DegreeProgramDataPaths ) => FormValidationErrors;
	removeError( fieldId: DegreeProgramDataPaths ): void;
	fieldHasErrors( fieldId: DegreeProgramDataPaths ): boolean;
}

interface Props {
	children: ReactNode;
}

type ServerError = {
	code: string;
	data: {
		params: Record<
			DegreeProgramDataPaths,
			{ message: string; code: string }
		>;
	};
};

export const DegreeProgramValidationContext = createContext< ContextValue >(
	{} as ContextValue
);

const transformServerError = (
	serverError: ServerError
): FormValidationErrors => {
	const errors: FormValidationErrors = new Map();

	if ( serverError.code !== 'rest_invalid_param' ) {
		return errors;
	}

	const errorDetails:
		| Record< DegreeProgramDataPaths, { message: string; code: string } >
		| undefined = serverError.data?.params;

	if ( typeof errorDetails === 'undefined' ) {
		return errors;
	}

	Object.entries( errorDetails ).forEach( ( detail ) => {
		const error: FormValidationError = {
			errorCode: detail[ 1 ].code || '',
			message: detail[ 1 ].message,
		};

		errors.set( detail[ 0 ] as DegreeProgramDataPaths, {
			...error,
			message: transformErrorMessage(
				detail[ 0 ] as DegreeProgramDataPaths,
				error
			),
		} );
	} );

	return errors;
};

const DegreeProgramValidationProvider = ( { children }: Props ) => {
	const [ errors, setErrors ] = useState< FormValidationErrors >( new Map() );
	const [ isSaving, setIsSaving ] = useState< boolean >( false );
	const postId = useSelect< MapSelect< EditorStoreSelectors > >(
		( selectCb ) => {
			const { getCurrentPostId } = selectCb( editorStore );

			return getCurrentPostId();
		},
		[]
	);

	const { editPost } = useDispatch( editorStore );

	/**
	 * Get an array of errors associated with a field.
	 * For example, `passing `title` returns errors from
	 * `title.en`, `title.de`, and any other subfield.
	 * @param fieldId
	 */
	const getFieldErrors = useCallback(
		( fieldId: DegreeProgramDataPaths ): FormValidationErrors => {
			return new Map(
				Array.from( errors ).filter( ( [ key ] ) => {
					const isOnSameRootFieldName =
						key.split( '.' )[ 0 ] === fieldId.split( '.' )[ 0 ];

					return (
						isOnSameRootFieldName &&
						key.substring( 0, fieldId.length ) === fieldId
					);
				} )
			);
		},
		[ errors ]
	);

	const fieldHasErrors = useCallback(
		( fieldId: DegreeProgramDataPaths ) => {
			const fieldErrors = getFieldErrors( fieldId );

			return fieldErrors.size > 0;
		},
		[ getFieldErrors ]
	);

	const removeError = ( fieldId: DegreeProgramDataPaths ) => {
		setErrors( ( prevErrors ) => {
			const newErrors = new Map( prevErrors );
			newErrors.delete( fieldId );
			newErrors.delete( `${ fieldId }.id` as DegreeProgramDataPaths );
			return newErrors;
		} );
	};

	subscribe( () => {
		const selectEditorStore: any = select( editorStore );
		const { isSavingPost, isAutosavingPost } = selectEditorStore;
		setIsSaving( isSavingPost() && ! isAutosavingPost() );
	} );

	// Update server errors when post is saved.
	useEffect( () => {
		if ( isSaving ) {
			return;
		}

		if ( ! postId ) {
			return;
		}

		const selectCoreStore: any = select( coreStore );
		const serverErrors = selectCoreStore.getLastEntitySaveError(
			'postType',
			serverData().postType,
			postId
		);

		if ( ! serverErrors ) {
			setErrors( new Map() );
			return;
		}

		/**
		 * This is a workaround for inconsistent block editor behavior.
		 * The "Publish" button changes the post status, while the "Save draft" button doesn't.
		 * But if you tried to publish the post and got an error,
		 * and then click "Save draft", the post is published.
		 *
		 * {@link https://github.com/WordPress/gutenberg/blob/fedf426e8bf6f32ca6ef0b60cf26ecc81f917e03/packages/editor/src/components/post-publish-button/index.js#L256}
		 * {@link https://github.com/WordPress/gutenberg/blob/fedf426e8bf6f32ca6ef0b60cf26ecc81f917e03/packages/editor/src/components/post-saved-state/index.js#L153}
		 */
		editPost( { status: 'draft' }, { undoIgnore: true } );

		setErrors( new Map( [ ...transformServerError( serverErrors ) ] ) );
	}, [ isSaving, postId, editPost ] );
	return (
		<DegreeProgramValidationContext.Provider
			value={ { errors, getFieldErrors, removeError, fieldHasErrors } }
		>
			{ children }
		</DegreeProgramValidationContext.Provider>
	);
};

export const useValidation = () => useContext( DegreeProgramValidationContext );

export default DegreeProgramValidationProvider;
