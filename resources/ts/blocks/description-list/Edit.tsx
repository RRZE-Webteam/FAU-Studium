import React from 'react';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [ 'fau/description-term', 'fau/description-details' ];
const TEMPLATE = [ [ 'fau/description-term' ], [ 'fau/description-details' ] ];

const Edit = () => {
	const blockProps = useBlockProps();

	return (
		<dl { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				renderAppender={ InnerBlocks.ButtonBlockAppender }
			/>
		</dl>
	);
};

export default Edit;
