import { useEffect } from 'react';
import { Image } from 'defs';
import serverData from 'util/serverData';

import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

import useDegreeProgramProperty from './useDegreeProgramProperty';

export default function useDegreeProgramFeaturedImage(): [Image, (val: Image) => void] {
    const [postThumbnail] = useEntityProp('postType', serverData.postType, 'featured_media');
    const [featuredImage, setFeaturedImage] = useDegreeProgramProperty<Image>('featured_image');

    if (!featuredImage) {
        return [
            {
                id: 0,
                url: '',
            },
            setFeaturedImage,
        ];
    }

    const thumbnailMedia = useSelect(
        (select: any) => {
            return select('core').getMedia(postThumbnail);
        },
        [postThumbnail],
    );

    useEffect(() => {
        setFeaturedImage({
            id: postThumbnail,
            url: thumbnailMedia?.media_details?.sizes?.thumbnail?.source_url ?? '',
        });
    }, [postThumbnail, thumbnailMedia]);

    return [featuredImage, setFeaturedImage];
}
