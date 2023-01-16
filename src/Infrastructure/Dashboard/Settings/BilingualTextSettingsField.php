<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

use Fau\DegreeProgram\Common\Domain\MultilingualString;
use Fau\DegreeProgram\Common\Infrastructure\Repository\BilingualRepository;

final class BilingualTextSettingsField implements SettingsField
{
    public function __construct(
        private string $id,
        private string $title,
        private ?array $default = null,
        private bool $showInRest = true,
    ) {

        $this->id = BilingualRepository::addOptionPrefix($id);
    }

    public function id(): string
    {
        return $this->id;
    }

    public function title(): string
    {
        return $this->title;
    }

    public function templateName(): string
    {
        return 'bilingual-text';
    }

    public function templateData(mixed $value): array
    {
        return [
            'id' => $this->id,
            'value' => $this->sanitizer()($value),
            'title' => $this->title,
        ];
    }

    public function type(): string
    {
        return 'object';
    }

    public function description(): string
    {
        return $this->title;
    }

    public function sanitizer(): callable
    {
        return static function (mixed $value): array {
            if (!is_array($value)) {
                $value = [];
            }

            return [
                MultilingualString::DE => self::sanitizeLanguageProperty($value, MultilingualString::DE),
                MultilingualString::EN => self::sanitizeLanguageProperty($value, MultilingualString::EN),
            ];
        };
    }

    private static function sanitizeLanguageProperty(
        array $value,
        string $key
    ): string {

        return isset($value[$key]) && is_string($value[$key])
            ? esc_html($value[$key])
            : '';
    }

    public function showInRest(): bool|array
    {
        if (!$this->showInRest) {
            return false;
        }

        return [
            'schema' => [
                'type' => 'object',
                'properties' => [
                    MultilingualString::DE => [
                        'type' => 'string',
                    ],
                    MultilingualString::EN => [
                        'type' => 'string',
                    ],
                ],
            ],
        ];
    }

    public function default(): array
    {
        return $this->default ?? [
            MultilingualString::DE => '',
            MultilingualString::EN => '',
        ];
    }
}
