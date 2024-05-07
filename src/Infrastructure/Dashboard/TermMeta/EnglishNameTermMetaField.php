<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use Fau\DegreeProgram\Common\Infrastructure\Repository\BilingualRepository;

final class EnglishNameTermMetaField extends InputTermMetaField
{
    use NoValidationTermMetaFieldTrait;

    public function __construct()
    {

        parent::__construct(
            BilingualRepository::addEnglishSuffix('name'),
            _x(
                'English name',
                'backoffice: term field name',
                'fau-degree-program'
            ),
            _x(
                'Name used for English translation.',
                'backoffice: term field description',
                'fau-degree-program'
            ),
        );
    }
}
