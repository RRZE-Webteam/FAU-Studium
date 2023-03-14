import React from 'react';

import { BaseControl } from '@wordpress/components';
import { _x, sprintf } from '@wordpress/i18n';

import FormFieldWrapper from 'components/Layouts/FormFieldWrapper';
import FormSubHeading from 'components/Layouts/FormSubHeading';
import FormWrapper from 'components/Layouts/FormWrapper';
import TermSelector from 'components/TermSelector';
import { useEditDegreeProgram } from 'contexts/DegreeProgramEditFormProvider';
import { ADDITIONAL_DEGREE_NAME } from 'hooks/constants';
import {
    useAdmissionRequirementsForBachelorAndTeachingDegreesEnable,
    useAdmissionRequirementsForMastersDegree,
    useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled,
    useApplicationDeadlineSummerSemesterEnabled,
    useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled,
} from 'hooks/useConditionalFields';
import {
    transformTermToAdmissionRequirement,
    transformTermToMultilingualLink,
} from 'util/transforms';

import ContentField from '../ContentField';
import MultilingualContainer from './MultilingualContainer';

import { MultilingualLink } from 'defs';

const AdmissionRequirements = () => {
    const { values, handleChange } = useEditDegreeProgram();
    const bachelorOrTeachingEnabled = useAdmissionRequirementsForBachelorAndTeachingDegreesEnable();
    const teachingDegreeHigherSemesterEnabled =
        useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled();
    const mastersEnabled = useAdmissionRequirementsForMastersDegree();
    const humanitiesFacultyLanguageSkillsEnabled =
        useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled();
    const applicationSummerDeadlineEnabled = useApplicationDeadlineSummerSemesterEnabled();

    return (
        <FormWrapper>
            {(bachelorOrTeachingEnabled || teachingDegreeHigherSemesterEnabled) && (
                <>
                    <FormSubHeading>Bachelor/Lehramt</FormSubHeading>

                    {bachelorOrTeachingEnabled && (
                        <FormFieldWrapper fill="half">
                            <TermSelector
                                id="bachelor_teaching_admission_requirement"
                                label={sprintf(
                                    _x(
                                        // translators: %s is the "(optional)" word
                                        "Admission requirements for Bachelor's/teaching degrees %s",
                                        'backoffice: degree program edit form',
                                        'fau-degree-program',
                                    ),
                                    values.degree.name.de === ADDITIONAL_DEGREE_NAME
                                        ? _x(
                                              '(optional)',
                                              'backoffice: degree program edit form',
                                              'fau-degree-program',
                                          )
                                        : '',
                                )}
                                taxonomy="bachelorOrTeachingDegreeAdmissionRequirement"
                                value={values.admission_requirements.bachelor_or_teaching_degree.id}
                                onChange={(term) => {
                                    handleChange<MultilingualLink>(
                                        'admission_requirements.bachelor_or_teaching_degree',
                                        transformTermToAdmissionRequirement(term),
                                    );
                                }}
                            />
                        </FormFieldWrapper>
                    )}

                    {teachingDegreeHigherSemesterEnabled && (
                        <FormFieldWrapper fill="half">
                            <TermSelector
                                id="teaching_higher_semester_admission_requirement"
                                label={sprintf(
                                    _x(
                                        // translators: %s is the "(optional)" word
                                        'Admission requirements for entering a teaching degree at a higher semester %s',
                                        'backoffice: degree program edit form',
                                        'fau-degree-program',
                                    ),
                                    values.degree.name.de === ADDITIONAL_DEGREE_NAME
                                        ? _x(
                                              '(optional)',
                                              'backoffice: degree program edit form',
                                              'fau-degree-program',
                                          )
                                        : '',
                                )}
                                taxonomy="teachingDegreeHigherSemesterAdmissionRequirement"
                                value={
                                    values.admission_requirements.teaching_degree_higher_semester.id
                                }
                                onChange={(term) => {
                                    handleChange<MultilingualLink>(
                                        'admission_requirements.teaching_degree_higher_semester',
                                        transformTermToAdmissionRequirement(term),
                                    );
                                }}
                            />
                        </FormFieldWrapper>
                    )}
                </>
            )}

            <FormSubHeading>Master</FormSubHeading>
            {mastersEnabled && (
                <FormFieldWrapper>
                    <TermSelector
                        id="master_admission_requirement"
                        label={_x(
                            "Admission requirements for Master's degree",
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        taxonomy="masterDegreeAdmissionRequirement"
                        value={values.admission_requirements.master.id}
                        onChange={(term) => {
                            handleChange<MultilingualLink>(
                                'admission_requirements.master',
                                transformTermToAdmissionRequirement(term),
                            );
                        }}
                    />
                </FormFieldWrapper>
            )}

            {mastersEnabled && (
                <FormFieldWrapper>
                    <BaseControl
                        label={_x(
                            "Content-related admission requirements for Master's degree",
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="vorausgegangene Bachelorstudiengänge, Qualifikationswerte, etc."
                    >
                        <MultilingualContainer value={values.content_related_master_requirements}>
                            {(languageCode) => (
                                <ContentField
                                    onChange={(value: string) => {
                                        handleChange<string>(
                                            `content_related_master_requirements.${languageCode}`,
                                            value,
                                        );
                                    }}
                                    content={
                                        values.content_related_master_requirements[languageCode]
                                    }
                                />
                            )}
                        </MultilingualContainer>
                    </BaseControl>
                </FormFieldWrapper>
            )}

            <FormFieldWrapper>
                <BaseControl
                    label={_x(
                        'Application deadline winter semester',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <ContentField
                        onChange={(value: string) => {
                            handleChange<string>('application_deadline_winter_semester', value);
                        }}
                        content={values.application_deadline_winter_semester}
                    />
                </BaseControl>
            </FormFieldWrapper>

            {applicationSummerDeadlineEnabled && (
                <FormFieldWrapper>
                    <BaseControl
                        label={_x(
                            'Application deadline summer semester',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                    >
                        <ContentField
                            onChange={(value: string) => {
                                handleChange<string>('application_deadline_summer_semester', value);
                            }}
                            content={values.application_deadline_summer_semester}
                        />
                    </BaseControl>
                </FormFieldWrapper>
            )}

            <FormSubHeading>Für Bachelor/Lehramt/Master</FormSubHeading>
            <FormFieldWrapper>
                <BaseControl
                    label={_x(
                        'Details and notes',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    help="evtl. zusätzliche Infos zu Bewerbung und Einschreibung."
                >
                    <MultilingualContainer value={values.details_and_notes}>
                        {(languageCode) => (
                            <ContentField
                                onChange={(value: string) => {
                                    handleChange<string>(
                                        `details_and_notes.${languageCode}`,
                                        value,
                                    );
                                }}
                                content={values.details_and_notes[languageCode]}
                            />
                        )}
                    </MultilingualContainer>
                </BaseControl>
            </FormFieldWrapper>

            <FormFieldWrapper>
                <BaseControl
                    label={_x(
                        'Language skills',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    help="Sprachkenntnisse, die für den Studiengang erforderlich sind."
                >
                    <MultilingualContainer value={values.language_skills}>
                        {(languageCode) => (
                            <ContentField
                                onChange={(value: string) => {
                                    handleChange<string>(`language_skills.${languageCode}`, value);
                                }}
                                content={values.language_skills[languageCode]}
                            />
                        )}
                    </MultilingualContainer>
                </BaseControl>
            </FormFieldWrapper>

            {humanitiesFacultyLanguageSkillsEnabled && (
                <FormFieldWrapper>
                    <BaseControl
                        label={sprintf(
                            _x(
                                // translators: %s is the "(optional)" word
                                'Language skills for Faculty of Humanities, Social Sciences, and Theology only %s',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            ),
                            values.degree.name.de === ADDITIONAL_DEGREE_NAME
                                ? _x(
                                      '(optional)',
                                      'backoffice: degree program edit form',
                                      'fau-degree-program',
                                  )
                                : '',
                        )}
                        help="Sprachkenntnisse, die auch in den ersten Semestern noch erworben werden können."
                    >
                        <ContentField
                            onChange={(value: string) => {
                                handleChange<string>('language_skills_humanities_faculty', value);
                            }}
                            content={values.language_skills_humanities_faculty}
                        />
                    </BaseControl>
                </FormFieldWrapper>
            )}

            <FormFieldWrapper>
                <TermSelector
                    id="german_language_skills_for_international_students"
                    label={_x(
                        'Language certificates/German language skills for international applicants',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    taxonomy="germanLanguageSkillsForInternationalStudents"
                    value={values.german_language_skills_for_international_students.id}
                    onChange={(term) => {
                        handleChange<MultilingualLink>(
                            'german_language_skills_for_international_students',
                            transformTermToMultilingualLink(term),
                        );
                    }}
                />
            </FormFieldWrapper>
        </FormWrapper>
    );
};

export default AdmissionRequirements;
