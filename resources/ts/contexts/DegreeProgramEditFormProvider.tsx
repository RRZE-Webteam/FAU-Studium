import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import produce from 'immer';
import { set } from 'lodash';

import { useEntityProp } from '@wordpress/core-data';

import useDegreeProgramFeaturedImage from 'hooks/useDegreeProgramFeaturedImage';
import serverData from 'util/serverData';

import { DegreeProgramData, DegreeProgramDataPaths } from 'defs';

interface ContextValue {
    values: DegreeProgramData;
    handleChange: <Value>(path: DegreeProgramDataPaths, val: Value) => void;
    errors: Partial<Record<keyof DegreeProgramData, string>>;
    addError: (field: keyof DegreeProgramData, errorMessage: string) => void;
    removeError: (field: keyof DegreeProgramData) => void;
}

export const DegreeProgramEditFormContext = createContext<ContextValue>({} as ContextValue);

interface Props {
    children: ReactNode;
}

const DegreeProgramEditFormProvider = ({ children }: Props) => {
    const [errors, setErrors] = useState<Partial<Record<keyof DegreeProgramData, string>>>({});
    const [degreeProgramData, setDegreeProgramData] = useEntityProp(
        'postType',
        serverData().postType,
        serverData().propertyName,
    ) as [DegreeProgramData, (val: DegreeProgramData) => void, unknown];
    const [,] = useDegreeProgramFeaturedImage();

    const handleChange = useCallback(
        <Value,>(path: DegreeProgramDataPaths, val: Value) => {
            setDegreeProgramData(produce(degreeProgramData, (draft) => set(draft, path, val)));
        },
        [setDegreeProgramData, degreeProgramData],
    );

    const addError = useCallback((field: keyof DegreeProgramData, errorMessage: string) => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
    }, []);

    const removeError = useCallback((field: keyof DegreeProgramData) => {
        setErrors((prevErrors) =>
            produce(prevErrors, (draft) => {
                delete draft[field];
            }),
        );
    }, []);

    return (
        <DegreeProgramEditFormContext.Provider
            value={{
                handleChange,
                values: degreeProgramData,
                errors,
                addError,
                removeError,
            }}
        >
            {children}
        </DegreeProgramEditFormContext.Provider>
    );
};

export const useEditDegreeProgram = () => useContext(DegreeProgramEditFormContext);

export default DegreeProgramEditFormProvider;
