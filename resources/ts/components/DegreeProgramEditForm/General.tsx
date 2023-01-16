import React from 'react';
import LimitedInputControl from 'components/LimitedInputControl';
import { MultiTermSelector } from 'components/TermSelector';
import TermSelector from 'components/TermSelector/TermSelector';
import TextControlCollection from 'components/TextControlCollection';
import { useEditDegreeProgram } from 'contexts/DegreeProgramEditFormProvider';
import { Degree, Image, MultilingualLink, MultilingualString } from 'defs';
import useMedia from 'hooks/useMedia';
import { propertyId } from 'util/idHelpers';
import {
    transformTermToDegree,
    transformTermToMultilingualLink,
    transformTermToMultilingualString,
} from 'util/transforms';

import { MediaPlaceholder, MediaUploadCheck } from '@wordpress/block-editor';
import {
    __experimentalNumberControl as NumberControl,
    BaseControl,
    Panel,
    PanelBody,
    TextareaControl,
    TextControl,
    ToggleControl,
} from '@wordpress/components';
import { PostFeaturedImage } from '@wordpress/editor';
import { _x } from '@wordpress/i18n';

const General = () => {
    const { values, handleChange } = useEditDegreeProgram();
    const teaserImageMedia = useMedia(values.teaser_image.id);

    return (
        <Panel>
            <PanelBody>
                <BaseControl
                    id="featured_image"
                    help={_x(
                        'Is used for the detail view',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    label={_x(
                        'Featured image',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <MediaUploadCheck>
                        <PostFeaturedImage />
                    </MediaUploadCheck>
                </BaseControl>
                <BaseControl
                    id="teaser_image"
                    help={_x(
                        'Used for the tiles on the selection page',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    label={_x(
                        'Teaser Image',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <MediaUploadCheck>
                        <MediaPlaceholder
                            value={[values.teaser_image.id]}
                            onSelect={({ id, url }) => {
                                handleChange<Image>('teaser_image', {
                                    id,
                                    url,
                                });
                            }}
                            allowedTypes={['image']}
                            multiple={false}
                            labels={{
                                title: _x(
                                    'Teaser Image',
                                    'backoffice: degree program edit form',
                                    'fau-degree-program',
                                ),
                            }}
                            mediaPreview={
                                values.teaser_image.url ? (
                                    <img
                                        src={
                                            teaserImageMedia?.media_details?.sizes?.thumbnail
                                                ?.source_url ?? values.teaser_image.url
                                        }
                                        alt="preview"
                                    />
                                ) : undefined
                            }
                        />
                    </MediaUploadCheck>
                </BaseControl>

                <TextControl
                    onChange={(title: string) => {
                        handleChange<string>('title.de', title);
                    }}
                    value={values.title.de}
                    help={_x(
                        'The course title. Do not include the degree title or abbreviation',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    label={_x(
                        'Title',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                />
                <TextControl
                    onChange={(title: string) => {
                        handleChange<string>('subtitle.de', title);
                    }}
                    value={values.subtitle.de}
                    help={_x(
                        'E.g. list of majors in economics',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    label={_x(
                        'Subtitle',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                />
                <NumberControl
                    onChange={(value: string) => {
                        handleChange<number>('standard_duration', parseInt(value, 10));
                    }}
                    value={values.standard_duration}
                    label={_x(
                        'Standard duration of study',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    min={0}
                />

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
                <BaseControl
                    id="semester"
                    label={_x(
                        'Start of degree program',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <MultiTermSelector
                        taxonomy="semester"
                        value={values.start.map((term) => term.id)}
                        onChange={(terms) => {
                            handleChange<MultilingualString[]>(
                                'start',
                                terms.map(transformTermToMultilingualString),
                            );
                        }}
                    />
                </BaseControl>
                <BaseControl
                    id="number_of_students"
                    label={_x(
                        'Number of students',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    help={_x(
                        'Total number of students, not just freshmen',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <TermSelector
                        taxonomy="numberOfStudents"
                        value={values.number_of_students.id}
                        onChange={(term) => {
                            handleChange<{ id: string; description: string }>(
                                'number_of_students',
                                {
                                    id: propertyId('term', term.id),
                                    description: term.description,
                                },
                            );
                        }}
                    />
                </BaseControl>
                <BaseControl
                    id="teaching-language"
                    label={_x(
                        'Teaching language',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <TermSelector
                        taxonomy="teachingLanguage"
                        value={values.teaching_language.id}
                        onChange={(term) => {
                            handleChange<MultilingualString>(
                                'teaching_language',
                                transformTermToMultilingualString(term),
                            );
                        }}
                    />
                </BaseControl>
                <BaseControl
                    id="attribute"
                    label={_x(
                        'Attributes',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <MultiTermSelector
                        taxonomy="attribute"
                        value={values.attributes.map((term) => term.id)}
                        onChange={(terms) => {
                            handleChange<MultilingualString[]>(
                                'attributes',
                                terms.map(transformTermToMultilingualString),
                            );
                        }}
                    />
                </BaseControl>
                <BaseControl
                    id="degree"
                    label={_x(
                        'Degree',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <TermSelector
                        taxonomy="degree"
                        value={values.degree.id}
                        onChange={(term) => {
                            handleChange<Degree>('degree', transformTermToDegree(term));
                        }}
                    />
                </BaseControl>
                <BaseControl
                    id="faculty"
                    label={_x(
                        'Faculty',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <TermSelector
                        taxonomy="faculty"
                        value={values.faculty.id}
                        onChange={(term) => {
                            handleChange<MultilingualLink>(
                                'faculty',
                                transformTermToMultilingualLink(term),
                            );
                        }}
                    />
                </BaseControl>
                <BaseControl
                    id="study-location"
                    label={_x(
                        'Study location',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <TermSelector
                        taxonomy="studyLocation"
                        value={values.location.id}
                        onChange={(term) => {
                            handleChange<MultilingualString>(
                                'location',
                                transformTermToMultilingualString(term),
                            );
                        }}
                    />
                </BaseControl>
                <BaseControl
                    id="subject-group"
                    label={_x(
                        'Subject groups',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <MultiTermSelector
                        taxonomy="subjectGroup"
                        value={values.subject_groups.map((t) => t.id)}
                        onChange={(terms) => {
                            handleChange<MultilingualString[]>(
                                'subject_groups',
                                terms.map(transformTermToMultilingualString),
                            );
                        }}
                    />
                </BaseControl>
                <BaseControl
                    id="videos"
                    label={_x(
                        'Videos',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                    help={_x(
                        'Videos about the course, the subject, a topic of the subject (e.g. 2-minute knowledge), field reports',
                        'backoffice: degree program edit form',
                        'fau-degree-program',
                    )}
                >
                    <TextControlCollection
                        value={values.videos}
                        onChange={(value) => {
                            handleChange<string[]>('videos', value);
                        }}
                    />
                </BaseControl>
                <LimitedInputControl value={values.meta_description.de} maxChars={160}>
                    {(maxChars) => (
                        <TextareaControl
                            label={_x(
                                'Meta description',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            help={_x(
                                'Text for display on search engines',
                                'backoffice: degree program edit form',
                                'fau-degree-program',
                            )}
                            value={values.meta_description.de}
                            onChange={(text: string) => {
                                if (text.length <= maxChars) {
                                    handleChange<string>('meta_description.de', text);
                                }
                            }}
                        />
                    )}
                </LimitedInputControl>
            </PanelBody>
        </Panel>
    );
};

export default General;
