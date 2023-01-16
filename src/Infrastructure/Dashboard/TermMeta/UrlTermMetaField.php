<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

final class UrlTermMetaField extends InputTermMetaField
{
    public function __construct(
        string $key,
        string $title,
        string $description = ''
    ) {

        parent::__construct(
            $key,
            $title,
            $description,
            'url'
        );
    }

    public function sanitize(mixed $value): string
    {
        return esc_url_raw((string) $value);
    }

    public function metaArgs(): array
    {
        $args = parent::metaArgs();
        $args['show_in_rest'] = [
            'schema' => [
                'type' => 'string',
                'format' => 'uri',
            ],
        ];

        return $args;
    }
}
