<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\Roles;

use Fau\DegreeProgram\Infrastructure\Authorization\Capabilities;

class DegreeProgramAuthor implements Role
{
    public const KEY = 'degree_program_author';

    public function key(): string
    {
        return self::KEY;
    }

    public function label(): string
    {
        return _x('Degree Program Author', 'backend: user role label', 'fau-degree-program');
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
            Capabilities::EDIT_PUBLISHED_DEGREE_PROGRAMS,
            Capabilities::EDIT_PRIVATE_DEGREE_PROGRAMS,
            Capabilities::PUBLISH_DEGREE_PROGRAMS,
            Capabilities::ASSIGN_DEGREE_PROGRAM_TERMS,
            Capabilities::UPLOAD_FILES,
        ], true);
    }
}
