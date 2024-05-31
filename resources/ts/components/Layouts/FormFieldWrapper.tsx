import React, { PropsWithChildren } from 'react';

import { FormFieldWrapperProps } from './defs';
import { StyledFormFieldWrapper } from './style-definitions';

const FormFieldWrapper: React.FC<
	PropsWithChildren< FormFieldWrapperProps >
> = ( { children, fill = 'full', ...others } ) => {
	return (
		<StyledFormFieldWrapper
			isBlock={ fill === 'auto' || undefined }
			fill={ fill }
			{ ...others }
		>
			{ children }
		</StyledFormFieldWrapper>
	);
};

export { FormFieldWrapperProps };

export default FormFieldWrapper;
