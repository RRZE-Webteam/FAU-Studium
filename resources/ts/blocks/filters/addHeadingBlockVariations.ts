import { addFilter } from '@wordpress/hooks';

function addHeadingBlockVariations(settings, name) {
    if (name !== 'core/heading') {
        return settings;
    }

    return {
        ...settings,
        variations: [
            {
                name: 'H3',
                isDefault: true,
                title: 'H3',
                attributes: { level: 3 },
            },
            {
                name: 'H4',
                title: 'H4',
                attributes: { level: 4 },
            },
            {
                name: 'H5',
                title: 'H5',
                attributes: { level: 5 },
            },
        ],
    };
}

addFilter('blocks.registerBlockType', 'fau/variations/heading', addHeadingBlockVariations);
