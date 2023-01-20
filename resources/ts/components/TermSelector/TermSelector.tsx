import React, { useMemo } from 'react';
import { SelectOption } from 'defs/common';
import useDegreeProgramTerms from 'hooks/useDegreeProgramTerms';
import { propertyId } from 'util/idHelpers';

import { ComboboxControl } from '@wordpress/components';

import { Term, TermSelectorProps } from './defs';

const TermSelector = ({ taxonomy, value, onChange }: TermSelectorProps) => {
    const terms = useDegreeProgramTerms(taxonomy);

    const options = useMemo<SelectOption[]>(() => {
        return terms.map((term) => ({
            label: term.name,
            value: propertyId('term', term.id),
        }));
    }, [terms]);

    return (
        <div>
            <ComboboxControl
                options={options}
                onChange={(selected: string) => {
                    onChange(
                        terms.find((term) => selected === propertyId('term', term.id)) as Term,
                    );
                }}
                value={value}
            />
        </div>
    );
};

export default TermSelector;
