import { DegreeProgramDataPaths } from './degree-program-data';

export interface FormValidationError {
	message: string;
	errorCode: string;
}

export type FormValidationErrors = Map<
	DegreeProgramDataPaths,
	FormValidationError
>;
