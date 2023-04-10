import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';

import { store as coreStore } from '@wordpress/core-data';
import { select, subscribe, useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

import { transformErrorMessage } from 'util/errorTransforms';
import serverData from 'util/serverData';

import {
    DegreeProgramDataPaths,
    EditorStoreSelectors,
    FormValidationError,
    FormValidationErrors,
    MapSelect,
} from 'defs';

interface ContextValue {
    errors: FormValidationErrors;
    getFieldErrors: (fieldId: DegreeProgramDataPaths) => FormValidationErrors;
    removeError(fieldId: DegreeProgramDataPaths): void;
    fieldHasErrors(fieldId: DegreeProgramDataPaths): boolean;
}

interface Props {
    children: ReactNode;
}

type ServerError = {
    code: string;
    data: Record<string, unknown>;
};

export const DegreeProgramValidationContext = createContext<ContextValue>({} as ContextValue);

const transformServerError = (serverError: ServerError): FormValidationErrors => {
    const errors: FormValidationErrors = new Map();

    if (serverError.code !== 'rest_invalid_param') {
        return errors;
    }

    const errorDetails:
        | Record<DegreeProgramDataPaths, { message: string; code: string }>
        | undefined = serverError.data?.details?.[serverData().propertyName]?.data?.params;

    if (typeof errorDetails === 'undefined') {
        return errors;
    }

    Object.entries(errorDetails).forEach((detail) => {
        const error: FormValidationError = {
            errorCode: detail[1].code || '',
            message: detail[1].message,
        };

        errors.set(detail[0] as DegreeProgramDataPaths, {
            ...error,
            message: transformErrorMessage(detail[0] as DegreeProgramDataPaths, error),
        });
    });

    return errors;
};

const DegreeProgramValidationProvider = ({ children }: Props) => {
    const [errors, setErrors] = useState<FormValidationErrors>(new Map());
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const postId = useSelect<MapSelect<EditorStoreSelectors>>((selectCb) => {
        const { getCurrentPostId } = selectCb(editorStore);

        return getCurrentPostId();
    }, []);

    /**
     * Get an array of errors associated with a field
     * For example If you pass `title` you'll also get errors
     * with `title.en` and `title.de` and any other subfield error
     */
    const getFieldErrors = (fieldId: DegreeProgramDataPaths): FormValidationErrors => {
        return new Map(
            Array.from(errors).filter(([key]) => {
                const isOnSameRootFieldName = key.split('.')[0] === fieldId.split('.')[0];

                return isOnSameRootFieldName && key.substring(0, fieldId.length) === fieldId;
            }),
        );
    };

    const fieldHasErrors = useCallback(
        (fieldId: DegreeProgramDataPaths) => {
            const fieldErrors = getFieldErrors(fieldId);

            return fieldErrors.size > 0;
        },
        [getFieldErrors],
    );

    const removeError = (fieldId: DegreeProgramDataPaths) => {
        setErrors((prevErrors) => {
            const newErrors = new Map(prevErrors);
            newErrors.delete(fieldId);
            newErrors.delete(`${fieldId}.id` as DegreeProgramDataPaths);
            return newErrors;
        });
    };

    subscribe(() => {
        const { isSavingPost, isAutosavingPost } = select(editorStore);
        setIsSaving(isSavingPost() && !isAutosavingPost());
    });

    // Update server errors when post is saved.
    useEffect(() => {
        if (isSaving) {
            return;
        }

        if (!postId) {
            return;
        }

        const serverErrors = select(coreStore).getLastEntitySaveError(
            'postType',
            serverData().postType,
            postId,
        );

        if (!serverErrors) {
            return;
        }

        setErrors(new Map([...transformServerError(serverErrors)]));
    }, [isSaving, postId]);
    return (
        <DegreeProgramValidationContext.Provider
            value={{ errors, getFieldErrors, removeError, fieldHasErrors }}
        >
            {children}
        </DegreeProgramValidationContext.Provider>
    );
};

export const useValidation = () => useContext(DegreeProgramValidationContext);

export default DegreeProgramValidationProvider;
