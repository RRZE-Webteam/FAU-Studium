import produce, { Immutable } from 'immer';
import { get, set } from 'lodash';

import { useEntityProp } from '@wordpress/core-data';

import serverData from 'util/serverData';

import { DegreeProgramDataPaths } from '../defs';

/**
 * Hook that returns the value and a setter for the
 * specified property of the current DegreeProgramData.
 * Should be used only for single DegreeProgram edit screen.
 *
 * To make immutable changes easy, Immer library is used.
 *
 * @param path Path to DegreeProgramData value.
 * @typeParam Value Definition of returned DegreeProgramData property.
 * @returns An array where the first item is the property value, and the second is the setter.
 *
 * @example
 * ```
 * function MultilingualInput() {
 *     const [englishTitle, setEnglishTitle] = useDegreeProgramProperty<MultilingualString>('title.en');
 *     return <Input description="English title"
 *            value={englishTitle}
 *            onClick={setEnglishTitle} />
 * }
 * ```
 */
export default function useDegreeProgramProperty<Value>(
    path: DegreeProgramDataPaths,
): [Immutable<undefined | Value>, (value: Value) => void] {
    const [degreeProgramData, setDegreeProgramData] = useEntityProp(
        'postType',
        serverData().postType,
        serverData().propertyName,
    );

    return [
        get(degreeProgramData, path),
        (val: Value) =>
            setDegreeProgramData(
                produce<Value>(degreeProgramData, (draft) => set(draft, path, val)),
            ),
    ];
}
