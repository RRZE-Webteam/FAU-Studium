import React from 'react';
import { useEditDegreeProgram } from 'contexts/DegreeProgramEditFormProvider';
import { DegreeProgramData, LanguageCode } from 'defs';

import { BaseControl, Panel, PanelBody } from '@wordpress/components';

import ContentField from '../ContentField';
import DegreeProgramCombinations from '../DegreeProgramCombinations';
import MultilingualContainer from './MultilingualContainer';

const CONTENT_ITEMS = [
    'about',
    'structure',
    'specializations',
    'qualities_and_skills',
    'why_should_study',
    'career_prospects',
    'special_features',
    'testimonials',
] as Array<keyof DegreeProgramData['content']>;

const Content = () => {
    const { values, handleChange } = useEditDegreeProgram();

    return (
        <Panel>
            <PanelBody>
                {CONTENT_ITEMS.map((item) => (
                    <BaseControl
                        key={item}
                        label={`${values.content[item].title.de} (${values.content[item].title.en})`}
                    >
                        <MultilingualContainer>
                            {(languageCode: LanguageCode) => (
                                <>
                                    <ContentField
                                        content={values.content[item].description[languageCode]}
                                        onChange={(content) =>
                                            handleChange<string>(
                                                `content.${item}.description.${languageCode}`,
                                                content,
                                            )
                                        }
                                    />
                                </>
                            )}
                        </MultilingualContainer>
                    </BaseControl>
                ))}
                <DegreeProgramCombinations />
            </PanelBody>
        </Panel>
    );
};

export default Content;
