import React from 'react';

import { Panel, PanelBody, TextareaControl, TextControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import FormField from 'components/FormField';
import ImageField from 'components/ImageField';
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

import ContentField from '../ContentField';
import MultilingualContainer from './MultilingualContainer';

import { Degree, MultilingualLink, MultilingualString } from 'defs';

const General = () => {
    const { values, handleChange } = useEditDegreeProgram();

    return (
        <Panel>
            <PanelBody>
                <FormWrapper>
                    <FormField
                        name="title"
                        label={_x(
                            'Title',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="Studiengangsbezeichnung, ohne Abschluss."
                        fill="half"
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
                    </FormField>
                    <FormField
                        name="subtitle"
                        label={_x(
                            'Subtitle (optional)',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="Z. B. Aufzählung der Studienschwerpunkte bei Wirtschaftswissenschaften."
                        fill="half"
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
                    </FormField>

                    <FormField
                        name="featured_image"
                        fill="half"
                        label={_x(
                            'Featured image',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="Wird für die Detailansicht verwendet."
                    >
                        <ImageField path="featured_image" />
                    </FormField>
                    <FormField
                        name="teaser_image"
                        fill="half"
                        label={_x(
                            'Teaser Image',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="Wird für die Kacheln auf der Auswahlseite verwendet."
                    >
                        <ImageField path="teaser_image" />
                    </FormField>

                    <FormField
                        name="entry_text"
                        fill="full"
                        label={_x(
                            'Entry text (promotional)',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="Ca. 300 Zeichen."
                    >
                        <MultilingualContainer value={values.entry_text}>
                            {(languageCode) => (
                                <ContentField
                                    content={values.entry_text[languageCode]}
                                    onChange={(content: string) => {
                                        handleChange<string>(`entry_text.${languageCode}`, content);
                                    }}
                                />
                            )}
                        </MultilingualContainer>
                    </FormField>

                    <FormField
                        name="area_of_study"
                        fill="third"
                        label={_x(
                            'Area of study',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                    >
                        <MultiTermSelector
                            id="area_of_study"
                            taxonomy="areaOfStudy"
                            value={values.area_of_study.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualLink[]>(
                                    'area_of_study',
                                    terms.map(transformTermToMultilingualLink),
                                );
                            }}
                        />
                    </FormField>

                    <FormField
                        label={_x(
                            'Start of degree program',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        name="start"
                        fill="third"
                    >
                        <MultiTermSelector
                            id="semester"
                            taxonomy="semester"
                            value={values.start.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualString[]>(
                                    'start',
                                    terms.map(transformTermToMultilingualString),
                                );
                            }}
                        />
                    </FormField>
                    <FormField
                        name="number_of_students"
                        label={_x(
                            'Number of students',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="Gesamtzahl der Studierenden, nicht nur Erstsemester."
                        fill="third"
                    >
                        <TermSelector
                            id="number_of_students"
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
                    </FormField>
                    <FormField
                        name="teaching_language"
                        label={_x(
                            'Teaching language',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        fill="third"
                    >
                        <TermSelector
                            id="teaching-language"
                            taxonomy="teachingLanguage"
                            value={values.teaching_language.id}
                            onChange={(term) => {
                                handleChange<MultilingualString>(
                                    'teaching_language',
                                    transformTermToMultilingualString(term),
                                );
                            }}
                        />
                    </FormField>
                    <FormField
                        name="attributes"
                        label={_x(
                            'Attributes',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        fill="third"
                    >
                        <MultiTermSelector
                            id="attribute"
                            taxonomy="attribute"
                            value={values.attributes.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualString[]>(
                                    'attributes',
                                    terms.map(transformTermToMultilingualString),
                                );
                            }}
                        />
                    </FormField>
                    <FormField
                        name="degree"
                        label={_x(
                            'Degree',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        fill="third"
                    >
                        <TermSelector
                            id="degree"
                            taxonomy="degree"
                            value={values.degree.id}
                            onChange={(term) => {
                                handleChange<Degree>('degree', transformTermToDegree(term));
                            }}
                        />
                    </FormField>
                    <FormField
                        name="faculty"
                        label={_x(
                            'Faculty',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        fill="half"
                    >
                        <MultiTermSelector
                            id="faculty"
                            taxonomy="faculty"
                            value={values.faculty.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualLink[]>(
                                    'faculty',
                                    terms.map(transformTermToMultilingualLink),
                                );
                            }}
                        />
                    </FormField>
                    <FormField
                        name="location"
                        label={_x(
                            'Study location',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        fill="half"
                    >
                        <MultiTermSelector
                            id="study-location"
                            taxonomy="studyLocation"
                            value={values.location.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualString[]>(
                                    'location',
                                    terms.map(transformTermToMultilingualString),
                                );
                            }}
                        />
                    </FormField>
                    <FormField
                        name="subject_groups"
                        label={_x(
                            'Subject groups',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        fill="half"
                    >
                        <MultiTermSelector
                            id="subject-group"
                            taxonomy="subjectGroup"
                            value={values.subject_groups.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualString[]>(
                                    'subject_groups',
                                    terms.map(transformTermToMultilingualString),
                                );
                            }}
                        />
                    </FormField>
                    <FormField
                        name="keywords"
                        label={_x(
                            'Keywords',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        fill="half"
                    >
                        <MultiTermSelector
                            id="keywords"
                            taxonomy="keyword"
                            value={values.keywords.map((term) => term.id)}
                            onChange={(terms) => {
                                handleChange<MultilingualString[]>(
                                    'keywords',
                                    terms.map(transformTermToMultilingualString),
                                );
                            }}
                        />
                    </FormField>
                    <FormField
                        name="videos"
                        label={_x(
                            'Videos',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="Videos über den Studiengang, das Studienfach, ein Thema des Fachs (z. B. 2-Minuten-Wissen), Erfahrungsberichte."
                        fill="full"
                    >
                        <TextControlCollection
                            value={values.videos}
                            onChange={(value) => {
                                handleChange<string[]>('videos', value);
                            }}
                            type="url"
                        />
                    </FormField>

                    <FormField
                        name="standard_duration"
                        label={_x(
                            'Duration of studies in semester',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="Nur Zahl."
                        fill="full"
                    >
                        <TextareaControl
                            onChange={(value: string) => {
                                handleChange<string>('standard_duration', value);
                            }}
                            value={values.standard_duration}
                        />
                    </FormField>

                    <FormField
                        name="meta_description"
                        label={_x(
                            'Meta description',
                            'backoffice: degree program edit form',
                            'fau-degree-program',
                        )}
                        help="Text für die Anzeige bei Suchmaschinen."
                        fill="full"
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
                    </FormField>
                </FormWrapper>
            </PanelBody>
        </Panel>
    );
};

export default General;
