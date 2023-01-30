import { renderHook } from '@testing-library/react-hooks';

import { useDegreeFeesEnabled } from 'hooks/useConditionalFields';

import { mockUseDegreeProgramProperty } from './__mocks';

jest.mock('hooks/useDegreeProgramProperty');

describe('useDegreeFeesEnabled', () => {
    test.each([
        [undefined, false],
        [false, false],
        [true, true],
    ])('given fee_required %p, returns %p', (fee_required, expected) => {
        mockUseDegreeProgramProperty.mockReturnValue([fee_required, () => {}]);
        const { result } = renderHook(() => useDegreeFeesEnabled());
        expect(result.current).toBe(expected);
    });
});
