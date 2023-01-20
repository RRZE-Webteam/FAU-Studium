import React from 'react';

import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { Block } from '../../defs/common';

const Edit = ({ attributes: { content }, setAttributes }: Block<{ content: string }>) => {
    const blockProps = useBlockProps();

    return (
        <RichText
            {...blockProps}
            tagName="dd"
            onChange={(nextContent) => setAttributes({ content: nextContent })}
            value={content}
            placeholder={__('Description details …', 'fau-degree-program')}
        />
    );
};

export default Edit;
