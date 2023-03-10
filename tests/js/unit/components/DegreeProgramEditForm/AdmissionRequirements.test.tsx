import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react';

import AdmissionRequirements from 'components/DegreeProgramEditForm/AdmissionRequirements';
import * as useConditionalFields from 'hooks/useConditionalFields';

jest.mock('hooks/useConditionalFields', () => {
    const conditionalHooks = jest.requireActual('hooks/useConditionalFields');
    return Object.keys(conditionalHooks).reduce(
        (object, key) => ({ ...object, [key]: jest.fn(() => false) }),
        {},
    );
});

jest.mock(
    'components/TermSelector',
    // eslint-disable-next-line react/prop-types
    jest.fn(() =>
        jest.fn(({ label }) => (
            <form>
                <label htmlFor="foo">
                    <span>{label}</span>
                    <input aria-labelledby="foo" />
                </label>
            </form>
        )),
    ),
);
jest.mock('components/DegreeProgramEditForm/MultilingualContainer', () => () => <></>);
jest.mock('components/ContentField', () => () => <></>);
jest.mock('contexts/DegreeProgramEditFormProvider', () => ({
    useEditDegreeProgram: () => ({
        values: {
            admission_requirements: {
                bachelor_or_teaching_degree: {
                    id: '',
                },
                teaching_degree_higher_semester: {
                    id: '',
                },
                master: {
                    id: '',
                },
            },
            content_related_master_requirements: {
                id: '',
                de: '',
                en: '',
            },
            language_skills: {
                id: '',
                de: '',
                en: '',
            },
            details_and_notes: {
                id: '',
                de: '',
                en: '',
            },
            german_language_skills_for_international_students: {
                id: '',
            },
            language_skills_humanities_faculty: '',
            application_deadline_winter_semester: '',
        },
        handleChange: () => {},
    }),
}));

describe('Admission requirement fields', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render', () => {
        render(<AdmissionRequirements />);

        expect(screen.getByText('Für Bachelor/Lehramt/Master')).toBeInTheDocument();
    });

    it('should not include conditional fields by default', () => {
        render(<AdmissionRequirements />);

        expect(screen.queryByText(/Bachelor\/Lehramt[^/]/i)).toBeNull();
        expect(
            screen.queryByText(/Admission requirements for Bachelor's\/teaching degrees/i),
        ).toBeNull();
        expect(
            screen.queryByText(
                /Admission requirements for entering a teaching degree at a higher semester/i,
            ),
        ).toBeNull();
        expect(screen.queryByText(/^Admission requirements for Master's degree/i)).toBeNull();
        expect(screen.queryByText(/Application deadline summer semester/i)).toBeNull();
        expect(
            screen.queryByText(
                /Language skills for Faculty of Humanities, Social Sciences, and Theology only/i,
            ),
        ).toBeNull();
    });

    it('should include conditional fields when conditions met', () => {
        Object.keys(useConditionalFields).forEach((hookName) => {
            if (hookName === 'default') {
                return;
            }

            jest.spyOn(
                useConditionalFields,
                hookName as keyof typeof useConditionalFields,
            ).mockReturnValue(true);
        });

        render(<AdmissionRequirements />);

        expect(
            screen.queryByText(/Admission requirements for Bachelor's\/teaching degrees/i),
        ).toBeInTheDocument();
        expect(
            screen.queryByText(
                /Admission requirements for entering a teaching degree at a higher semester/i,
            ),
        ).toBeInTheDocument();
        expect(
            screen.queryByText(/^Admission requirements for Master's degree/i),
        ).toBeInTheDocument();
        expect(screen.queryByText(/Application deadline summer semester/i)).toBeInTheDocument();
        expect(
            screen.queryByText(
                /Language skills for Faculty of Humanities, Social Sciences, and Theology only/i,
            ),
        ).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const test = renderer.create(<AdmissionRequirements />).toJSON();

        expect(test).toMatchSnapshot();
    });
});
