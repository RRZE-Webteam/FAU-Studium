import { TaxonomySlug, WpTerm } from 'defs/term';

export type Term = WpTerm<any>;

export interface TermSelectorProps {
    taxonomy: TaxonomySlug;
    value: string;
    onChange: (term: Term) => void;
}

export interface MultiTermSelectorProps {
    taxonomy: TaxonomySlug;
    value: string[];
    onChange: (terms: Term[]) => void;
}
