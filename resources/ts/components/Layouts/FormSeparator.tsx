import React, { PropsWithChildren } from 'react';

import { StyledFormFieldWrapper } from './style-definitions';

const FormSeparator: React.FC<PropsWithChildren<unknown>> = () => {
    return (
        <StyledFormFieldWrapper isBlock={undefined} fill="full">
            <hr />
        </StyledFormFieldWrapper>
    );
};

export default FormSeparator;
