import { Post, store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

import serverData from '../../util/serverData';
import { MAX_SUGGESTIONS } from './constants';

import { CoreDataSelectors, EditorStoreSelectors, MapSelect } from '../../defs';

const DEFAULT_QUERY = {
    per_page: MAX_SUGGESTIONS,
    orderby: 'title',
    order: 'asc',
    _fields: 'id,title',
    context: 'view',
};

export default function useSearchedDegreeProgramPosts(
    search: string,
    additionalQuery: Record<string, any> = {},
): Array<Post<'view'>> {
    return useSelect<MapSelect<EditorStoreSelectors & CoreDataSelectors>>(
        (select) => {
            const { getCurrentPost } = select(editorStore.name);
            const { getEntityRecords } = select(coreStore.name);
            if (search.length === 0) {
                return [];
            }

            const currentPost = getCurrentPost();

            const posts = getEntityRecords('postType', serverData().postType, {
                ...DEFAULT_QUERY,
                search,
                ...additionalQuery,
                ...(currentPost ? { exclude: currentPost.id } : {}),
            });

            return posts ?? [];
        },
        [search],
    );
}
