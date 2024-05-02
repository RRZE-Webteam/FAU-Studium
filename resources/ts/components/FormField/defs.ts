import { ReactNode } from 'react';

import { FormFieldWrapperProps } from '../Layouts/defs';

import { DegreeProgramDataPaths } from '../../defs';

export interface FormFieldProps {
	name: DegreeProgramDataPaths;
	fill?: FormFieldWrapperProps[ 'fill' ];
	children: ReactNode;
	label?: string;
	help?: string;
	displayError?: boolean;
	wrapBaseControl?: boolean;
	required?: boolean;
}
