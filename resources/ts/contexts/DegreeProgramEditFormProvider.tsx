import React, { createContext, ReactNode, useCallback, useContext } from 'react';
import produce from 'immer';
import { set } from 'lodash';

import { useEntityProp } from '@wordpress/core-data';

import serverData from 'util/serverData';

import { useValidation } from './DegreeProgramValidationProvider';

import { DegreeProgramData, DegreeProgramDataPaths } from 'defs';

interface ContextValue {
    values: DegreeProgramData;
    handleChange: <Value>(path: DegreeProgramDataPaths, val: Value) => void;
}

export const DegreeProgramEditFormContext = createContext<ContextValue>({} as ContextValue);

interface Props {
    children: ReactNode;
}

const DegreeProgramEditFormProvider = ({ children }: Props) => {
    const [degreeProgramData, setDegreeProgramData] = useEntityProp(
        'postType',
        serverData().postType,
        serverData().propertyName,
    ) as [DegreeProgramData, (val: DegreeProgramData) => void, unknown];
    const { removeError } = useValidation();

    const handleChange = useCallback(
        <Value,>(path: DegreeProgramDataPaths, val: Value) => {
            removeError(path);
            setDegreeProgramData(produce(degreeProgramData, (draft) => set(draft, path, val)));
        },
        [setDegreeProgramData, degreeProgramData, removeError],
    );

    return (
        <DegreeProgramEditFormContext.Provider
            value={{
                handleChange,
                values: degreeProgramData,
            }}
        >
            {children}
        </DegreeProgramEditFormContext.Provider>
    );
};

export const useEditDegreeProgram = () => useContext(DegreeProgramEditFormContext);

export default DegreeProgramEditFormProvider;
