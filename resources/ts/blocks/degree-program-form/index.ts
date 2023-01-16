import { registerBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import { _x } from '@wordpress/i18n';

import Edit from './Edit';

domReady(() => {
    registerBlockType('fau/degree-program-form', {
        title: _x('Degree program editor', 'backoffice: Block properties', 'fau-degree-program'),
        description: _x(
            'Displays degree program editor form.',
            'backoffice: Block properties',
            'fau-degree-program',
        ),
        icon: 'welcome-learn-more',
        category: 'theme',
        attributes: [],
        edit: Edit,
        save: () => null,
        supports: {
            lock: false,
            html: false,
            inserter: false,
            multiple: false,
            reusable: false,
            customClassName: false,
        },
    });
});
