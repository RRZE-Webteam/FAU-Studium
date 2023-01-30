import { renderHook } from '@testing-library/react-hooks';

import { useApplicationDeadlineSummerSemesterEnabled } from 'hooks/useConditionalFields';

import { mockAbcSemester, mockSummerSemester } from '../../../__mocks__/semesters';
import { mockUseDegreeProgramProperty } from './__mocks';

jest.mock('hooks/useDegreeProgramProperty');

describe('useApplicationDeadlineSummerSemesterEnabled', () => {
    it('should return false if semester is undefined', () => {
        mockUseDegreeProgramProperty.mockReturnValue([undefined, () => {}]);
        const { result } = renderHook(() => useApplicationDeadlineSummerSemesterEnabled());
        expect(result.current).toBe(false);
    });

    it('should return false if semester is not summer semester', () => {
        mockUseDegreeProgramProperty.mockReturnValue([mockAbcSemester, () => {}]);
        const { result } = renderHook(() => useApplicationDeadlineSummerSemesterEnabled());
        expect(result.current).toBe(false);
    });

    it('should return true if semester is summer semester', () => {
        mockUseDegreeProgramProperty.mockReturnValue([mockSummerSemester, () => {}]);
        const { result } = renderHook(() => useApplicationDeadlineSummerSemesterEnabled());
        expect(result.current).toBe(true);
    });
});
