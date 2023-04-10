import {
    transformedErrorMessages,
    transformedErrorMessagesBasedOnErrorCode,
} from './transformedErrorMessages';

import { DegreeProgramDataPaths, FormValidationError } from 'defs';

export function transformBasedOnErrorCode(
    fieldId: DegreeProgramDataPaths,
    error: FormValidationError,
): string {
    let { errorCode } = error;

    if (fieldId.match(/\.en$/i)) {
        errorCode += '_en';
    }

    return transformedErrorMessagesBasedOnErrorCode[errorCode] ?? error.message;
}

export function transformErrorMessage(
    fieldId: DegreeProgramDataPaths,
    error: FormValidationError,
): string {
    return transformedErrorMessages[fieldId] ?? transformBasedOnErrorCode(fieldId, error);
}
