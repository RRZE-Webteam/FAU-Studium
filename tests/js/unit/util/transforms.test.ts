import { propertyId } from '../../../../resources/ts/util/idHelpers';
import {
    transformTermToDegree,
    transformTermToMultilingualLink,
    transformTermToMultilingualString,
} from '../../../../resources/ts/util/transforms';

import { DegreeAbbreviationGerman, MultilingualLinkMeta, WpTerm } from '../../../../resources/ts/defs';

const mockTerm: WpTerm<{ name_en: string }> = {
    description: '',
    id: 10,
    meta: {
        name_en: 'bew',
    },
    name: 'foo',
    slug: 'foo',
    taxonomy: 'baz',
};

const mockTerm2: WpTerm<MultilingualLinkMeta> = {
    ...mockTerm,
    meta: {
        link_text: 'wirtschaft',
        link_text_en: 'economy',
        link_url: 'https://foo.bar',
        link_url_en: 'https://foo.bar',
        name_en: 'economy',
    },
};

const mockDegreeTerm: WpTerm<{
    name_en: string;
    abbreviation: DegreeAbbreviationGerman;
    abbreviation_en: string;
}> = {
    ...mockTerm,
    meta: {
        name_en: 'bachelor',
        abbreviation: 'BA',
        abbreviation_en: 'BA',
    },
};

describe('Transform term to multilingual string', () => {
    it('should transform term to valid multilingual string', () => {
        const result = transformTermToMultilingualString(mockTerm);

        expect(result.de).toBe(mockTerm.name);
        expect(result.en).toBe(mockTerm.meta.name_en);
    });
});

describe('Transform term to multilingual link', () => {
    it('should transform term to valid multilingual link', () => {
        const result = transformTermToMultilingualLink(mockTerm2);

        expect(result.id).toBe(propertyId('term', 10));
        expect(result.name.de).toBe(mockTerm2.name);
        expect(result.name.en).toBe(mockTerm2.meta.name_en);
        expect(result.link_text.de).toBe(mockTerm2.meta.link_text);
        expect(result.link_text.en).toBe(mockTerm2.meta.link_text_en);
        expect(result.link_url.de).toBe(mockTerm2.meta.link_url);
        expect(result.link_url.en).toBe(mockTerm2.meta.link_url_en);
    });
});

describe('Transform term to degree', () => {
    it('should transform term to valid degree', () => {
        const result = transformTermToDegree(mockDegreeTerm);

        expect(result.id).toBe(propertyId('term', 10));
        expect(result.name.de).toBe(mockDegreeTerm.name);
        expect(result.name.en).toBe(mockDegreeTerm.meta.name_en);
        expect(result.abbreviation.de).toBe(mockDegreeTerm.meta.abbreviation);
        expect(result.abbreviation.en).toBe(mockDegreeTerm.meta.abbreviation_en);
    });
});
