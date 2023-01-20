<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

use Fau\DegreeProgram\Common\Domain\MultilingualLink;
use Fau\DegreeProgram\Common\Infrastructure\Repository\BilingualRepository;

final class BilingualLinkSettingsField implements SettingsField
{
    /** @var array<string> */
    private static array $properties;

    public function __construct(
        private string $id,
        private string $title,
        private ?array $default = null,
        private bool $showInRest = true,
    ) {

        $this->id = BilingualRepository::addOptionPrefix($id);
        self::$properties = [
            MultilingualLink::NAME,
            BilingualRepository::addEnglishSuffix(MultilingualLink::NAME),
            MultilingualLink::LINK_TEXT,
            BilingualRepository::addEnglishSuffix(MultilingualLink::LINK_TEXT),
            MultilingualLink::LINK_URL,
            BilingualRepository::addEnglishSuffix(MultilingualLink::LINK_URL),
        ];
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
        return 'bilingual-link';
    }

    public function templateData(mixed $value): array
    {
        return [
            'id' => $this->id,
            'value' => $this->sanitizer()($value),
            'title' => $this->title,
            'sub_fields' => [
                MultilingualLink::NAME =>
                    _x('Name', 'backoffice: field label', 'fau-degree-program'),
                BilingualRepository::addEnglishSuffix(MultilingualLink::NAME) =>
                    _x('English name', 'backoffice: field label', 'fau-degree-program'),
                MultilingualLink::LINK_TEXT =>
                    _x('Link text', 'backoffice: field label', 'fau-degree-program'),
                BilingualRepository::addEnglishSuffix(MultilingualLink::LINK_TEXT) =>
                    _x('English link text', 'backoffice: field label', 'fau-degree-program'),
                MultilingualLink::LINK_URL =>
                    _x('Link URL', 'backoffice: field label', 'fau-degree-program'),
                BilingualRepository::addEnglishSuffix(MultilingualLink::LINK_URL) =>
                    _x('English link URL', 'backoffice: field label', 'fau-degree-program'),
            ],
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

            $result = [];
            foreach (self::$properties as $property) {
                $result[$property] = self::sanitizeProperty($value, $property);
            }

            return $result;
        };
    }

    private static function sanitizeProperty(
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

        $properties = [];
        foreach (self::$properties as $property) {
            $properties[$property] = [
                'type' => 'string',
            ];
        }

        return [
            'schema' => [
                'type' => 'object',
                'properties' => $properties,
            ],
        ];
    }

    public function default(): array
    {
        if (isset($this->default)) {
            return $this->default;
        }

        $default = [];
        foreach (self::$properties as $property) {
            $default[$property] = '';
        }

        return $default;
    }
}
