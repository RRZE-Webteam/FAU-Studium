import React from 'react';
import { EntitySelectorProps, WpTerm } from 'defs';

import { compose, createHigherOrderComponent } from '@wordpress/compose';

import EntitySelector from '../EntitySelector';
import {
    withDegreeProgramTerms,
    withSearchedDegreeProgramTerms,
    withTermSelectorProps,
} from './hoc';

import { TermSelectorProps } from './defs';

const withSingleTermSelectorProps = createHigherOrderComponent(
    (WrappedComponent: React.FC<Partial<EntitySelectorProps>>) =>
        ({ onChange, ...others }: TermSelectorProps) => {
            return (
                <WrappedComponent
                    onChange={(terms: Array<WpTerm>) => {
                        if (terms.length === 0) {
                            onChange(null);
                            return;
                        }

                        onChange(terms[0]);
                    }}
                    maxLength={1}
                    {...others}
                />
            );
        },
    'withSingleTermSelectorProps',
);

export default compose(
    withSingleTermSelectorProps,
    withTermSelectorProps,
    withDegreeProgramTerms,
    withSearchedDegreeProgramTerms,
)(EntitySelector) as React.FC<TermSelectorProps>;
