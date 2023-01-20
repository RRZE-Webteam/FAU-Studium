import { Immutable } from 'immer';
import serverData from 'util/serverData';

import { useEntityProp } from '@wordpress/core-data';

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
    const [postTitle, setPostTitle] = useEntityProp('postType', serverData().postType, 'title');

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
