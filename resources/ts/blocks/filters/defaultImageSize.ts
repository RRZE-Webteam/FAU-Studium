import { addFilter } from '@wordpress/hooks';

const DEFAULT_SIZE = 'thumbnail';

addFilter(
    'editor.PostFeaturedImage.imageSize',
    'fau/degree-program-image-size',
    () => DEFAULT_SIZE,
);
