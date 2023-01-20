import React from 'react';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
    const blockProps = useBlockProps.save();

    return (
        <dl {...blockProps}>
            <InnerBlocks.Content />
        </dl>
    );
};

export default Save;
