import React, { ReactNode } from 'react';

import { TabPanel } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import serverData from 'util/serverData';

import { LanguageCode } from '../../defs/common';
import { useFieldContext } from '../FormField/FormField';
import { TabItem } from '../Tabs';

type MultilingualContainerProps = {
    children: (languageCode: LanguageCode, required: boolean) => ReactNode;
    value: Record<LanguageCode, string>;
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

const MultilingualContainer = ({ children, value }: MultilingualContainerProps) => {
    const { required } = useFieldContext();
    return (
        <TabPanel
            tabs={tabs.map((tab: { name: LanguageCode; title: string; className: string }) => {
                const isEmpty = tab.name !== 'de' && !value[tab.name];
                return {
                    ...tab,
                    title: isEmpty ? (
                        <>
                            {tab.title}
                            <small>
                                &nbsp; (
                                {_x(
                                    'empty',
                                    'backoffice: Multilingual container',
                                    'fau-degree-program',
                                )}
                                )
                            </small>
                        </>
                    ) : (
                        tab.title
                    ),
                    className: isEmpty ? 'is-empty' : '',
                };
            })}
            className="component-multilingual-container"
        >
            {(tab: TabItem) => <>{children(tab.name as LanguageCode, required)}</>}
        </TabPanel>
    );
};

export default MultilingualContainer;
