<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

class CampoKeyTermMetaField extends InputTermMetaField
{
    public const KEY = 'uniquename';

    public function __construct(
        string $description,
        TermMetaFieldValidationPattern $validationPattern = null,
    ) {

        parent::__construct(
            self::KEY,
            __('Campo Key', 'fau-degree-program'),
            $description,
            validationPattern: $validationPattern,
        );
    }
}
