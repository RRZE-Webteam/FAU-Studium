import { __ } from '@wordpress/i18n';

import { DegreeProgramDataPaths } from 'defs';

const transformedErrorMessages: Partial<Record<DegreeProgramDataPaths, string>> = {
    'featured_image.id': __('Please select a featured image.', 'fau-degree-program'),
    'teaser_image.id': __('Please select a teaser image.', 'fau-degree-program'),
};

const transformedErrorMessagesBasedOnErrorCode: Partial<Record<string, string>> = {
    rest_too_short: __('This field can not be empty.', 'fau-degree-program'),
    rest_too_short_en: __('English variant of this field can not be empty.', 'fau-degree-program'),
    rest_too_few_items: __('Please select at least one item.', 'fau-degree-program'),
    rest_invalid_pattern: __('Field does not match pattern.', 'fau-degree-program'),
};

export { transformedErrorMessages, transformedErrorMessagesBasedOnErrorCode };
