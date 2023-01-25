import React from 'react';

import { BaseControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';

import { SelectorProps } from '../defs';

import { EntitySelectorProps, WpTerm } from 'defs';

const withTermSelectorProps = createHigherOrderComponent(
    (WrappedComponent: React.FC<Partial<EntitySelectorProps>>) =>
        ({ id, help, ...others }: SelectorProps) => {
            return (
                <BaseControl id={id} help={help ?? ''}>
                    <WrappedComponent
                        entityToToken={(term: WpTerm) => term.name}
                        maxSuggestions={20}
                        {...others}
                    />
                </BaseControl>
            );
        },
    'withSelectorProps',
);

export default withTermSelectorProps;
