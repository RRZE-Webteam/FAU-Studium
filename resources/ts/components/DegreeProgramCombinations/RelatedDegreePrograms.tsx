import React from 'react';
import { Immutable } from 'immer';

import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { Post } from '@wordpress/core-data';

import EntitySelector from '../EntitySelector';
import { withDegreeProgramPosts, withSearchedDegreeProgramPosts } from './hoc';

import { EntitySelectorProps } from '../../defs/entity-selector';

export type RelatedDegreeProgramsProps = Pick<EntitySelectorProps, 'label' | 'messages'> & {
    relatedDegreeProgramIds: Immutable<Array<number>>;
    setRelatedDegreePrograms(value: Array<number>): void;
};

const withRelatedDegreeProgramProps = createHigherOrderComponent(
    (WrappedComponent: React.FC<Partial<EntitySelectorProps>>) =>
        ({ setRelatedDegreePrograms, ...others }: RelatedDegreeProgramsProps) => {
            return (
                <WrappedComponent
                    entityToToken={(post: Post) => post.title.rendered}
                    onChange={(posts: Array<Post>) => {
                        setRelatedDegreePrograms(posts.map((post) => post.id));
                    }}
                    maxSuggestions={20}
                    {...others}
                />
            );
        },
    'withRelatedDegreeProgramProps',
);

export default compose(
    withRelatedDegreeProgramProps,
    withDegreeProgramPosts,
    withSearchedDegreeProgramPosts,
)(EntitySelector) as React.FC<RelatedDegreeProgramsProps>;
