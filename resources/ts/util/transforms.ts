import { propertyId } from './idHelpers';

import {
    AdmissionRequirement,
    Degree,
    DegreeAbbreviationGerman,
    MultilingualLink,
    MultilingualString,
} from 'defs';
import { MultilingualLinkMeta, WpTerm } from 'defs/term';

const EMPTY_MULTILINGUAL_STRING = {
    id: '',
    de: '' as DegreeAbbreviationGerman,
    en: '',
};

export function transformTermToMultilingualString(
    term: WpTerm<{ name_en: string }> | null,
): MultilingualString {
    return term
        ? {
              en: term.meta.name_en ?? '',
              de: term.name,
              id: propertyId('term', term.id, 'name'),
          }
        : { ...EMPTY_MULTILINGUAL_STRING };
}

export function transformTermToMultilingualLink<ParentType = never>(
    term: WpTerm<MultilingualLinkMeta, ParentType> | null,
): MultilingualLink {
    return term
        ? {
              id: propertyId('term', term.id),
              name: {
                  id: propertyId('term', term.id, 'name'),
                  de: term.name,
                  en: term.meta.name_en ?? '',
              },
              link_text: {
                  id: propertyId('term_meta', term.id, 'link_text'),
                  de: term.meta.link_text ?? '',
                  en: term.meta.link_text_en ?? '',
              },
              link_url: {
                  id: propertyId('term_meta', term.id, 'link_url'),
                  de: term.meta.link_url ?? '',
                  en: term.meta.link_url_en ?? '',
              },
          }
        : {
              id: '',
              name: { ...EMPTY_MULTILINGUAL_STRING },
              link_text: { ...EMPTY_MULTILINGUAL_STRING },
              link_url: { ...EMPTY_MULTILINGUAL_STRING },
          };
}

export function transformTermToDegree(
    term: WpTerm<
        {
            name_en: string;
            abbreviation: DegreeAbbreviationGerman;
            abbreviation_en: string;
        },
        Degree
    > | null,
): Degree {
    return term
        ? {
              id: propertyId('term', term.id),
              abbreviation: {
                  id: propertyId('term_meta', term.id, 'abbreviation'),
                  de: term.meta.abbreviation ?? '',
                  en: term.meta.abbreviation_en ?? '',
              },
              name: {
                  id: propertyId('term', term.id, 'name'),
                  de: term.name,
                  en: term.meta.name_en ?? '',
              },
              parent: term.parent_object ?? null,
          }
        : {
              id: '',
              abbreviation: { ...EMPTY_MULTILINGUAL_STRING },
              name: { ...EMPTY_MULTILINGUAL_STRING },
              parent: null,
          };
}

export function transformTermToAdmissionRequirement(
    term: WpTerm<MultilingualLinkMeta, AdmissionRequirement> | null,
): AdmissionRequirement {
    const admissionRequirement = transformTermToMultilingualLink(term) as AdmissionRequirement;

    if (!term) {
        return admissionRequirement;
    }

    admissionRequirement.parent = term.parent_object ?? null;

    return admissionRequirement;
}
