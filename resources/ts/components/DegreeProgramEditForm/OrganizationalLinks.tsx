import React from 'react';

import {
	Panel,
	PanelBody,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import TextControlFormField from '../FormField/FieldContextAwareTextControl';
import FormField from '../FormField/FormField';
import FormWrapper from '../Layouts/FormWrapper';
import TermSelector from '../TermSelector';

import { useEditDegreeProgram } from '../../contexts/DegreeProgramEditFormProvider';
import { MultilingualLink } from '../../defs';
import { useDegreeFeesEnabled } from '../../hooks/useConditionalFields';
import { transformTermToMultilingualLink } from '../../util/transforms';
import MultilingualContainer from './MultilingualContainer';

const OrganizationalLinks = () => {
	const { values, handleChange } = useEditDegreeProgram();
	const degreeFeesEnabled = useDegreeFeesEnabled();

	return (
		<Panel>
			<PanelBody>
				<FormWrapper>
					<FormField
						name="apply_now_link"
						label={ _x(
							'"Apply now" link',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						fill="third"
						required
					>
						<TermSelector
							id="apply_now_link"
							taxonomy="applyNowLink"
							value={ values.apply_now_link.id }
							onChange={ ( term ) => {
								handleChange< MultilingualLink >(
									'apply_now_link',
									transformTermToMultilingualLink( term )
								);
							} }
						/>
					</FormField>
					<FormField
						name="examinations_office"
						label={ _x(
							'Examinations Office',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						fill="third"
						required
					>
						<TermSelector
							id="examinations_office"
							taxonomy="examinationsOffice"
							value={ values.examinations_office.id }
							onChange={ ( term ) => {
								handleChange< MultilingualLink >(
									'examinations_office',
									transformTermToMultilingualLink( term )
								);
							} }
						/>
					</FormField>
					<FormField
						name="module_handbook"
						label={ _x(
							'Module handbook (URL)',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						fill="third"
						required
					>
						<TextControlFormField
							id="module_handbook"
							onChange={ ( handbook: string ) => {
								handleChange< string >(
									'module_handbook',
									handbook
								);
							} }
							value={ values.module_handbook }
							type="url"
						/>
					</FormField>
					<FormField
						name="url"
						label={ _x(
							'Degree program (URL)',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						fill="half"
						required
					>
						<MultilingualContainer value={ values.url }>
							{ ( languageCode, required ) => (
								<TextControl
									onChange={ ( value: string ) => {
										handleChange< string >(
											`url.${ languageCode }`,
											value
										);
									} }
									value={ values.url[ languageCode ] }
									type="url"
									aria-required={ required }
								/>
							) }
						</MultilingualContainer>
					</FormField>
					<FormField
						name="department"
						label={ _x(
							'Department/Institute (URL)',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						fill="half"
						required
					>
						<MultilingualContainer value={ values.department }>
							{ ( languageCode, required ) => (
								<TextControl
									onChange={ ( value: string ) => {
										handleChange< string >(
											`department.${ languageCode }`,
											value
										);
									} }
									value={ values.department[ languageCode ] }
									type="url"
									aria-required={ required }
								/>
							) }
						</MultilingualContainer>
					</FormField>
					<FormField
						name="subject_specific_advice"
						label={ _x(
							'Subject-specific advice',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						fill="third"
						required
					>
						<TermSelector
							id="subject_specific_advice"
							taxonomy="subjectSpecificAdvice"
							value={ values.subject_specific_advice.id }
							onChange={ ( term ) => {
								handleChange< MultilingualLink >(
									'subject_specific_advice',
									transformTermToMultilingualLink( term )
								);
							} }
						/>
					</FormField>
					<FormField
						name="info_brochure"
						label={ _x(
							'Info brochure degree program (URL)',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						fill="third"
					>
						<TextControlFormField
							id="info_brochure"
							onChange={ ( representatives: string ) => {
								handleChange< string >(
									'info_brochure',
									representatives
								);
							} }
							value={ values.info_brochure }
							type="url"
						/>
					</FormField>
					<FormField
						name="examination_regulations"
						label={ _x(
							'Degree program and examination regulations (URL)',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						fill="third"
						required
					>
						<TextControlFormField
							onChange={ ( value: string ) => {
								handleChange< string >(
									`examination_regulations`,
									value
								);
							} }
							value={ values.examination_regulations }
							type="url"
						/>
					</FormField>

					<FormField
						name="fee_required"
						label={ _x(
							'Fee required',
							'backoffice: degree program edit form',
							'fau-degree-program'
						) }
						fill="full"
					>
						<ToggleControl
							checked={ values.fee_required }
							onChange={ ( checked: boolean ) => {
								handleChange< boolean >(
									'fee_required',
									checked
								);
							} }
						/>
					</FormField>

					{ degreeFeesEnabled && (
						<FormField
							name="degree_program_fees"
							label={ _x(
								'Degree Program Fees',
								'backoffice: degree program edit form',
								'fau-degree-program'
							) }
							help="Studiengangsgebühren, nicht Semesterbeiträge."
							required
						>
							<MultilingualContainer
								value={ values.degree_program_fees }
							>
								{ ( languageCode, required ) => (
									<TextControl
										onChange={ (
											degreeProgramFees: string
										) => {
											handleChange< string >(
												`degree_program_fees.${ languageCode }`,
												degreeProgramFees
											);
										} }
										value={
											values.degree_program_fees[
												languageCode
											]
										}
										aria-required={ required }
									/>
								) }
							</MultilingualContainer>
						</FormField>
					) }
				</FormWrapper>
			</PanelBody>
		</Panel>
	);
};

export default OrganizationalLinks;
