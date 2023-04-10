import React, { PropsWithChildren } from 'react';

import { BaseControl } from '@wordpress/components';

import FormFieldLabel from 'components/Layouts/FormFieldLabel';
import FormFieldWrapper from 'components/Layouts/FormFieldWrapper';
import { useValidation } from 'contexts/DegreeProgramValidationProvider';

import { FormFieldProps } from './defs';
import FieldError from './FieldError';

const FormField: React.FC<PropsWithChildren<FormFieldProps>> = ({
    name,
    fill,
    children,
    label,
    help,
    wrapBaseControl = true,
    displayError = true,
    ...others
}) => {
    const { getFieldErrors } = useValidation();

    return (
        <FormFieldWrapper fill={fill} {...others}>
            {wrapBaseControl ? (
                <BaseControl label={<FormFieldLabel label={label} help={help} />}>
                    {children}
                </BaseControl>
            ) : (
                <>{children}</>
            )}

            {displayError && <FieldError errors={getFieldErrors(name)} />}
        </FormFieldWrapper>
    );
};

export default FormField;
