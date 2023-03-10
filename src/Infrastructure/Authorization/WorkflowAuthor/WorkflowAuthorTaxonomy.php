<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor;

use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\Taxonomy;

class WorkflowAuthorTaxonomy extends Taxonomy
{
    public const KEY = 'workflow_author';
    public const REST_BASE = 'workflow-author';

    public function key(): string
    {
        return self::KEY;
    }

    public function restBase(): string
    {
        return self::REST_BASE;
    }

    protected function pluralName(): string
    {
        return _x(
            'Workflow authors',
            'backoffice: taxonomy plural name',
            'fau-degree-program'
        );
    }

    protected function singularName(): string
    {
        return _x(
            'Workflow author',
            'backoffice: taxonomy singular name',
            'fau-degree-program'
        );
    }

    protected function isHierarchical(): bool
    {
        return true;
    }
}
