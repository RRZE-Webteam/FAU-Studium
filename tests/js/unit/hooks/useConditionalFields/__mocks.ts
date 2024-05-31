import useDegreeProgramProperty from '../../../../../resources/ts/hooks/useDegreeProgramProperty';
import * as useTaxonomyTerm from '../../../../../resources/ts/hooks/useTaxonomyTerm';

import { Degree, DegreeProgramData, WpTerm } from '../../../../../resources/ts/defs';

export const mockUseDegreeProgramProperty = useDegreeProgramProperty as jest.MockedFunction<
    typeof useDegreeProgramProperty
>;

const mockedFacultySlug = (name: string) => {
    if (name.match(/phil/i)) {
        return 'phil';
    }
    if (name.match(/nat/i)) {
        return 'nat';
    }

    return '';
};

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

    jest.spyOn(
        useTaxonomyTerm,
        'useFacultyTerms' as keyof typeof useTaxonomyTerm,
    ).mockImplementation(
        () =>
            faculty?.map((facultyItem) => {
                return { slug: mockedFacultySlug(facultyItem.name.de) } as WpTerm;
            }) ?? [],
    );
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
