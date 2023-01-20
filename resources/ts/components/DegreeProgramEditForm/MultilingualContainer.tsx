import React, { ReactNode } from 'react';
import serverData from 'util/serverData';

import { TabPanel } from '@wordpress/components';

import { TabItem } from '../Tabs';

import { LanguageCode } from '../../defs/common';

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
