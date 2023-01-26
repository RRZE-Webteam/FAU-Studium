import { MediaType } from '@wordpress/core-data/build-types/entity-types/helpers';
import { useSelect } from '@wordpress/data';

import { CoreDataSelectors, MapSelect, WpMedia, WpMediaImage } from 'defs';

export default function useMedia<T extends MediaType = 'image'>(mediaId: number) {
    const media: T extends 'image' ? WpMediaImage : WpMedia = useSelect<
        MapSelect<CoreDataSelectors>
    >(
        (select) => {
            return select('core').getMedia(mediaId);
        },
        [mediaId],
    );

    return media;
}
