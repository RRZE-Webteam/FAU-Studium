import { Immutable } from 'immer';
import serverData from 'util/serverData';

import { Post, store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

import { CoreDataSelectors, MapSelect } from '../../defs/core-data';

const DEFAULT_QUERY = {
    per_page: -1,
    orderby: 'include',
    _fields: 'id,title',
    context: 'view',
};

export default function useDegreeProgramPosts(
    postIds: Immutable<Array<number>>,
    additionalQuery: Record<string, any> = {},
): { posts: Array<Post<'view'>>; hasResolvedPosts: boolean } {
    return useSelect<MapSelect<CoreDataSelectors>>(
        (select) => {
            const { getEntityRecords, hasFinishedResolution } = select(coreStore.name);

            if (postIds.length === 0) {
                return {
                    posts: [],
                    hasResolvedPosts: true,
                };
            }

            const query = {
                ...DEFAULT_QUERY,
                include: postIds.join(','),
                ...additionalQuery,
            };

            return {
                posts: getEntityRecords('postType', serverData().postType, query),
                hasResolvedPosts: hasFinishedResolution('getEntityRecords', [
                    'postType',
                    serverData().postType,
                    query,
                ]),
            };
        },
        [postIds],
    );
}
