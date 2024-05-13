<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use WP_Error;

final class TermMetaFieldsValidator
{
    public function validate(TermMetaField ...$termMetaFields): ?WP_Error
    {
        if (! $this->isTermEditingContext()) {
            return null;
        }

        foreach ($termMetaFields as $termMetaField) {
            $validationPattern = $termMetaField->validationPattern();
            if (is_null($validationPattern)) {
                continue;
            }

            // phpcs:ignore WordPressVIPMinimum.Security.PHPFilterFunctions.MissingThirdParameter
            $postedValue = filter_input(
                INPUT_POST,
                $termMetaField->key(),
            );

            $sanitizedValue = (string) $termMetaField->sanitize($postedValue);

            // Skip validation if field is empty.
            if ($sanitizedValue === '') {
                continue;
            }

            if (! $validationPattern->matches($sanitizedValue)) {
                return new WP_Error(
                    'invalid_term_meta',
                    sprintf(
                        // translators: %1$s: field title. %2$s: expected pattern description.
                        __(
                            'The value of the field %1$s is invalid. expected value: %2$s',
                            'fau-degree-program'
                        ),
                        $termMetaField->title(),
                        $validationPattern->expectedPatternMessage(),
                    )
                );
            }
        }

        return null;
    }

    private function isTermEditingContext(): bool
    {
        $action = filter_input(INPUT_POST, 'action', FILTER_SANITIZE_SPECIAL_CHARS);
        return $action === 'editedtag' || $action === 'add-tag';
    }
}
