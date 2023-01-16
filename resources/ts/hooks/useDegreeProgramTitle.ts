import { Immutable } from 'immer';

import { useEntityProp } from '@wordpress/core-data';

import ServerData from '../util/serverData';
import useDegreeProgramProperty from './useDegreeProgramProperty';

type GermanTitle = string;
type EnglishTitle = string;
export default function useDegreeProgramTitle(): {
    germanTitle: Immutable<GermanTitle | undefined>;
    setGermanTitle: (title: GermanTitle) => void;
    englishTitle: Immutable<EnglishTitle | undefined>;
    setEnglishTitle: (title: EnglishTitle) => void;
} {
    const [, setDegreeProgramTitleGerman] = useDegreeProgramProperty<string>('title.de');
    const [degreeProgramTitleEnglish, setDegreeProgramTitleEnglish] =
        useDegreeProgramProperty<string>('title.en');
    const [postTitle, setPostTitle] = useEntityProp('postType', ServerData.postType, 'title');

    return {
        germanTitle: postTitle,
        setGermanTitle: (title: GermanTitle) => {
            setPostTitle(title);
            setDegreeProgramTitleGerman(title);
        },
        englishTitle: degreeProgramTitleEnglish,
        setEnglishTitle: (title: EnglishTitle) => {
            setDegreeProgramTitleEnglish(title);
        },
    };
}
