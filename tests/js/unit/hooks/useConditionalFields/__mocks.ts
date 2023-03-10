import useDegreeProgramProperty from 'hooks/useDegreeProgramProperty';

import { Degree, DegreeProgramData } from 'defs';

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

export function mockDegreeAndBachelorOrTeachingAdmissionRequirements(
    degree?: Degree,
    bachelorOrTeachingAdmissionRequirement?: DegreeProgramData['admission_requirements']['bachelor_or_teaching_degree'],
) {
    mockUseDegreeProgramProperty.mockImplementation((path) => {
        if (path === 'degree') {
            return [degree, () => {}];
        }

        if (path === 'admission_requirements.bachelor_or_teaching_degree') {
            return [bachelorOrTeachingAdmissionRequirement, () => {}];
        }

        return [undefined, () => {}];
    });
}
