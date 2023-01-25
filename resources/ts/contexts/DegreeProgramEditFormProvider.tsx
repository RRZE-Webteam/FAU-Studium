/* eslint-disable no-param-reassign */
import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { DegreeProgramData, DegreeProgramDataPaths } from 'defs';
import useDegreeProgramFeaturedImage from 'hooks/useDegreeProgramFeaturedImage';
import produce from 'immer';
import { set } from 'lodash';
import serverData from 'util/serverData';

import { useEntityProp } from '@wordpress/core-data';

interface ContextValue {
    values: DegreeProgramData;
    handleChange: <Value extends unknown>(path: DegreeProgramDataPaths, val: Value) => void;
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
    ) as [DegreeProgramData, (val: DegreeProgramData) => void, any];
    const [,] = useDegreeProgramFeaturedImage();

    const handleChange = useCallback(
        <Value extends unknown>(path: DegreeProgramDataPaths, val: Value) => {
            setDegreeProgramData(produce(degreeProgramData, (draft) => set(draft, path, val)));
        },
        [setDegreeProgramData, degreeProgramData],
    );
    const addError = useCallback(
        (field: keyof DegreeProgramData, errorMessage: string) => {
            setErrors({ ...errors, [field]: errorMessage });
        },
        [setErrors],
    );
    const removeError = useCallback(
        (field: keyof DegreeProgramData) => {
            setErrors(
                produce(errors, (draft) => {
                    delete draft[field];
                }),
            );
        },
        [setErrors],
    );

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
