<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

interface TermMetaField
{
    public function key(): string;
    public function title(): string;
    public function sanitize(mixed $value): mixed;

    public function templateName(): string;
    public function templateData(mixed $value): array;
    public function validationPattern(): ?TermMetaFieldValidationPattern;

    /**
     * @see register_meta
     * @return array{
     *     type?: string,
     *     description?: string,
     *     single?: bool,
     *     default?: mixed,
     *     sanitize_callback?: callable|null,
     *     auth_callback?: callable|null,
     *     show_in_rest?: bool|array,
     * }
     */
    public function metaArgs(): array;
}
