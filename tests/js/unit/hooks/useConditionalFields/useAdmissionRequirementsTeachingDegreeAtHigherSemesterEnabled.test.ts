import { renderHook } from '@testing-library/react-hooks';
import { useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled } from 'hooks/useConditionalFields';

import {
    mockAbcAdmissionRequirement,
    mockFreiAdmissionRequirement,
} from '../../../__mocks__/admission-requirements';
import { mockUseDegreeProgramProperty } from './__mocks';

jest.mock('hooks/useDegreeProgramProperty');

describe('useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled', () => {
    it('should return false if admission_requirements.bachelor_or_teaching_degree is undefined', () => {
        mockUseDegreeProgramProperty.mockReturnValue([undefined, () => {}]);
        const { result } = renderHook(() =>
            useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled(),
        );
        expect(result.current).toBe(false);
    });

    it('should return true if admission_requirements.bachelor_or_teaching_degree is not frei', () => {
        mockUseDegreeProgramProperty.mockReturnValue([mockAbcAdmissionRequirement, () => {}]);
        const { result } = renderHook(() =>
            useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled(),
        );
        expect(result.current).toBe(true);
    });

    it('should return false if admission_requirements.bachelor_or_teaching_degree is frei', () => {
        mockUseDegreeProgramProperty.mockReturnValue([mockFreiAdmissionRequirement, () => {}]);
        const { result } = renderHook(() =>
            useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled(),
        );
        expect(result.current).toBe(false);
    });
});
