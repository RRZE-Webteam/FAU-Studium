import { useState } from 'react';

import { Post, store as coreStore } from '@wordpress/core-data';
import { withSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

import serverData from 'util/serverData';

import { EntitySelectorProps } from 'defs';

const withSearchedDegreeProgramPosts = withSelect(
    (
        select,
        ownProps: EntitySelectorProps<Post<'view'>>,
    ): Partial<EntitySelectorProps<Post<'view'>>> => {
        const [search, setSearch] = useState('');
        const { getCurrentPost } = select(editorStore.name);
        const { getEntityRecords } = select(coreStore.name);

        const currentPost = getCurrentPost();

        const posts = getEntityRecords('postType', serverData().postType, {
            ...{
                per_page: ownProps.maxSuggestions,
                orderby: 'title',
                order: 'asc',
                _fields: 'id,degree_program',
                context: 'view',
            },
            search,
            ...(currentPost ? { exclude: currentPost.id } : {}),
        });

        return {
            searchedEntities: posts ?? [],
            setSearch,
        };
    },
);

export default withSearchedDegreeProgramPosts;
