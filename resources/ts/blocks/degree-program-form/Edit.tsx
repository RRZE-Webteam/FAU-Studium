import React from 'react';

import { useBlockProps } from '@wordpress/block-editor';

import DegreeProgramEditForm from 'components/DegreeProgramEditForm';

import './admin.scss';

const Edit = () => {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <DegreeProgramEditForm />
        </div>
    );
};

export default Edit;
