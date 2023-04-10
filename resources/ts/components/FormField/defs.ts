import { ReactNode } from 'react';

import { FormFieldWrapperProps } from 'components/Layouts/defs';

import { DegreeProgramDataPaths } from 'defs';

export interface FormFieldProps {
    name: DegreeProgramDataPaths;
    fill?: FormFieldWrapperProps['fill'];
    children: ReactNode;
    label?: string;
    help?: string;
    displayError?: boolean;
    wrapBaseControl?: boolean;
}
