import React from 'react';

import {
    __experimentalNumberControl as NumberControl,
    BaseControl,
    Panel,
    PanelBody,
    TextareaControl,
    TextControl,
} from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import ImageField from 'components/ImageField';
import FormFieldWrapper from 'components/Layouts/FormFieldWrapper';
import FormWrapper from 'components/Layouts/FormWrapper';
import LimitedInputControl from 'components/LimitedInputControl';
import { MultiTermSelector } from 'components/TermSelector';
import TermSelector from 'components/TermSelector/TermSelector';
import TextControlCollection from 'components/TextControlCollection';
import { useEditDegreeProgram } from 'contexts/DegreeProgramEditFormProvider';
import { propertyId } from 'util/idHelpers';
import {
    transformTermToDegree,
    transformTermToMultilingualLink,
    transformTermToMultilingualString,
} from 'util/transforms';

import MultilingualContainer from './MultilingualContainer';

import { Degree, MultilingualLink, MultilingualString } from 'defs';

const General = () => {
    const { values, handleChange } = useEditDegreeProgram();

    return (
        <Panel>
            <PanelBody>
                <FormWrapper>
                    <FormFieldWrapper fill="half">
                        <BaseControl
                            id="featured_image"
                            help="Wird für die Detailansicht verwendet."
                            label={_x(
                                'Featured image',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                        >
                            <ImageField path="featured_image" />
                        </BaseControl>
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="half">
                        <BaseControl
                            id="teaser_image"
                            help="Wird für die Kacheln auf der Auswahlseite verwendet."
                            label={_x(
                                'Teaser Image',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                        >
                            <ImageField path="teaser_image" />
                        </BaseControl>
                    </FormFieldWrapper>

                    <FormFieldWrapper fill="half">
                        <BaseControl
                            id="title"
                            label={_x(
                                'Title',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            help="Studiengangsbezeichnung, ohne Abschluss."
                        >
                            <MultilingualContainer value={values.title}>
                                {(languageCode) => (
                                    <TextControl
                                        onChange={(value: string) => {
                                            handleChange<string>(`title.${languageCode}`, value);
                                        }}
                                        value={values.title[languageCode]}
                                    />
                                )}
                            </MultilingualContainer>
                        </BaseControl>
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="half">
                        <BaseControl
                            id="subtitle"
                            label={_x(
                                'Subtitle',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            help="Z. B. Aufzählung der Studienschwerpunkte bei Wirtschaftswissenschaften."
                        >
                            <MultilingualContainer value={values.subtitle}>
                                {(languageCode) => (
                                    <TextControl
                                        onChange={(value: string) => {
                                            handleChange<string>(`subtitle.${languageCode}`, value);
                                        }}
                                        value={values.subtitle[languageCode]}
                                    />
                                )}
                            </MultilingualContainer>
                        </BaseControl>
                    </FormFieldWrapper>

                    <FormFieldWrapper fill="third">
                        <MultiTermSelector
                            id="area_of_study"
                            label={_x(
                                'Area of study',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            taxonomy="areaOfStudy"
                            value={values.area_of_study.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualLink[]>(
                                    'area_of_study',
                                    terms.map(transformTermToMultilingualLink),
                                );
                            }}
                        />
                    </FormFieldWrapper>

                    <FormFieldWrapper fill="third">
                        <NumberControl
                            onChange={(value: string) => {
                                handleChange<number>('standard_duration', parseInt(value, 10));
                            }}
                            value={values.standard_duration || undefined}
                            label={_x(
                                'Standard duration of study',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            min={1}
                        />
                    </FormFieldWrapper>

                    <FormFieldWrapper fill="third">
                        <MultiTermSelector
                            id="semester"
                            label={_x(
                                'Start of degree program',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            taxonomy="semester"
                            value={values.start.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualString[]>(
                                    'start',
                                    terms.map(transformTermToMultilingualString),
                                );
                            }}
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="third">
                        <TermSelector
                            id="number_of_students"
                            label={_x(
                                'Number of students',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            help="Gesamtzahl der Studierenden, nicht nur Erstsemester."
                            taxonomy="numberOfStudents"
                            value={values.number_of_students.id}
                            onChange={(term) => {
                                handleChange<{ id: string; description: string }>(
                                    'number_of_students',
                                    term
                                        ? {
                                              id: propertyId('term', term.id),
                                              description: term.description,
                                          }
                                        : {
                                              id: '',
                                              description: '',
                                          },
                                );
                            }}
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="third">
                        <TermSelector
                            id="teaching-language"
                            label={_x(
                                'Teaching language',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            taxonomy="teachingLanguage"
                            value={values.teaching_language.id}
                            onChange={(term) => {
                                handleChange<MultilingualString>(
                                    'teaching_language',
                                    transformTermToMultilingualString(term),
                                );
                            }}
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="third">
                        <MultiTermSelector
                            id="attribute"
                            label={_x(
                                'Attributes',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            taxonomy="attribute"
                            value={values.attributes.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualString[]>(
                                    'attributes',
                                    terms.map(transformTermToMultilingualString),
                                );
                            }}
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="third">
                        <TermSelector
                            id="degree"
                            label={_x(
                                'Degree',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            taxonomy="degree"
                            value={values.degree.id}
                            onChange={(term) => {
                                handleChange<Degree>('degree', transformTermToDegree(term));
                            }}
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="third">
                        <TermSelector
                            id="faculty"
                            label={_x(
                                'Faculty',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            taxonomy="faculty"
                            value={values.faculty.id}
                            onChange={(term) => {
                                handleChange<MultilingualLink>(
                                    'faculty',
                                    transformTermToMultilingualLink(term),
                                );
                            }}
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="third">
                        <TermSelector
                            id="study-location"
                            label={_x(
                                'Study location',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            taxonomy="studyLocation"
                            value={values.location.id}
                            onChange={(term) => {
                                handleChange<MultilingualString>(
                                    'location',
                                    transformTermToMultilingualString(term),
                                );
                            }}
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="half">
                        <MultiTermSelector
                            id="subject-group"
                            label={_x(
                                'Subject groups',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            taxonomy="subjectGroup"
                            value={values.subject_groups.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualString[]>(
                                    'subject_groups',
                                    terms.map(transformTermToMultilingualString),
                                );
                            }}
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="half">
                        <MultiTermSelector
                            id="keywords"
                            label={_x(
                                'Keywords',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            taxonomy="keyword"
                            value={values.keywords.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualString[]>(
                                    'keywords',
                                    terms.map(transformTermToMultilingualString),
                                );
                            }}
                        />
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="full">
                        <BaseControl
                            id="videos"
                            label={_x(
                                'Videos',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            help="Videos über den Studiengang, das Studienfach, ein Thema des Fachs (z. B. 2-Minuten-Wissen), Erfahrungsberichte."
                        >
                            <TextControlCollection
                                value={values.videos}
                                onChange={(value) => {
                                    handleChange<string[]>('videos', value);
                                }}
                            />
                        </BaseControl>
                    </FormFieldWrapper>
                    <FormFieldWrapper fill="full">
                        <BaseControl
                            label={_x(
                                'Meta description',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            help="Text für die Anzeige bei Suchmaschinen."
                        >
                            <MultilingualContainer value={values.meta_description}>
                                {(languageCode) => (
                                    <LimitedInputControl
                                        value={values.meta_description[languageCode]}
                                        maxChars={160}
                                    >
                                        {({ updatedValue }) => (
                                            <TextareaControl
                                                value={values.meta_description[languageCode]}
                                                onChange={(text: string) => {
                                                    handleChange<string>(
                                                        `meta_description.${languageCode}`,
                                                        updatedValue(text),
                                                    );
                                                }}
                                            />
                                        )}
                                    </LimitedInputControl>
                                )}
                            </MultilingualContainer>
                        </BaseControl>
                    </FormFieldWrapper>
                </FormWrapper>
            </PanelBody>
        </Panel>
    );
};

export default General;
