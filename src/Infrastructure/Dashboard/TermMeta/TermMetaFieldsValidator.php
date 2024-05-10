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
            // Only campo key field supports validation.
            if (! $termMetaField instanceof CampoKeyTermMetaField) {
                continue;
            }

            // phpcs:ignore WordPressVIPMinimum.Security.PHPFilterFunctions.MissingThirdParameter
            $postedValue = filter_input(
                INPUT_POST,
                $termMetaField->key(),
            );

            $sanitizedValue = $termMetaField->sanitize($postedValue);

            // Skip validation if field is empty.
            if ($sanitizedValue === '') {
                continue;
            }

            $validationPattern = $termMetaField->validationPattern();
            if (is_null($validationPattern)) {
                continue;
            }

            if (! $validationPattern->matches($sanitizedValue)) {
                return new WP_Error(
                    'invalid_term_meta',
                    sprintf(
                        __(
                            'The value of the field %s is invalid. expected value: %s',
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
