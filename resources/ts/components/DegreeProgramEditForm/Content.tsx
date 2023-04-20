import React from 'react';

import { Panel, PanelBody } from '@wordpress/components';

import FormField from 'components/FormField/FormField';
import FormWrapper from 'components/Layouts/FormWrapper';
import { useEditDegreeProgram } from 'contexts/DegreeProgramEditFormProvider';

import ContentField from '../ContentField';
import DegreeProgramCombinations from '../DegreeProgramCombinations';
import MultilingualContainer from './MultilingualContainer';

import { DegreeProgramData, LanguageCode } from 'defs';

const CONTENT_ITEMS = {
    about: 'kurze Beschreibung des Studiengangs allgemein; ±200 Wörter',
    structure: 'Vorstellung des Fachs und der Studieninhalte; ±200 Wörter',
    specializations:
        'Spezialisierungsmöglichkeiten und Schwerpunkte während des Studiums; ±200 Wörter',
    qualities_and_skills:
        'Fähigkeiten und Vorlieben der Studieninteressierten, nicht formelle Voraussetzungen; ±200 Wörter',
    why_should_study:
        'Einzigartigkeit bzw. Besonderheiten (z. B. Kooperationspartner, Verbundstudiumsangebot) des Studiengangs an der FAU; ±200 Wörter',
    career_prospects: 'mögliche Tätigkeitsfelder nach Abschluss des Studiums; ±200 Wörter',
    special_features:
        'Möglichkeiten von Auslandsaufenthalten, Kooperationen mit Forschungsprojekten, etc.; ±200 Wörter',
} as Record<keyof DegreeProgramData['content'], string>;

const REQUIRED_FIELDS = ['about', 'structure'];

const Content = () => {
    const { values, handleChange } = useEditDegreeProgram();

    return (
        <Panel>
            <PanelBody>
                <FormWrapper>
                    {(Object.keys(CONTENT_ITEMS) as Array<keyof typeof CONTENT_ITEMS>).map(
                        (item) => (
                            <FormField
                                key={item}
                                name={`content.${item}.description`}
                                label={`${values.content[item].title.de} ${
                                    values.content[item].title.en
                                        ? `(${values.content[item].title.en})`
                                        : ''
                                }`}
                                help={CONTENT_ITEMS[item]}
                                required={REQUIRED_FIELDS.includes(item)}
                            >
                                <MultilingualContainer value={values.content[item].description}>
                                    {(languageCode: LanguageCode, required) => (
                                        <>
                                            <ContentField
                                                content={
                                                    values.content[item].description[languageCode]
                                                }
                                                onChange={(content) =>
                                                    handleChange<string>(
                                                        `content.${item}.description.${languageCode}`,
                                                        content,
                                                    )
                                                }
                                                required={required}
                                            />
                                        </>
                                    )}
                                </MultilingualContainer>
                            </FormField>
                        ),
                    )}
                    <DegreeProgramCombinations />
                </FormWrapper>
            </PanelBody>
        </Panel>
    );
};

export default Content;
