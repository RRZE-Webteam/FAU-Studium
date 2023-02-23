<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\Roles;

use Fau\DegreeProgram\Infrastructure\Authorization\Capabilities;

class DegreeProgramEditor implements Role
{
    public const KEY = 'degree_program_editor';

    public function key(): string
    {
        return self::KEY;
    }

    public function label(): string
    {
        return _x('Degree Program Editor', 'backend: user role label', 'fau-degree-program');
    }

    /**
     * Granted capabilities
     * @return array<string, boolean>
     */
    public function capabilities(): array
    {
        return array_fill_keys([
            Capabilities::READ,
            Capabilities::READ_DEGREE_PROGRAM,
            Capabilities::READ_PRIVATE_DEGREE_PROGRAMS,
            Capabilities::EDIT_DEGREE_PROGRAM,
            Capabilities::EDIT_DEGREE_PROGRAMS,
            Capabilities::EDIT_OTHERS_DEGREE_PROGRAMS,
            Capabilities::EDIT_PUBLISHED_DEGREE_PROGRAMS,
            Capabilities::EDIT_PRIVATE_DEGREE_PROGRAMS,
            Capabilities::PUBLISH_DEGREE_PROGRAMS,
            Capabilities::DELETE_DEGREE_PROGRAMS,
            Capabilities::DELETE_PUBLISHED_DEGREE_PROGRAMS,
            Capabilities::DELETE_OTHERS_DEGREE_PROGRAMS,
            Capabilities::ASSIGN_DEGREE_PROGRAM_TERMS,
            Capabilities::MANAGE_DEGREE_PROGRAM_TERMS,
            Capabilities::EDIT_DEGREE_PROGRAM_TERMS,
            Capabilities::DELETE_DEGREE_PROGRAM_TERMS,
            Capabilities::MANAGE_DEGREE_PROGRAM_SETTINGS,
            Capabilities::UPLOAD_FILES,
        ], true);
    }
}
