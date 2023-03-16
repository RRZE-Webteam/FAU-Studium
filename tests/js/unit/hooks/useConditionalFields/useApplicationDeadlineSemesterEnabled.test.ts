import { renderHook } from '@testing-library/react-hooks';

import {
    useApplicationDeadlineSummerSemesterEnabled,
    useApplicationDeadlineWinterSemesterEnabled,
} from 'hooks/useConditionalFields';

import {
    mockAbcSemester,
    mockSummerSemester,
    mockWinterSemester,
} from '../../../__mocks__/semesters';
import { mockUseDegreeProgramProperty } from './__mocks';

jest.mock('hooks/useDegreeProgramProperty');

describe('useApplicationDeadlineSummerSemesterEnabled', () => {
    test.each([
        [undefined, false],
        [mockAbcSemester, false],
        [mockSummerSemester, true],
    ])('given semester %j, returns %p', (semester, expected) => {
        mockUseDegreeProgramProperty.mockReturnValue([semester, () => {}]);
        const { result } = renderHook(() => useApplicationDeadlineSummerSemesterEnabled());
        expect(result.current).toBe(expected);
    });
});

describe('useApplicationDeadlineWinterSemesterEnabled', () => {
    test.each([
        [undefined, false],
        [mockAbcSemester, false],
        [mockWinterSemester, true],
    ])('given semester %j, returns %p', (semester, expected) => {
        mockUseDegreeProgramProperty.mockReturnValue([semester, () => {}]);
        const { result } = renderHook(() => useApplicationDeadlineWinterSemesterEnabled());
        expect(result.current).toBe(expected);
    });
});
