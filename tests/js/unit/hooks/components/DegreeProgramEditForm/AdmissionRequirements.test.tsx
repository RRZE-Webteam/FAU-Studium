import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import AdmissionRequirements from 'components/DegreeProgramEditForm/AdmissionRequirements';
import * as useConditionalFields from 'hooks/useConditionalFields';

import '@testing-library/jest-dom';

jest.mock('hooks/useConditionalFields', () => {
    const conditionalHooks = jest.requireActual('hooks/useConditionalFields');
    return Object.keys(conditionalHooks).reduce(
        (object, key) => ({ ...object, [key]: jest.fn(() => false) }),
        {},
    );
});

jest.mock('components/TermSelector', () => () => <></>);
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

        expect(screen.getByText('Bachelor/Lehramt')).toBeInTheDocument();
        expect(screen.getByText('Für Bachelor/Lehramt/Master')).toBeInTheDocument();
    });

    it('should not include conditional fields by default', () => {
        render(<AdmissionRequirements />);

        expect(screen.queryByTestId('bacholar-teaching-admission-requirement')).toBeNull();
        expect(screen.queryByTestId('teaching-higher-semester-admission-requirement')).toBeNull();
        expect(screen.queryByTestId('masters-admission-requirement')).toBeNull();
        expect(screen.queryByTestId('application-deadline-summer')).toBeNull();
        expect(screen.queryByTestId('language-skills-humanities-faculty')).toBeNull();
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

        expect(screen.queryByTestId('bacholar-teaching-admission-requirement')).toBeInTheDocument();
        expect(
            screen.queryByTestId('teaching-higher-semester-admission-requirement'),
        ).toBeInTheDocument();
        expect(screen.queryByTestId('masters-admission-requirement')).toBeInTheDocument();
        expect(screen.queryByTestId('application-deadline-summer')).toBeInTheDocument();
        expect(screen.queryByTestId('language-skills-humanities-faculty')).toBeInTheDocument();
    });
});
