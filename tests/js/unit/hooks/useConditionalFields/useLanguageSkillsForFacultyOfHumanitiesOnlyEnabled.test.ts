import { renderHook } from '@testing-library/react-hooks';

import { useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled } from '../../../../../resources/ts/hooks/useConditionalFields';

import {
    mockBachelorDegree,
    mockMastersDegree,
    mockTeachingDegree,
} from '../../../__mocks__/degrees';
import { mockNatFaculty, mockPhilFaculty } from '../../../__mocks__/faculties';
import { mockFacultyAndDegreeProgram } from './__mocks';

jest.mock('hooks/useDegreeProgramProperty');

describe('useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled', () => {
    it('should return false if both degree and faculty are undefined', () => {
        mockFacultyAndDegreeProgram(undefined, undefined);
        const { result } = renderHook(() => useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled());
        expect(result.current).toBe(false);
    });

    it('should return false if faculty is undefined', () => {
        mockFacultyAndDegreeProgram(undefined, mockBachelorDegree);
        const { result } = renderHook(() => useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled());
        expect(result.current).toBe(false);
    });

    it('should return false if degree is undefined', () => {
        mockFacultyAndDegreeProgram(mockPhilFaculty, undefined);
        const { result } = renderHook(() => useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled());
        expect(result.current).toBe(false);
    });

    it('should return false if faculty is not Phil', () => {
        mockFacultyAndDegreeProgram(mockNatFaculty, mockBachelorDegree);
        const { result } = renderHook(() => useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled());
        expect(result.current).toBe(false);
    });

    it('should return false if degree is not bachelor or teaching degree', () => {
        mockFacultyAndDegreeProgram(mockPhilFaculty, mockMastersDegree);
        const { result } = renderHook(() => useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled());
        expect(result.current).toBe(false);
    });

    it('should return true if degree is bachelor and faculty is Phil', () => {
        mockFacultyAndDegreeProgram(mockPhilFaculty, mockBachelorDegree);
        const { result } = renderHook(() => useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled());
        expect(result.current).toBe(true);
    });

    it('should return true if degree is teaching degree and faculty is Phil', () => {
        mockFacultyAndDegreeProgram(mockPhilFaculty, mockTeachingDegree);
        const { result } = renderHook(() => useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled());
        expect(result.current).toBe(true);
    });
});
