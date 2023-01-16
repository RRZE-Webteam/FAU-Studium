<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramEditor;

use Fau\DegreeProgram\Common\Domain\MultilingualString;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TaxonomiesList;
use Fau\DegreeProgram\Infrastructure\RestApi\RestApiModule;

final class ServerDataProvider
{
    public const JS_OBJECT_NAME = 'DegreeProgramEditorServerData';

    /**
     * @return array<string, mixed>
     */
    public function provide(): array
    {
        return [
            'postType' => DegreeProgramPostType::KEY,
            'propertyName' => RestApiModule::DEGREE_PROGRAM_REST_PROPERTY,
            'languages' => MultilingualString::LANGUAGES,
            'taxonomySlugs' => $this->taxonomiesSlugs(),
        ];
    }

    /**
     * @return array<string, string>
     */
    private function taxonomiesSlugs(): array
    {
        $result = [];
        foreach (TaxonomiesList::new() as $value) {
            $result[$this->taxonomyName($value)] = (string) $value::KEY;
        }

        return $result;
    }

    private function taxonomyName(string $className): string
    {
        $parts = explode('\\', $className);
        $shortClassName = end($parts);
        return str_replace('Taxonomy', '', lcfirst($shortClassName));
    }
}
