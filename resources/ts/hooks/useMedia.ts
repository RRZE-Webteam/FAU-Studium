import { useSelect } from '@wordpress/data';

export default function useMedia(mediaId: number) {
    const media = useSelect(
        (select: any) => {
            return select('core').getMedia(mediaId);
        },
        [mediaId],
    );

    return media;
}
