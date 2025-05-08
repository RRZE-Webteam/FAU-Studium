import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
	label: ReactNode;
	help?: ReactNode;
}

const StyledLabel = styled.span`
	display: block;
`;

const StyledHelpText = styled.p`
	margin: 0;
	margin-top: 4px;
	font-size: 12px;
	font-style: normal;
	font-weight: normal;
	color: rgb( 117, 117, 117 );
`;

const FormFieldLabel = ( { label, help = undefined }: Props ) => {
	return (
		<>
			<StyledLabel>{ label }</StyledLabel>
			{ !! help && <StyledHelpText>{ help }</StyledHelpText> }
		</>
	);
};

export default FormFieldLabel;
