import React from 'react';
import styled from 'styled-components';

import { useValidation } from '../../contexts/DegreeProgramValidationProvider';

import { FIELDS_BY_TABS } from './constants';

import { TabNames } from '../../defs';

const ErrorWrapper = styled.span`
	color: #cc1818;
`;

function useTabHasError( tabName: TabNames ) {
	const fields = FIELDS_BY_TABS[ tabName ] ?? [];
	const { fieldHasErrors } = useValidation();

	for ( let i = 0; i < fields.length; i += 1 ) {
		if ( fieldHasErrors( fields[ i ] ) ) {
			return true;
		}
	}

	return false;
}

const TabTitle = ( { name, title }: { name: TabNames; title: string } ) => {
	const hasErrors = useTabHasError( name );
	if ( ! hasErrors ) {
		return <>{ title }</>;
	}

	return <ErrorWrapper>{ title }</ErrorWrapper>;
};

export default TabTitle;
