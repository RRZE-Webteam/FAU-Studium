import React from 'react';

import { TextControl } from '@wordpress/components';
import { TextControlProps } from '@wordpress/components/build-types/text-control/types';

import { useFieldContext } from '../FormField/FormField';

const DayMonthPicker = ( props: TextControlProps ) => {
	const { required } = useFieldContext();

	return (
		<TextControl
			{ ...props }
			// The pattern describes valid day and month combinations exept 29.02.
			pattern="((0[1-9]|[12][0-9]|3[01])\.(0[13578]|1[02])|(0[1-9]|[12][0-9]|30)\.(0[469]|11)|(0[1-9]|1[0-9]|2[0-8])\.02)\."
			placeholder="TT.MM."
			className="c-day-month-picker"
			aria-required={ required }
		/>
	);
};

export default DayMonthPicker;
