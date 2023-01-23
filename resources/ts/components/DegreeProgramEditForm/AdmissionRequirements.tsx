import React from 'react';
import TermSelector from 'components/TermSelector';
import { useEditDegreeProgram } from 'contexts/DegreeProgramEditFormProvider';
import { MultilingualLink } from 'defs';
import {
    useAdmissionRequirementsForBachelorAndTeachingDegreesEnable,
    useAdmissionRequirementsForMastersDegree,
    useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled,
    useApplicationDeadlineSummerSemesterEnabled,
    useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled,
} from 'hooks/useConditionalFields';
import styled from 'styled-components';
import { transformTermToMultilingualLink } from 'util/transforms';

import {
    __experimentalHeading as Heading,
    BaseControl,
    TextareaControl,
    TextControl,
} from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import MultilingualContainer from './MultilingualContainer';

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

                {bachelorOrTeachingEnabled && (
                    <div data-testid="bacholar-teaching-admission-requirement">
                        <BaseControl
                            label={_x(
                                "Admission requirements for Bachelor's/teaching degrees",
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                        >
                            <TermSelector
                                taxonomy="bachelorOrTeachingDegreeAdmissionRequirement"
                                value={values.admission_requirements.bachelor_or_teaching_degree.id}
                                onChange={(term) => {
                                    handleChange<MultilingualLink>(
                                        'admission_requirements.bachelor_or_teaching_degree',
                                        transformTermToMultilingualLink(term),
                                    );
                                }}
                            />
                        </BaseControl>
                    </div>
                )}

                {teachingDegreeHigherSemesterEnabled && (
                    <div data-testid="teaching-higher-semester-admission-requirement">
                        <BaseControl
                            label={_x(
                                'Admission requirements for entering a teaching degree at a higher semester',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                        >
                            <TermSelector
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
                        </BaseControl>
                    </div>
                )}
            </div>

            <div>
                <StyledHeading level={4}>Master</StyledHeading>

                {mastersEnabled && (
                    <div data-testid="masters-admission-requirement">
                        <BaseControl
                            label={_x(
                                "Admission requirements for Master's degree",
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                        >
                            <TermSelector
                                taxonomy="masterDegreeAdmissionRequirement"
                                value={values.admission_requirements.master.id}
                                onChange={(term) => {
                                    handleChange<MultilingualLink>(
                                        'admission_requirements.master',
                                        transformTermToMultilingualLink(term),
                                    );
                                }}
                            />
                        </BaseControl>
                    </div>
                )}

                <BaseControl
                    label={_x(
                        "Content-related admission requirements for Master's degree",
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    help="vorausgegangene Bachelorstudiengänge, Qualifikationswerte, etc."
                >
                    <MultilingualContainer>
                        {(languageCode) => (
                            <TextControl
                                onChange={(value: string) => {
                                    handleChange<string>(
                                        `content_related_master_requirements.${languageCode}`,
                                        value,
                                    );
                                }}
                                value={values.content_related_master_requirements[languageCode]}
                            />
                        )}
                    </MultilingualContainer>
                </BaseControl>

                <TextControl
                    onChange={(value: string) => {
                        handleChange<string>('application_deadline_winter_semester', value);
                    }}
                    value={values.application_deadline_winter_semester}
                    label={_x(
                        'Application deadline winter semester',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                />

                {applicationSummerDeadlineEnabled && (
                    <div data-testid="application-deadline-summer">
                        <TextControl
                            onChange={(value: string) => {
                                handleChange<string>('application_deadline_summer_semester', value);
                            }}
                            value={values.application_deadline_summer_semester}
                            label={_x(
                                'Application deadline summer semester',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                        />
                    </div>
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
                    <MultilingualContainer>
                        {(languageCode) => (
                            <TextareaControl
                                onChange={(value: string) => {
                                    handleChange<string>(
                                        `details_and_notes.${languageCode}`,
                                        value,
                                    );
                                }}
                                value={values.details_and_notes[languageCode]}
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
                    <MultilingualContainer>
                        {(languageCode) => (
                            <TextControl
                                onChange={(value: string) => {
                                    handleChange<string>(`language_skills.${languageCode}`, value);
                                }}
                                value={values.language_skills[languageCode]}
                            />
                        )}
                    </MultilingualContainer>
                </BaseControl>

                {humanitiesFacultyLanguageSkillsEnabled && (
                    <div data-testid="language-skills-humanities-faculty">
                        <TextControl
                            onChange={(value: string) => {
                                handleChange<string>('language_skills_humanities_faculty', value);
                            }}
                            value={values.language_skills_humanities_faculty}
                            label={_x(
                                'Language skills for Faculty of Humanities, Social Sciences, and Theology only',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            help="Sprachkenntnisse, die auch in den ersten Semestern noch erworben werden können."
                        />
                    </div>
                )}

                <BaseControl
                    label={_x(
                        'Language certificates/German language skills for international applicants',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <TermSelector
                        taxonomy="germanLanguageSkillsForInternationalStudents"
                        value={values.german_language_skills_for_international_students.id}
                        onChange={(term) => {
                            handleChange<MultilingualLink>(
                                'german_language_skills_for_international_students',
                                transformTermToMultilingualLink(term),
                            );
                        }}
                    />
                </BaseControl>
            </div>
        </>
    );
};

export default AdmissionRequirements;
