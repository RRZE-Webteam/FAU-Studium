<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use ArrayObject;
use Fau\DegreeProgram\Common\Domain\MultilingualLink;
use Fau\DegreeProgram\Common\Infrastructure\Repository\BilingualRepository;

/**
 * @template-extends ArrayObject<int, InputTermMetaField>
 */
final class MultilingualLinkTermMetaFields extends ArrayObject
{
    public function __construct()
    {
        parent::__construct([
                new InputTermMetaField(
                    MultilingualLink::LINK_TEXT,
                    _x(
                        'Link text',
                        'backoffice: term field name',
                        'fau-degree-program'
                    )
                ),
                new UrlTermMetaField(
                    MultilingualLink::LINK_URL,
                    _x(
                        'Link URL',
                        'backoffice: term field name',
                        'fau-degree-program'
                    )
                ),
                new EnglishNameTermMetaField(),
                new InputTermMetaField(
                    BilingualRepository::addEnglishSuffix(MultilingualLink::LINK_TEXT),
                    _x(
                        'English link text',
                        'backoffice: term field name',
                        'fau-degree-program'
                    ),
                    _x(
                        'Link text used for English translation.',
                        'backoffice: term field description',
                        'fau-degree-program'
                    ),
                ),
                new UrlTermMetaField(
                    BilingualRepository::addEnglishSuffix(MultilingualLink::LINK_URL),
                    _x(
                        'English link URL',
                        'backoffice: term field name',
                        'fau-degree-program'
                    ),
                    _x(
                        'Link URL used for English translation.',
                        'backoffice: term field description',
                        'fau-degree-program'
                    ),
                ),
            ]);
    }
}
