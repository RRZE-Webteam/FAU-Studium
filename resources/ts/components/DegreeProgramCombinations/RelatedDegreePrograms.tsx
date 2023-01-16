import React, { useEffect, useMemo, useState } from 'react';
import { find, uniq } from 'lodash';

import { FormTokenField } from '@wordpress/components';
import { useDebounce } from '@wordpress/compose';
import { Post } from '@wordpress/core-data';

import { MAX_SUGGESTIONS } from './constants';
import useDegreeProgramPosts from './useDegreeProgramPosts';
import useSearchedDegreeProgramPosts from './useSearchedDegreeProgramPosts';

import { RelatedDegreeProgramsProps } from './defs';

const postTitlesToIds = (postTitles: Array<string>, availablePosts: Array<Post<'view'>>) => {
    return postTitles.map(
        (postTitle) =>
            find(availablePosts, (post: Post<'view'>) => post.title.rendered === postTitle).id,
    );
};

/**
 * DegreeProgram CPT selector.
 * Heavily based on FlatTermSelector.
 *
 * @link https://github.com/WordPress/gutenberg/blob/c02421f8cd6e90966b7e8cd487d311ee31a6aada/packages/editor/src/components/post-taxonomies/flat-term-selector.js
 */
export default function RelatedDegreePrograms({
    relatedDegreeProgramIds,
    setRelatedDegreePrograms,
    additionalQuery,
    label,
    messages,
}: RelatedDegreeProgramsProps): JSX.Element {
    const [values, setValues] = useState<Array<string>>([]);
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(setSearch, 500);

    const { posts, hasResolvedPosts } = useDegreeProgramPosts(
        relatedDegreeProgramIds,
        additionalQuery,
    );

    const searchResults = useSearchedDegreeProgramPosts(search, additionalQuery);

    useEffect(() => {
        if (hasResolvedPosts) {
            const newValues = posts.map((post) => post.title.rendered);
            setValues(newValues);
        }
    }, [posts, hasResolvedPosts]);

    const suggestions = useMemo<Array<string>>(() => {
        return (searchResults ?? []).map((post) => post.title.rendered);
    }, [searchResults]);

    const onChange = (postTitles) => {
        const availablePosts = [...(posts ?? []), ...(searchResults ?? [])];
        const uniquePostTitles = uniq(postTitles);

        setValues(uniquePostTitles);
        setRelatedDegreePrograms(postTitlesToIds(uniquePostTitles, availablePosts));
    };

    return (
        <>
            <FormTokenField
                label={label}
                messages={messages}
                value={values}
                suggestions={suggestions}
                onChange={onChange}
                onInputChange={debouncedSearch}
                maxSuggestions={MAX_SUGGESTIONS}
                __experimentalShowHowTo={false}
            />
        </>
    );
}
