import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

import Content from 'components/DegreeProgramEditForm/Content';

import { ContentItem } from 'defs';

const mockContentItem = (label: string): ContentItem => ({
    title: {
        id: '',
        de: label,
        en: label,
    },
    description: {
        id: '',
        de: label,
        en: label,
    },
});

jest.mock('components/DegreeProgramCombinations', () => () => <></>);
jest.mock('contexts/DegreeProgramEditFormProvider', () => ({
    useEditDegreeProgram: () => ({
        values: {
            content: {
                about: mockContentItem('about'),
                structure: mockContentItem('structure'),
                specializations: mockContentItem('specializations'),
                qualities_and_skills: mockContentItem('qualities_and_skills'),
                why_should_study: mockContentItem('why_should_study'),
                career_prospects: mockContentItem('career_prospects'),
                special_features: mockContentItem('special_features'),
                testimonials: mockContentItem('testimonials'),
            },
        },
        handleChange: () => {},
    }),
}));
jest.mock(
    '@wordpress/components',
    jest.fn(() => ({
        BaseControl: jest.fn(({ label, help }) => (
            <>
                <span>{help}</span>
                <span>{label}</span>
            </>
        )),
        Panel: jest.fn(({ children }) => <>{children}</>),
        PanelBody: jest.fn(({ children }) => <>{children}</>),
    })),
);

describe('Content fields', () => {
    afterEach(() => {
        cleanup();
    });

    it('should match snapshot', () => {
        const test = renderer.create(<Content />).toJSON();

        expect(test).toMatchSnapshot();
    });
});
