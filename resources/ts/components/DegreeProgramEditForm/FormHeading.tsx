import React from 'react';

import { useEditDegreeProgram } from '../../contexts/DegreeProgramEditFormProvider';

const FormHeading = () => {
    const { values } = useEditDegreeProgram();

    return (
        <h1>
            {values.title.de}
            {!!values.title.en && ` (${values.title.en})`}
        </h1>
    );
};

export default FormHeading;
