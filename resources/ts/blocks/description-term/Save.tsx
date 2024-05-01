import React from 'react';

import { RichText, useBlockProps } from '@wordpress/block-editor';

import { Block } from '../../defs/common';

const Save = ( { attributes: { content } }: Block< { content: string } > ) => {
	const saveBlockProps = useBlockProps.save();
	return (
		<RichText.Content
			{ ...saveBlockProps }
			tagName="dt"
			value={ content }
		/>
	);
};

export default Save;
