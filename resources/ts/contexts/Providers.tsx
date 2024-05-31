import React, { ReactNode } from 'react';

import DegreeProgramEditFormProvider from './DegreeProgramEditFormProvider';
import DegreeProgramValidationProvider from './DegreeProgramValidationProvider';

interface Props {
	children: ReactNode;
}

const Providers = ( { children }: Props ) => {
	return (
		<DegreeProgramValidationProvider>
			<DegreeProgramEditFormProvider>
				{ children }
			</DegreeProgramEditFormProvider>
		</DegreeProgramValidationProvider>
	);
};

export default Providers;
