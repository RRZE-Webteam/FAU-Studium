import { renderHook } from '@testing-library/react-hooks';

import { useCombinationOfDegreeProgramEnabled } from 'hooks/useConditionalFields';

import { mockBachelorDegree, mockMastersDegree } from '../../../__mocks__/degrees';
import { mockAbcFaculty, mockNatFaculty, mockPhilFaculty } from '../../../__mocks__/faculties';
import { mockFacultyAndDegreeProgram } from './__mocks';

jest.mock('hooks/useDegreeProgramProperty');

describe('useCombinationOfDegreeProgramEnabled', () => {
    it('should return false if both faculty and degree are undefined', () => {
        mockFacultyAndDegreeProgram(undefined, undefined);
        const { result } = renderHook(() => useCombinationOfDegreeProgramEnabled());
        expect(result.current).toBe(false);
    });

    it('should return false if faculty is undefined', () => {
        mockFacultyAndDegreeProgram(undefined, mockBachelorDegree);
        const { result } = renderHook(() => useCombinationOfDegreeProgramEnabled());
        expect(result.current).toBe(false);
    });

    it('should return false if degree is undefined', () => {
        mockFacultyAndDegreeProgram(mockPhilFaculty, undefined);
        const { result } = renderHook(() => useCombinationOfDegreeProgramEnabled());
        expect(result.current).toBe(false);
    });

    it('should return true if faculty is Phil and degree is bachelor', () => {
        mockFacultyAndDegreeProgram(mockPhilFaculty, mockBachelorDegree);
        const { result } = renderHook(() => useCombinationOfDegreeProgramEnabled());
        expect(result.current).toBe(true);
    });

    it('should return true if faculty is Nat and degree is bachelor', () => {
        mockFacultyAndDegreeProgram(mockNatFaculty, mockBachelorDegree);
        const { result } = renderHook(() => useCombinationOfDegreeProgramEnabled());
        expect(result.current).toBe(true);
    });

    it('should return false if any other faculty is provided', () => {
        mockFacultyAndDegreeProgram(mockAbcFaculty, mockBachelorDegree);
        const { result } = renderHook(() => useCombinationOfDegreeProgramEnabled());
        expect(result.current).toBe(false);
    });

    it('should return false if any other degree is provided', () => {
        mockFacultyAndDegreeProgram(mockPhilFaculty, mockMastersDegree);
        const { result } = renderHook(() => useCombinationOfDegreeProgramEnabled());
        expect(result.current).toBe(false);
    });
});
