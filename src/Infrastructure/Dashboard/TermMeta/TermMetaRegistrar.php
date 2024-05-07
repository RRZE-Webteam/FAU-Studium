<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use Fau\DegreeProgram\Application\FormFieldValidation\FormFieldValidationMessages;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer;
use WP_Error;
use WP_Term;

final class TermMetaRegistrar
{
    public function __construct(
        private Renderer $termMetaFieldRenderer,
        private TermMetaRepository $termMetaRepository,
        private FormFieldValidationMessages $validationMessages,
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

            add_filter(
                "fau.degree_programs.taxonnomy_{$taxonomy}_term_metas.validation_rules",
                fn (array $rules) => $this->addJavascriptFieldValidationRules($rules, $field),
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
        add_filter('pre_insert_term', $this->buildValidationCallback(...$termMetaFields));
    }

    // phpcs:ignore Inpsyde.CodeQuality.NestingLevel.High
    private function buildValidationCallback(TermMetaField ...$termMetaFields): callable
    {
        return function (mixed $term) use ($termMetaFields): mixed {
            if ($term instanceof WP_Error) {
                return $term;
            }

            $error = null;

            foreach ($termMetaFields as $termMetaField) {
                $postedValue = filter_input(
                    INPUT_POST,
                    $termMetaField->key(),
                    FILTER_SANITIZE_SPECIAL_CHARS
                );

                $error = $this->checkForErrors($termMetaField, $postedValue);

                if ($error instanceof WP_Error) {
                    return $error;
                }
            }

            return $term;
        };
    }

    private function checkForErrors(TermMetaField $termMetaField, mixed $value): ?WP_Error
    {
        foreach ($termMetaField->validationRules() as $validationRule) {
            if ($validationRule->passes($value)) {
                continue;
            }

            return new WP_Error(
                'invalid_term_meta',
                $this->validationMessages->get($validationRule, $termMetaField->title()),
            );
        }

        return null;
    }

    private function buildUpdateCallback(TermMetaField ...$termMetaFields): callable
    {
        return function (int $termId) use ($termMetaFields): void {
            foreach ($termMetaFields as $termMetaField) {
                $postedValue = filter_input(
                    INPUT_POST,
                    $termMetaField->key(),
                    FILTER_SANITIZE_SPECIAL_CHARS
                );

                $sanitizedValue = $termMetaField->sanitize($postedValue);
                $this->termMetaRepository->update($termId, $termMetaField->key(), $sanitizedValue);
            }
        };
    }

    private function addJavascriptFieldValidationRules(array $rules, TermMetaField $field): array
    {
        $result = [];

        foreach ($field->validationRules() as $validationRule) {
            $result[] = (object) [
                'name' => $validationRule::name(),
                'payload' => $validationRule->payload(),
                'errorMessage' => $this->validationMessages->get($validationRule, $field->title()),
            ];
        }

        $rules[$field->key()] = $result;

        return $rules;
    }
}
