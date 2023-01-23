import React from 'react';

import { compose } from '@wordpress/compose';

import EntitySelector from '../EntitySelector';
import {
    withDegreeProgramTerms,
    withSearchedDegreeProgramTerms,
    withTermSelectorProps,
} from './hoc';

import { MultiTermSelectorProps } from './defs';

export default compose(
    withTermSelectorProps,
    withDegreeProgramTerms,
    withSearchedDegreeProgramTerms,
)(EntitySelector) as React.FC<MultiTermSelectorProps>;
