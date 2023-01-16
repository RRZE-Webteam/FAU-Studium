<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer;
use WP_Term;

final class TermMetaRegistrar
{
    public function __construct(
        private Renderer $termMetaFieldRenderer,
        private TermMetaRepository $termMetaRepository,
    ) {
    }

    /**
     * phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
     */
    public function register(
        string $taxonomy,
        TermMetaField $termMetaField,
        TermMetaField ...$termMetaFields
    ): void {

        array_unshift($termMetaFields, $termMetaField);

        foreach ($termMetaFields as $field) {
            register_term_meta(
                $taxonomy,
                $field->key(),
                $field->metaArgs()
            );
        }

        add_action(
            "{$taxonomy}_edit_form_fields",
            function (WP_Term $term) use ($termMetaFields): void {
                foreach ($termMetaFields as $termMetaField) {
                    $value = $this->termMetaRepository->retrieve($term->term_id, $termMetaField->key());

                    echo $this->termMetaFieldRenderer->render(
                        $termMetaField->templateName() . '-edit',
                        $termMetaField->templateData($value)
                    );
                }
            }
        );

        add_action(
            "{$taxonomy}_add_form_fields",
            function () use ($termMetaFields): void {
                foreach ($termMetaFields as $termMetaField) {
                    echo $this->termMetaFieldRenderer->render(
                        $termMetaField->templateName() . '-add',
                        $termMetaField->templateData(null)
                    );
                }
            }
        );

        $updateCallback = $this->buildUpdateCallback(...$termMetaFields);

        add_action("edit_{$taxonomy}", $updateCallback);
        add_action("create_{$taxonomy}", $updateCallback);
    }

    private function buildUpdateCallback(TermMetaField ...$termMetaFields): callable
    {
        return function (int $termId) use ($termMetaFields): void {
            foreach ($termMetaFields as $termMetaField) {
                // phpcs:ignore WordPressVIPMinimum.Security.PHPFilterFunctions.MissingThirdParameter
                $postedValue = filter_input(
                    INPUT_POST,
                    $termMetaField->key(),
                );

                $sanitizedValue = $termMetaField->sanitize($postedValue);
                $this->termMetaRepository->update($termId, $termMetaField->key(), $sanitizedValue);
            }
        };
    }
}
