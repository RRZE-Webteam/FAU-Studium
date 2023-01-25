import React, { ReactNode } from 'react';

import { TabPanel } from '@wordpress/components';

import serverData from 'util/serverData';

import { LanguageCode } from '../../defs/common';
import { TabItem } from '../Tabs';

type MultilingualContainerProps = {
    children: (languageCode: LanguageCode) => ReactNode;
};

const tabs: TabPanel.Tab[] = (Object.keys(serverData().languages) as Array<LanguageCode>).map(
    (languageCode: LanguageCode) => {
        const languageName = serverData().languages[languageCode];

        return {
            name: languageCode,
            title: languageName,
        };
    },
);

const MultilingualContainer = ({ children }: MultilingualContainerProps) => {
    return (
        <TabPanel tabs={tabs}>
            {(tab: TabItem) => <>{children(tab.name as LanguageCode)}</>}
        </TabPanel>
    );
};

export default MultilingualContainer;
