import { Degree, MultilingualLink, MultilingualString } from 'defs';
import { MultilingualLinkMeta, WpTerm } from 'defs/term';

import { propertyId } from './idHelpers';

export function transformTermToMultilingualString(
    term: WpTerm<{ name_en: string }>,
): MultilingualString {
    return {
        en: term.meta.name_en ?? '',
        de: term.name,
        id: propertyId('term', term.id),
    };
}

export function transformTermToMultilingualLink(
    term: WpTerm<MultilingualLinkMeta>,
): MultilingualLink {
    return {
        id: propertyId('term', term.id),
        name: {
            id: propertyId('term', `${term.id}.name`),
            de: term.name,
            en: term.meta.name_en ?? '',
        },
        link_text: {
            id: propertyId('term', `${term.id}.link_text`),
            de: term.meta.link_text ?? '',
            en: term.meta.link_text_en ?? '',
        },
        link_url: {
            id: propertyId('term', `${term.id}.link_url`),
            de: term.meta.link_url ?? '',
            en: term.meta.link_url_en ?? '',
        },
    };
}

export function transformTermToDegree(
    term: WpTerm<{ name_en: string; abbreviation: string; abbreviation_en: string }>,
): Degree {
    return {
        id: propertyId('term', term.id),
        abbreviation: {
            id: propertyId('term', `${term.id}.abbreviation`),
            de: term.meta.abbreviation ?? '',
            en: term.meta.abbreviation_en ?? '',
        },
        name: {
            id: propertyId('term', `${term.id}.name`),
            de: term.name,
            en: term.meta.name_en ?? '',
        },
    };
}
