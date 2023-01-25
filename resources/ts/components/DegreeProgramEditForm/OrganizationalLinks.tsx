import React from 'react';

import { BaseControl, Panel, PanelBody, TextControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import { useEditDegreeProgram } from '../../contexts/DegreeProgramEditFormProvider';
import { MultilingualLink } from '../../defs';
import { useDegreeFeesEnabled } from '../../hooks/useConditionalFields';
import { transformTermToMultilingualLink } from '../../util/transforms';
import TermSelector from '../TermSelector';
import MultilingualContainer from './MultilingualContainer';

const OrganizationalLinks = () => {
    const { values, handleChange } = useEditDegreeProgram();
    const degreeFeesEnabled = useDegreeFeesEnabled();

    return (
        <Panel>
            <PanelBody>
                <TermSelector
                    id="examinations_office"
                    label={_x(
                        'Examinations Office',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    taxonomy="examinationsOffice"
                    value={values.examinations_office.id}
                    onChange={(term) => {
                        handleChange<MultilingualLink>(
                            'examinations_office',
                            transformTermToMultilingualLink(term),
                        );
                    }}
                />
                <TermSelector
                    id="examination_regulations"
                    label={_x(
                        'Degree program and examination regulations',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    taxonomy="examinationRegulations"
                    value={values.examination_regulations.id}
                    onChange={(term) => {
                        handleChange<MultilingualLink>(
                            'examination_regulations',
                            transformTermToMultilingualLink(term),
                        );
                    }}
                />
                <TextControl
                    id="module_handbook"
                    label={_x(
                        'Module handbook',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    onChange={(handbook: string) => {
                        handleChange<string>('module_handbook', handbook);
                    }}
                    value={values.module_handbook}
                />
                <BaseControl
                    id="url"
                    label={_x(
                        'Degree program URL',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <MultilingualContainer>
                        {(languageCode) => (
                            <TextControl
                                onChange={(value: string) => {
                                    handleChange<string>(`url.${languageCode}`, value);
                                }}
                                value={values.url[languageCode]}
                                type="url"
                            />
                        )}
                    </MultilingualContainer>
                </BaseControl>
                <TermSelector
                    id="subject_specific_advice"
                    label={_x(
                        'Subject-specific advice',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    taxonomy="subjectSpecificAdvice"
                    value={values.subject_specific_advice.id}
                    onChange={(term) => {
                        handleChange<MultilingualLink>(
                            'subject_specific_advice',
                            transformTermToMultilingualLink(term),
                        );
                    }}
                />
                <TextControl
                    id="student_representatives"
                    label={_x(
                        'Student’s Representatives/FSI',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    onChange={(representatives: string) => {
                        handleChange<string>('student_representatives', representatives);
                    }}
                    value={values.student_representatives}
                />
                {degreeFeesEnabled && (
                    <BaseControl
                        label={_x(
                            'Degree Program Fees',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="Studiengangsgebühren, nicht Semesterbeiträge."
                    >
                        <MultilingualContainer>
                            {(languageCode) => (
                                <TextControl
                                    onChange={(degreeProgramFees: string) => {
                                        handleChange<string>(
                                            `degree_program_fees.${languageCode}`,
                                            degreeProgramFees,
                                        );
                                    }}
                                    value={values.degree_program_fees[languageCode]}
                                />
                            )}
                        </MultilingualContainer>
                    </BaseControl>
                )}
            </PanelBody>
        </Panel>
    );
};

export default OrganizationalLinks;
