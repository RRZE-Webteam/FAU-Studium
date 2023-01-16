import React, { useMemo } from 'react';
import useDegreeProgramTerms from 'hooks/useDegreeProgramTerms';
import { propertyId } from 'util/idHelpers';

import { SelectControl } from '@wordpress/components';

import { MultiTermSelectorProps } from './defs';

const MultiTermSelector = ({ taxonomy, value, onChange }: MultiTermSelectorProps) => {
    const terms = useDegreeProgramTerms(taxonomy);

    const options = useMemo(() => {
        return terms.map((term) => ({
            value: propertyId('term', term.id),
            label: term.name,
        }));
    }, [terms]);

    return (
        <div>
            <SelectControl
                options={options}
                multiple
                onChange={(selected: string[]) => {
                    onChange(
                        terms.filter((term) => selected.includes(propertyId('term', term.id))),
                    );
                }}
                value={value}
            />
        </div>
    );
};

export default MultiTermSelector;
