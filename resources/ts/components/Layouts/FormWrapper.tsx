import React, { HTMLAttributes, PropsWithChildren } from 'react';

import { StyledFormWrapper } from './style-definitions';

const FormWrapper: React.FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
    children,
    ...others
}) => {
    return (
        <StyledFormWrapper wrap gap={0} align="flex-start" {...others}>
            {children}
        </StyledFormWrapper>
    );
};

export default FormWrapper;
