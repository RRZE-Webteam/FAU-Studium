import { useEffect, useRef } from 'react';

import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

import serverData from 'util/serverData';

import { CoreDataSelectors, Image, MapSelect, WpMediaImage } from '../defs';
import useDegreeProgramProperty from './useDegreeProgramProperty';

export default function useDegreeProgramFeaturedImage(): [Image, (val: Image) => void] {
    const [postThumbnail] = useEntityProp('postType', serverData().postType, 'featured_media');
    const [featuredImage, setFeaturedImage] = useDegreeProgramProperty<Image>('featured_image');
    const ranOnce = useRef(false);

    const thumbnailMedia: WpMediaImage = useSelect<MapSelect<CoreDataSelectors>>(
        (select) => {
            return select('core').getMedia(postThumbnail);
        },
        [postThumbnail],
    );

    useEffect(() => {
        if (!ranOnce.current) {
            setFeaturedImage({
                id: postThumbnail,
                url: thumbnailMedia?.media_details?.sizes?.thumbnail?.source_url ?? '',
            });

            ranOnce.current = true;
        }
    }, [postThumbnail, setFeaturedImage, thumbnailMedia]);

    if (!featuredImage) {
        return [
            {
                id: 0,
                url: '',
            },
            setFeaturedImage,
        ];
    }

    return [featuredImage, setFeaturedImage];
}
