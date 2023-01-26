import React, { useState } from 'react';

import { isBlobURL } from '@wordpress/blob';
import { MediaPlaceholder, MediaUploadCheck } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';

import { useEditDegreeProgram } from '../../contexts/DegreeProgramEditFormProvider';
import useMedia from './useMedia';

import { Image } from 'defs';

type ImageFieldProps = {
    path: 'teaser_image' | 'featured_image';
    title: string;
};
export default function ImageField({ path, title }: ImageFieldProps) {
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

    return (
        <MediaUploadCheck>
            <MediaPlaceholder
                value={[values[path].id]}
                onSelect={({ id, url }) => {
                    if (isBlobURL(url)) {
                        setIsLoading(true);
                        return;
                    }

                    handleChange<Image>(path, {
                        id,
                        url,
                    });
                    setIsLoading(false);
                }}
                onCancel={() => {
                    handleChange<Image>(path, {
                        id: 0,
                        url: '',
                    });
                }}
                allowedTypes={['image']}
                multiple={false}
                labels={{ title }}
                mediaPreview={<Preview />}
            />
        </MediaUploadCheck>
    );
}
