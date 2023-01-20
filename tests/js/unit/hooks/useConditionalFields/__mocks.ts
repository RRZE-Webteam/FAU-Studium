import { Degree, DegreeProgramData } from 'defs';
import useDegreeProgramProperty from 'hooks/useDegreeProgramProperty';

export const mockUseDegreeProgramProperty = useDegreeProgramProperty as jest.MockedFunction<
    typeof useDegreeProgramProperty
>;

export function mockFacultyAndDegreeProgram(
    faculty?: DegreeProgramData['faculty'],
    degree?: Degree,
) {
    mockUseDegreeProgramProperty.mockImplementation((path) => {
        if (path === 'faculty') {
            return [faculty, () => {}];
        }

        if (path === 'degree') {
            return [degree, () => {}];
        }

        return [undefined, () => {}];
    });
}
