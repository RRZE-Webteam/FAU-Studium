<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

class CampoKeyTermMetaField extends InputTermMetaField
{
    public const KEY = 'uniquename';

    public function __construct(
        protected string $description,
        private ?TermMetaFieldValidationPattern $validationPattern = null,
    ) {
        parent::__construct(
            self::KEY,
            __('Campo Key', 'fau-degree-program'),
            $description,
            'text'
        );
    }

    public function title(): string
    {
        return $this->title;
    }

    public function sanitize(mixed $value): string
    {
        return sanitize_text_field((string) $value);
    }

    public function templateName(): string
    {
        return 'input-term';
    }

    public function validationPattern(): ?TermMetaFieldValidationPattern
    {
        return $this->validationPattern;
    }

    public function templateData(mixed $value): array
    {
        return [
            'key' => $this->key(),
            'value' => (string) $value,
            'title' => $this->title,
            'description' => $this->description,
            'type' => $this->type,
            'validationPattern' => $this->validationPattern,
        ];
    }

    public function metaArgs(): array
    {
        $schema = ['type' =>'string'];

        if (! is_null($this->validationPattern)) {
            $schema['pattern'] = $this->validationPattern->pattern();
        }

        return [
            'type' => 'string',
            'description' => $this->description,
            'single' => true,
            'default' => '',
            'sanitize_callback' => [$this, 'sanitize'],
            'show_in_rest' => [
                'schema' => $schema,
            ],
        ];
    }
}
