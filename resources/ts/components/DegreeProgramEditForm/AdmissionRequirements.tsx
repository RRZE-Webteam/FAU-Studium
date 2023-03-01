import React from 'react';
import styled from 'styled-components';

import { __experimentalHeading as Heading, BaseControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import FormFieldWrapper from 'components/Layouts/FormFieldWrapper';
import FormWrapper from 'components/Layouts/FormWrapper';
import TermSelector from 'components/TermSelector';
import { useEditDegreeProgram } from 'contexts/DegreeProgramEditFormProvider';
import {
    useAdmissionRequirementsForBachelorAndTeachingDegreesEnable,
    useAdmissionRequirementsForMastersDegree,
    useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled,
    useApplicationDeadlineSummerSemesterEnabled,
    useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled,
} from 'hooks/useConditionalFields';
import { transformTermToMultilingualLink } from 'util/transforms';

import ContentField from '../ContentField';
import MultilingualContainer from './MultilingualContainer';

import { MultilingualLink } from 'defs';

const StyledHeading = styled(Heading)`
    margin-bottom: 12px;
`;

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
        <>
            <div>
                <StyledHeading level={4}>Bachelor/Lehramt</StyledHeading>

                <FormWrapper>
                    {bachelorOrTeachingEnabled && (
                        <FormFieldWrapper fill="half">
                            <TermSelector
                                id="bachelor_teaching_admission_requirement"
                                label={_x(
                                    "Admission requirements for Bachelor's/teaching degrees",
                                    'backoffice: degree program edit form',
                                    'fau-degree-program',
                                )}
                                taxonomy="bachelorOrTeachingDegreeAdmissionRequirement"
                                value={values.admission_requirements.bachelor_or_teaching_degree.id}
                                onChange={(term) => {
                                    handleChange<MultilingualLink>(
                                        'admission_requirements.bachelor_or_teaching_degree',
                                        transformTermToMultilingualLink(term),
                                    );
                                }}
                            />
                        </FormFieldWrapper>
                    )}

                    {teachingDegreeHigherSemesterEnabled && (
                        <FormFieldWrapper fill="half">
                            <TermSelector
                                id="teaching_higher_semester_admission_requirement"
                                label={_x(
                                    'Admission requirements for entering a teaching degree at a higher semester',
                                    'backoffice: degree program edit form',
                                    'fau-degree-program',
                                )}
                                taxonomy="teachingDegreeHigherSemesterAdmissionRequirement"
                                value={
                                    values.admission_requirements.teaching_degree_higher_semester.id
                                }
                                onChange={(term) => {
                                    handleChange<MultilingualLink>(
                                        'admission_requirements.teaching_degree_higher_semester',
                                        transformTermToMultilingualLink(term),
                                    );
                                }}
                            />
                        </FormFieldWrapper>
                    )}
                </FormWrapper>
            </div>

            <div>
                <StyledHeading level={4}>Master</StyledHeading>

                {mastersEnabled && (
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
                                transformTermToMultilingualLink(term),
                            );
                        }}
                    />
                )}

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
                                content={values.content_related_master_requirements[languageCode]}
                            />
                        )}
                    </MultilingualContainer>
                </BaseControl>

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

                {applicationSummerDeadlineEnabled && (
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
                )}
            </div>

            <div>
                <StyledHeading level={4}>Für Bachelor/Lehramt/Master</StyledHeading>

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

                {humanitiesFacultyLanguageSkillsEnabled && (
                    <BaseControl
                        label={_x(
                            'Language skills for Faculty of Humanities, Social Sciences, and Theology only',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
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
                )}

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
            </div>
        </>
    );
};

export default AdmissionRequirements;
