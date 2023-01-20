import { ReactNode } from 'react';

import { TabPanelProps } from '@wordpress/components/build-types/tab-panel/types';

import { ArrayElement } from '../../defs/generic';

type Tab = ArrayElement<TabPanelProps['tabs']>;

export interface TabItem extends Tab {
    component: ReactNode;
}
