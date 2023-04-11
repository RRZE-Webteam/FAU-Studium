import React, { useEffect, useMemo, useRef, useState } from 'react';
import { find, uniq } from 'lodash';

import { FormTokenField } from '@wordpress/components';
import { useDebounce } from '@wordpress/compose';
import { _nx, sprintf } from '@wordpress/i18n';

import { useFieldContext } from '../FormField/FormField';

import { EntitySelectorProps } from 'defs';

import './styles.scss';

type GenericEntity = {
    id: number;
    parent?: number;
};

/**
 * Entity selector.
 * Heavily based on FlatTermSelector.
 *
 * @link https://github.com/WordPress/gutenberg/blob/c02421f8cd6e90966b7e8cd487d311ee31a6aada/packages/editor/src/components/post-taxonomies/flat-term-selector.js
 */
export default function EntitySelector<Entity extends GenericEntity>({
    label = '',
    messages,
    maxLength,
    onChange,
    entityToToken,
    maxSuggestions,
    entities,
    searchedEntities,
    setSearch,
    childOnly,
}: EntitySelectorProps<Entity>) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [values, setValues] = useState<Array<string>>([]);
    const wrapperRef = useRef<HTMLDivElement>(null);
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

        let results: Array<Entity> = [];
        const topLevelEntities = searchedEntities.filter((entity) => !entity?.parent);

        topLevelEntities.forEach((entity) => {
            const children = searchedEntities.filter(
                (childEntity) => childEntity.parent === entity.id,
            );

            results = [...results, entity, ...children];
        });

        return results.map(entityToToken);
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
        const foundEntity = find(availableEntities, (entity) => entityToToken(entity) === token);
        return childOnly ? foundEntity && foundEntity?.parent : foundEntity;
    };

    /**
     * This is to fix a bug in Firefox where elements that are scrolled get focus,
     * This causes a problem where the focus is not moved to next input when pressing keyboard `tab` key
     *
     * @link https://bugzilla.mozilla.org/show_bug.cgi?id=616594
     */
    useEffect(() => {
        if (!wrapperRef.current || !isFocused) {
            return;
        }

        const suggestionsList = wrapperRef.current.querySelector<HTMLUListElement>(
            '.components-form-token-field__suggestions-list',
        );

        if (!suggestionsList) {
            return;
        }

        suggestionsList.tabIndex = -1;
    }, [isFocused]);

    return (
        <div className="entity-selector" ref={wrapperRef}>
            <div
                tabIndex={-1}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                role="listbox"
                aria-required={useFieldContext().required}
            >
                <FormTokenField
                    label={label}
                    messages={messages}
                    maxLength={maxLength}
                    value={values}
                    suggestions={suggestions}
                    onChange={onChangeTokens}
                    onInputChange={debouncedSearch}
                    onFocus={() => setIsFocused(true)}
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
