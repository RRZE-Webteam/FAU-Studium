<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use Fau\DegreeProgram\Common\Infrastructure\Repository\CampoKeysRepository;

class CampoKeyTermMetaField extends InputTermMetaField
{
    public function __construct(
        string $description,
        TermMetaFieldValidationPattern $validationPattern = null,
    ) {

        parent::__construct(
            CampoKeysRepository::CAMPO_KEY_TERM_META_KEY,
            __('Campo Key', 'fau-degree-program'),
            $description,
            validationPattern: $validationPattern,
        );
    }
}
