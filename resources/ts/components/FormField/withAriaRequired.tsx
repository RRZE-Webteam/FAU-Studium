import React from 'react';

import { createHigherOrderComponent } from '@wordpress/compose';

import { useFieldContext } from './FormField';

const withAriaRequired = createHigherOrderComponent(
    (WrappedComponent: React.FC) => (props) => {
        const { required } = useFieldContext();
        return <WrappedComponent aria-required={required} {...props} />;
    },
    'withAriaRequired',
);

export default withAriaRequired;
