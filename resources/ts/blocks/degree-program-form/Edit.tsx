import React from 'react';
import DegreeProgramEditForm from 'components/DegreeProgramEditForm';

import { useBlockProps } from '@wordpress/block-editor';

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
