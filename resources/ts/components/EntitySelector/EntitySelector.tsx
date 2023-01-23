import React, { useEffect, useMemo, useState } from 'react';
import { EntitySelectorProps } from 'defs';
import { find, uniq } from 'lodash';

import { FormTokenField } from '@wordpress/components';
import { useDebounce } from '@wordpress/compose';

/**
 * Entity selector.
 * Heavily based on FlatTermSelector.
 *
 * @link https://github.com/WordPress/gutenberg/blob/c02421f8cd6e90966b7e8cd487d311ee31a6aada/packages/editor/src/components/post-taxonomies/flat-term-selector.js
 */
export default function EntitySelector({
    label,
    messages,
    maxLength,
    onChange,
    entityToToken,
    maxSuggestions,
    entities,
    searchedEntities,
    setSearch,
}: EntitySelectorProps) {
    const [values, setValues] = useState<Array<string>>([]);
    const debouncedSearch = useDebounce(setSearch, 500);

    useEffect(() => {
        if (entities.length > 0) {
            const newValues = entities.map(entityToToken);
            setValues(newValues);
        }
    }, [entities]);

    const suggestions = useMemo<Array<string>>(() => {
        return searchedEntities.map(entityToToken);
    }, [searchedEntities]);

    const onChangeTokens = (tokens) => {
        const availableEntities = [...entities, ...searchedEntities];
        const uniqueTokens = uniq(tokens);

        setValues(uniqueTokens);
        const newEntities = uniqueTokens.map((token) =>
            find(availableEntities, (entity) => entityToToken(entity) === token),
        );
        onChange(newEntities);
    };

    return (
        <FormTokenField
            label={label}
            messages={messages}
            maxLength={maxLength}
            value={values}
            suggestions={suggestions}
            onChange={onChangeTokens}
            onInputChange={debouncedSearch}
            maxSuggestions={maxSuggestions}
            __experimentalShowHowTo={false}
        />
    );
}
