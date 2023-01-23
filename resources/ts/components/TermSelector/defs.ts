import { TaxonomySlug, WpTerm } from 'defs/term';

import { FormTokenFieldProps } from '@wordpress/components/build-types/form-token-field/types';

export type Term = WpTerm<any>;

export interface SelectorProps {
    id: string;
    label: string;
    help?: string;
    messages?: FormTokenFieldProps['messages'];
    taxonomy: TaxonomySlug;
}

export interface TermSelectorProps extends SelectorProps {
    value: string;
    onChange: (term: Term | null) => void;
}

export interface MultiTermSelectorProps extends SelectorProps {
    value: string[];
    onChange: (terms: Term[]) => void;
}
