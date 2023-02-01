import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { isBlobURL } from '@wordpress/blob';
import { MediaPlaceholder, MediaReplaceFlow, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, Flex, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useEditDegreeProgram } from '../../contexts/DegreeProgramEditFormProvider';
import useMedia from './useMedia';

import { Image } from 'defs';

type ImageFieldProps = {
    path: 'teaser_image' | 'featured_image';
    title?: string;
};

const StyledWrapper = styled.div<{ hasImage: boolean }>`
    .components-placeholder__fieldset {
        ${({ hasImage }) =>
            hasImage
                ? css`
                      .components-form-file-upload,
                      .block-editor-media-placeholder__cancel-button,
                      .components-button.is-tertiary {
                          display: none;
                      }
                  `
                : ''}
        };
    }
`;

export default function ImageField({ path, title = '' }: ImageFieldProps) {
    const [isLoading, setIsLoading] = useState(false);
    const { values, handleChange } = useEditDegreeProgram();

    const selectedMedia = useMedia(values[path].id);

    const Preview = (): JSX.Element | null => {
        if (isLoading) {
            return <Spinner />;
        }

        if (!values[path].url) {
            return null;
        }

        return (
            <img
                src={selectedMedia?.media_details?.sizes?.thumbnail?.source_url ?? values[path].url}
                alt="preview"
            />
        );
    };

    const handleOnCancel = () => {
        handleChange<Image>(path, {
            id: 0,
            url: '',
        });
    };

    const handleOnSelect = ({ id, url }) => {
        if (isBlobURL(url)) {
            setIsLoading(true);
            return;
        }

        handleChange<Image>(path, {
            id,
            url,
        });
        setIsLoading(false);
    };

    const hasMedia = () => !isLoading && !!selectedMedia?.id;

    return (
        <MediaUploadCheck>
            <StyledWrapper hasImage={hasMedia()}>
                <MediaPlaceholder
                    value={[values[path].id]}
                    onSelect={handleOnSelect}
                    onCancel={hasMedia() ? handleOnCancel : undefined}
                    allowedTypes={['image']}
                    multiple={false}
                    labels={{ title }}
                    mediaPreview={<Preview />}
                >
                    {hasMedia() && (
                        <Flex gap={4} justify="flex-start">
                            <MediaReplaceFlow
                                mediaUrl={values[path].url}
                                mediaId={values[path].id}
                                allowedTypes={['image']}
                                onSelect={handleOnSelect}
                            />
                            <Button variant="primary" isDestructive onClick={handleOnCancel}>
                                {__('Remove image')}
                            </Button>
                        </Flex>
                    )}
                </MediaPlaceholder>
            </StyledWrapper>
        </MediaUploadCheck>
    );
}

ImageField.defaultProps = {
    title: '',
};
