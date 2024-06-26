import React from 'react';

import { Panel, PanelBody } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import FormField from '../FormField/FormField';
import FormWrapper from '../Layouts/FormWrapper';
import TermSelector from '../TermSelector';
import { useEditDegreeProgram } from '../../contexts/DegreeProgramEditFormProvider';
import { ADDITIONAL_DEGREE_NAME } from '../../hooks/constants';
import {
	useAdmissionRequirementsForBachelorAndTeachingDegreesEnable,
	useAdmissionRequirementsForMastersDegree,
	useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled,
	useApplicationDeadlineSummerSemesterEnabled,
	useApplicationDeadlineWinterSemesterEnabled,
	useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled,
} from '../../hooks/useConditionalFields';
import {
	transformTermToAdmissionRequirement,
	transformTermToMultilingualLink,
} from '../../util/transforms';

import ContentField from '../ContentField';
import DayMonthPicker from '../DayMonthPicker';
import FormSeparator from '../Layouts/FormSeparator';
import MultilingualContainer from './MultilingualContainer';

import { MultilingualLink } from '../../defs';

const AdmissionRequirements = () => {
	const { values, handleChange } = useEditDegreeProgram();
	const bachelorOrTeachingEnabled =
		useAdmissionRequirementsForBachelorAndTeachingDegreesEnable();
	const teachingDegreeHigherSemesterEnabled =
		useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled();
	const mastersEnabled = useAdmissionRequirementsForMastersDegree();
	const humanitiesFacultyLanguageSkillsEnabled =
		useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled();
	const applicationSummerDeadlineEnabled =
		useApplicationDeadlineSummerSemesterEnabled();
	const applicationWinterDeadlineEnabled =
		useApplicationDeadlineWinterSemesterEnabled();

	return (
		<Panel>
			<PanelBody>
				<FormWrapper>
					{ ( bachelorOrTeachingEnabled ||
						teachingDegreeHigherSemesterEnabled ) && (
						<>
							{ bachelorOrTeachingEnabled && (
								<FormField
									name="admission_requirements.bachelor_or_teaching_degree"
									label={ _x(
										"Admission requirements for Bachelor's/teaching degrees",
										'backoffice: degree program edit form',
										'fau-degree-program'
									) }
									fill="half"
									required={
										values.degree.name.de !==
										ADDITIONAL_DEGREE_NAME
									}
								>
									<TermSelector
										id="bachelor_teaching_admission_requirement"
										taxonomy="bachelorOrTeachingDegreeAdmissionRequirement"
										value={
											values.admission_requirements
												.bachelor_or_teaching_degree.id
										}
										childOnly
										onChange={ ( term ) => {
											handleChange< MultilingualLink >(
												'admission_requirements.bachelor_or_teaching_degree',
												transformTermToAdmissionRequirement(
													term
												)
											);
										} }
									/>
								</FormField>
							) }

							{ teachingDegreeHigherSemesterEnabled && (
								<FormField
									name="admission_requirements.teaching_degree_higher_semester"
									label={ _x(
										"Admission requirements for entering a Bachelor's/teaching degree at a higher semester",
										'backoffice: degree program edit form',
										'fau-degree-program'
									) }
									fill="half"
									required={
										values.degree.name.de !==
										ADDITIONAL_DEGREE_NAME
									}
								>
									<TermSelector
										id="teaching_higher_semester_admission_requirement"
										taxonomy="teachingDegreeHigherSemesterAdmissionRequirement"
										value={
											values.admission_requirements
												.teaching_degree_higher_semester
												.id
										}
										childOnly
										onChange={ ( term ) => {
											handleChange< MultilingualLink >(
												'admission_requirements.teaching_degree_higher_semester',
												transformTermToAdmissionRequirement(
													term
												)
											);
										} }
									/>
								</FormField>
							) }
							<FormSeparator />
						</>
					) }

					{ mastersEnabled && (
						<>
							<FormField
								name="admission_requirements.master"
								label={ _x(
									"Admission requirements for Master's degree",
									'backoffice: degree program edit form',
									'fau-degree-program'
								) }
								required
							>
								<TermSelector
									id="master_admission_requirement"
									taxonomy="masterDegreeAdmissionRequirement"
									value={
										values.admission_requirements.master.id
									}
									childOnly
									onChange={ ( term ) => {
										handleChange< MultilingualLink >(
											'admission_requirements.master',
											transformTermToAdmissionRequirement(
												term
											)
										);
									} }
								/>
							</FormField>

							<FormField
								name="content_related_master_requirements"
								label={ _x(
									"Content-related admission requirements for Master's degree",
									'backoffice: degree program edit form',
									'fau-degree-program'
								) }
								help="vorausgegangene Bachelorstudiengänge, Qualifikationswerte, etc."
								required
							>
								<MultilingualContainer
									value={
										values.content_related_master_requirements
									}
								>
									{ ( languageCode, required ) => (
										<ContentField
											key={ `content_related_master_requirements.${ languageCode }` }
											onChange={ ( value: string ) => {
												handleChange< string >(
													`content_related_master_requirements.${ languageCode }`,
													value
												);
											} }
											content={
												values
													.content_related_master_requirements[
													languageCode
												]
											}
											required={ required }
										/>
									) }
								</MultilingualContainer>
							</FormField>
							<FormSeparator />
						</>
					) }

					{ applicationWinterDeadlineEnabled && (
						<FormField
							name="application_deadline_winter_semester"
							label={ _x(
								'Application deadline winter semester',
								'backoffice: degree program edit form',
								'fau-degree-program'
							) }
							help="Datum im Format TT.MM. angeben. Weitere Termine können im Feld „Details und Anmerkungen“ eingetragen werden."
						>
							<DayMonthPicker
								onChange={ ( value: string ) => {
									handleChange< string >(
										'application_deadline_winter_semester',
										value
									);
								} }
								value={
									values.application_deadline_winter_semester
								}
							/>
						</FormField>
					) }

					{ applicationSummerDeadlineEnabled && (
						<FormField
							name="application_deadline_summer_semester"
							label={ _x(
								'Application deadline summer semester',
								'backoffice: degree program edit form',
								'fau-degree-program'
							) }
							help="Datum im Format TT.MM. angeben. Weitere Termine können im Feld „Details und Anmerkungen“ eingetragen werden."
						>
							<DayMonthPicker
								onChange={ ( value: string ) => {
									handleChange< string >(
										'application_deadline_summer_semester',
										value
									);
								} }
								value={
									values.application_deadline_summer_semester
								}
							/>
						</FormField>
					) }

					{ ( applicationWinterDeadlineEnabled ||
						applicationSummerDeadlineEnabled ) && (
						<FormSeparator />
					) }

					<FormField
						name="details_and_notes"
						label={ _x(
							'Details and notes',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						help="evtl. zusätzliche Infos zu Bewerbung und Einschreibung."
					>
						<MultilingualContainer
							value={ values.details_and_notes }
						>
							{ ( languageCode, required ) => (
								<ContentField
									key={ `details_and_notes.${ languageCode }` }
									onChange={ ( value: string ) => {
										handleChange< string >(
											`details_and_notes.${ languageCode }`,
											value
										);
									} }
									content={
										values.details_and_notes[ languageCode ]
									}
									required={ required }
								/>
							) }
						</MultilingualContainer>
					</FormField>

					<FormField
						name="language_skills"
						label={ _x(
							'Language skills',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						help="Sprachkenntnisse, die für den Studiengang erforderlich sind."
					>
						<MultilingualContainer value={ values.language_skills }>
							{ ( languageCode, required ) => (
								<ContentField
									key={ `language_skills.${ languageCode }` }
									onChange={ ( value: string ) => {
										handleChange< string >(
											`language_skills.${ languageCode }`,
											value
										);
									} }
									content={
										values.language_skills[ languageCode ]
									}
									required={ required }
								/>
							) }
						</MultilingualContainer>
					</FormField>

					{ humanitiesFacultyLanguageSkillsEnabled && (
						<FormField
							name="language_skills_humanities_faculty"
							label={ _x(
								'Language skills for Faculty of Humanities, Social Sciences, and Theology only',
								'backoffice: degree program edit form',
								'fau-degree-program'
							) }
							help="Sprachkenntnisse, die auch in den ersten Semestern noch erworben werden können."
						>
							<ContentField
								key="language_skills_humanities_faculty"
								onChange={ ( value: string ) => {
									handleChange< string >(
										'language_skills_humanities_faculty',
										value
									);
								} }
								content={
									values.language_skills_humanities_faculty
								}
							/>
						</FormField>
					) }

					<FormField
						name="german_language_skills_for_international_students"
						label={ _x(
							'Language certificates/German language skills for international applicants',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						required
					>
						<TermSelector
							id="german_language_skills_for_international_students"
							taxonomy="germanLanguageSkillsForInternationalStudents"
							value={
								values
									.german_language_skills_for_international_students
									.id
							}
							onChange={ ( term ) => {
								handleChange< MultilingualLink >(
									'german_language_skills_for_international_students',
									transformTermToMultilingualLink( term )
								);
							} }
						/>
					</FormField>
				</FormWrapper>
			</PanelBody>
		</Panel>
	);
};

export default AdmissionRequirements;
