import React, { useCallback, useState } from 'react';
import { StyleSheetManager } from 'styled-components';

import { useBlockProps } from '@wordpress/block-editor';

import DegreeProgramEditForm from '../../components/DegreeProgramEditForm';

import './admin.scss';

const Edit = () => {
	const [ styleTarget, setStyleTarget ] = useState< HTMLHeadElement | null >(
		null
	);
	const captureWrapper = useCallback( ( node: HTMLDivElement | null ) => {
		// Editor scripts run outside the iframe containing this block.
		setStyleTarget( node?.ownerDocument.head ?? null );
	}, [] );
	const blockProps = useBlockProps( { ref: captureWrapper } );

	return (
		<div { ...blockProps }>
			{ styleTarget && (
				<StyleSheetManager target={ styleTarget }>
					<DegreeProgramEditForm />
				</StyleSheetManager>
			) }
		</div>
	);
};

export default Edit;
