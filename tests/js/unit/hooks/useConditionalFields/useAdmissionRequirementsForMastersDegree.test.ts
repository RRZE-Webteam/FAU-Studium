import { renderHook } from '@testing-library/react-hooks';
import { useAdmissionRequirementsForMastersDegree } from 'hooks/useConditionalFields';

import { mockBachelorDegree, mockMastersDegree } from '../../../__mocks__/degrees';
import { mockUseDegreeProgramProperty } from './__mocks';

jest.mock('hooks/useDegreeProgramProperty');

describe('useAdmissionRequirementsForMastersDegree', () => {
    it('should return false if degree is undefined', () => {
        mockUseDegreeProgramProperty.mockReturnValue([undefined, () => {}]);
        const { result } = renderHook(() => useAdmissionRequirementsForMastersDegree());
        expect(result.current).toBe(false);
    });

    it('should return false if degree is not masters', () => {
        mockUseDegreeProgramProperty.mockReturnValue([mockBachelorDegree, () => {}]);
        const { result } = renderHook(() => useAdmissionRequirementsForMastersDegree());
        expect(result.current).toBe(false);
    });

    it('should return true if degree is masters', () => {
        mockUseDegreeProgramProperty.mockReturnValue([mockMastersDegree, () => {}]);
        const { result } = renderHook(() => useAdmissionRequirementsForMastersDegree());
        expect(result.current).toBe(true);
    });
});
