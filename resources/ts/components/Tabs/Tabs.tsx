import React from 'react';

import { TabPanel } from '@wordpress/components';

import { TabItem } from './defs';

interface Props {
    tabs: TabItem[];
}

const Tabs = ({ tabs }: Props) => {
    return <TabPanel tabs={tabs}>{(tab: TabItem) => <>{tab.component}</>}</TabPanel>;
};

export default Tabs;
