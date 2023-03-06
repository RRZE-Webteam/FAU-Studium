import React from 'react';

import { BaseControl, Panel, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import FormFieldWrapper from 'components/Layouts/FormFieldWrapper';
import FormWrapper from 'components/Layouts/FormWrapper';

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
                <FormWrapper>
                    <FormFieldWrapper fill="half">
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
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="half">
                        <TextControl
                            id="module_handbook"
                            label={_x(
                                'Module handbook (URL)',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            onChange={(handbook: string) => {
                                handleChange<string>('module_handbook', handbook);
                            }}
                            value={values.module_handbook}
                            type="url"
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="half">
                        <BaseControl
                            id="url"
                            label={_x(
                                'Degree program (URL)',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                        >
                            <MultilingualContainer value={values.url}>
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
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="half">
                        <BaseControl
                            id="examination_regulations"
                            label={_x(
                                'Degree program and examination regulations',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                        >
                            <MultilingualContainer value={values.examination_regulations}>
                                {(languageCode) => (
                                    <TextControl
                                        onChange={(value: string) => {
                                            handleChange<string>(
                                                `examination_regulations.${languageCode}`,
                                                value,
                                            );
                                        }}
                                        value={values.examination_regulations[languageCode]}
                                    />
                                )}
                            </MultilingualContainer>
                        </BaseControl>
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="half">
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
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="half">
                        <TextControl
                            id="student_representatives"
                            label={_x(
                                'Student’s Representatives/FSI (URL)',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            onChange={(representatives: string) => {
                                handleChange<string>('student_representatives', representatives);
                            }}
                            value={values.student_representatives}
                            type="url"
                        />
                    </FormFieldWrapper>

                    <FormFieldWrapper fill="full">
                        <BaseControl
                            id="fee_required"
                            label={_x(
                                'Fee required',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                        >
                            <div>
                                <ToggleControl
                                    checked={values.fee_required}
                                    onChange={(checked: boolean) => {
                                        handleChange<boolean>('fee_required', checked);
                                    }}
                                />
                            </div>
                        </BaseControl>
                        {degreeFeesEnabled && (
                            <BaseControl
                                label={_x(
                                    'Degree Program Fees',
                                    'backoffice: degree program edit form',
                                    'fau-degree-program',
                                )}
                                help="Studiengangsgebühren, nicht Semesterbeiträge."
                            >
                                <MultilingualContainer value={values.degree_program_fees}>
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
                    </FormFieldWrapper>
                </FormWrapper>
            </PanelBody>
        </Panel>
    );
};

export default OrganizationalLinks;
