import React from 'react';
import styled from 'styled-components';

import { useEditDegreeProgram } from '../../contexts/DegreeProgramEditFormProvider';

const StyledHeading = styled.h1`
    font-size: 1.5rem;
`;

const FormHeading = () => {
    const { values } = useEditDegreeProgram();

    return (
        <StyledHeading>
            {values.title.de} <br />
            <small>{values.title.en}</small>
        </StyledHeading>
    );
};

export default FormHeading;
