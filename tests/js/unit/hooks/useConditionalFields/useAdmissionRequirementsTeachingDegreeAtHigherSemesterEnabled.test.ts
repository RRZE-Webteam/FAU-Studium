import { renderHook } from '@testing-library/react-hooks';

import { useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled } from '../../../../../resources/ts/hooks/useConditionalFields';

import {
    mockAbcAdmissionRequirement,
    mockFreiAdmissionRequirement,
} from '../../../__mocks__/admission-requirements';
import { mockBachelorDegree } from '../../../__mocks__/degrees';
import { mockDegreeAndBachelorOrTeachingAdmissionRequirements } from './__mocks';

jest.mock('hooks/useDegreeProgramProperty');

describe('useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled', () => {
    it('should return false if degree is undefined and admission_requirements.bachelor_or_teaching_degree is undefined', () => {
        mockDegreeAndBachelorOrTeachingAdmissionRequirements(undefined, undefined);

        const { result } = renderHook(() =>
            useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled(),
        );
        expect(result.current).toBe(false);
    });

    it('should return true if admission_requirements.bachelor_or_teaching_degree is not frei', () => {
        mockDegreeAndBachelorOrTeachingAdmissionRequirements(
            mockBachelorDegree,
            mockAbcAdmissionRequirement,
        );

        const { result } = renderHook(() =>
            useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled(),
        );
        expect(result.current).toBe(true);
    });

    it('should return false if admission_requirements.bachelor_or_teaching_degree is frei', () => {
        mockDegreeAndBachelorOrTeachingAdmissionRequirements(
            mockBachelorDegree,
            mockFreiAdmissionRequirement,
        );

        const { result } = renderHook(() =>
            useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled(),
        );
        expect(result.current).toBe(false);
    });
});
