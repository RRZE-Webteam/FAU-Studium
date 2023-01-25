import React from 'react';

import { compose } from '@wordpress/compose';

import EntitySelector from '../EntitySelector';
import { MultiTermSelectorProps } from './defs';
import {
    withDegreeProgramTerms,
    withSearchedDegreeProgramTerms,
    withTermSelectorProps,
} from './hoc';

export default compose(
    withTermSelectorProps,
    withDegreeProgramTerms,
    withSearchedDegreeProgramTerms,
)(EntitySelector) as React.FC<MultiTermSelectorProps>;
