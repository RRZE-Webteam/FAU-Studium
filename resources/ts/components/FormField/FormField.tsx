import React, { createContext, PropsWithChildren, useContext } from 'react';

import { BaseControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import FormFieldLabel from 'components/Layouts/FormFieldLabel';
import FormFieldWrapper from 'components/Layouts/FormFieldWrapper';
import { useValidation } from 'contexts/DegreeProgramValidationProvider';

import { FormFieldProps } from './defs';
import FieldError from './FieldError';

const FormFieldContext = createContext({ required: false });
export const useFieldContext = () => useContext(FormFieldContext);

const FormField: React.FC<PropsWithChildren<FormFieldProps>> = ({
    name,
    fill,
    children,
    label,
    help,
    wrapBaseControl = true,
    displayError = true,
    required = false,
    ...others
}) => {
    const { getFieldErrors } = useValidation();

    const suffixedLabel = required
        ? label
        : `${label} ${_x(
              '(optional)',
              'backoffice: degree program edit form',
              'fau-degree-program',
          )}`;

    return (
        <FormFieldWrapper fill={fill} {...others}>
            <FormFieldContext.Provider value={{ required }}>
                {wrapBaseControl ? (
                    <BaseControl label={<FormFieldLabel label={suffixedLabel} help={help} />}>
                        {children}
                    </BaseControl>
                ) : (
                    <>{children}</>
                )}
            </FormFieldContext.Provider>

            {displayError && <FieldError errors={getFieldErrors(name)} />}
        </FormFieldWrapper>
    );
};

export default FormField;
