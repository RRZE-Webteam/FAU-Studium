import React from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { FormValidationErrors } from 'defs';

interface Props {
    errors: FormValidationErrors;
}

const StyledErrorWrapper = styled.p`
    color: #cc1818;
    font-size: 12px;
    margin: 5px 0 0;
    font-family: var(--default-font);
`;

const FieldError = ({ errors }: Props) => {
    if (!errors.size) {
        return null;
    }

    return (
        <>
            {Array.from(errors).map(([, error]) => (
                <StyledErrorWrapper key={nanoid()}>{error.message}</StyledErrorWrapper>
            ))}
        </>
    );
};

export default FieldError;
