import { renderHook } from '@testing-library/react-hooks';

import { useAdmissionRequirementsForBachelorAndTeachingDegreesEnable } from '../../../../../resources/ts/hooks/useConditionalFields';

import {
    mockBachelorDegree,
    mockMastersDegree,
    mockTeachingDegree,
} from '../../../__mocks__/degrees';
import { mockUseDegreeProgramProperty } from './__mocks';

jest.mock('hooks/useDegreeProgramProperty');

describe('useAdmissionRequirementsForBachelorAndTeachingDegreesEnable', () => {
    it('should return false if degree is undefined', () => {
        mockUseDegreeProgramProperty.mockReturnValue([undefined, () => {}]);
        const { result } = renderHook(() =>
            useAdmissionRequirementsForBachelorAndTeachingDegreesEnable(),
        );
        expect(result.current).toBe(false);
    });

    it('should return true if degree is bachelor', () => {
        mockUseDegreeProgramProperty.mockReturnValue([mockBachelorDegree, () => {}]);
        const { result } = renderHook(() =>
            useAdmissionRequirementsForBachelorAndTeachingDegreesEnable(),
        );
        expect(result.current).toBe(true);
    });

    it('should return true if degree is teaching degree', () => {
        mockUseDegreeProgramProperty.mockReturnValue([mockTeachingDegree, () => {}]);
        const { result } = renderHook(() =>
            useAdmissionRequirementsForBachelorAndTeachingDegreesEnable(),
        );
        expect(result.current).toBe(true);
    });

    it('should return false if degree is anything other than teaching degree and bachelor', () => {
        mockUseDegreeProgramProperty.mockReturnValue([mockMastersDegree, () => {}]);
        const { result } = renderHook(() =>
            useAdmissionRequirementsForBachelorAndTeachingDegreesEnable(),
        );

        expect(result.current).toBe(false);
    });
});
