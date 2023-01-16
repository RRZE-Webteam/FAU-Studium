import React, { ReactNode } from 'react';

import { TabPanel } from '@wordpress/components';

import ServerData from '../../util/serverData';
import { TabItem } from '../Tabs';

type MultilingualContainerProps = {
    children: (language: string) => ReactNode;
};

const tabs: TabPanel.Tab[] = Object.keys(ServerData.languages).map((languageCode: string) => {
    const languageName = ServerData.languages[languageCode];

    return {
        name: languageCode,
        title: languageName,
    };
});

const MultilingualContainer = ({ children }: MultilingualContainerProps) => {
    return <TabPanel tabs={tabs}>{(tab: TabItem) => <>{children(tab.name)}</>}</TabPanel>;
};

export default MultilingualContainer;
