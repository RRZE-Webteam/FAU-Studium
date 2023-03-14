import React, { useEffect, useMemo, useState } from 'react';
import { find, uniq } from 'lodash';

import { FormTokenField } from '@wordpress/components';
import { useDebounce } from '@wordpress/compose';
import { _nx, sprintf } from '@wordpress/i18n';

import { EntitySelectorProps } from 'defs';

import './styles.scss';

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
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [values, setValues] = useState<Array<string>>([]);
    const debouncedSearch = useDebounce(setSearch, 500);

    useEffect(() => {
        if (entities.length > 0) {
            const newValues = entities.map(entityToToken);
            setValues(newValues);
        }
    }, [entities]);

    const suggestions = useMemo<Array<string>>(() => {
        if (maxLength && values.length >= maxLength) {
            return [];
        }

        return searchedEntities.map(entityToToken);
    }, [searchedEntities, values]);

    const onChangeTokens = (tokens) => {
        const availableEntities = [...entities, ...searchedEntities];
        const uniqueTokens = uniq(tokens);

        setValues(uniqueTokens);
        const newEntities = uniqueTokens.map((token) =>
            find(availableEntities, (entity) => entityToToken(entity) === token),
        );
        onChange(newEntities);
        setSearch('');
    };

    const isTokenValid = (token: string): boolean => {
        const availableEntities = [...entities, ...searchedEntities];
        return find(availableEntities, (entity) => entityToToken(entity) === token);
    };

    return (
        <div className="entity-selector">
            <div
                tabIndex={-1}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
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
                    __experimentalValidateInput={isTokenValid}
                    __experimentalExpandOnFocus
                />
            </div>

            {isFocused && maxLength && values.length >= maxLength && (
                <p className="entity-selector__max-items-notice">
                    {sprintf(
                        // translators: %d is maximum number of items that can be selected
                        _nx(
                            'You can only select %d item',
                            'You can only select %d items',
                            maxLength,
                            'backoffice: selector message',
                            'fau-degree-program',
                        ),
                        maxLength,
                    )}
                </p>
            )}
        </div>
    );
}
