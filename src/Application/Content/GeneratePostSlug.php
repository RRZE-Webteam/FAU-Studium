<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\Content;

use Fau\DegreeProgram\Common\Application\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Domain\MultilingualString;

class GeneratePostSlug
{
    public function __construct(private DegreeProgramViewRepository $degreeProgramViewRepository)
    {
    }

    /**
     * @param int $postId
     * @return MultilingualString
     */
    public function generate(int $postId): MultilingualString
    {
        $degreeProgramId = DegreeProgramId::fromInt($postId);
        $degreeProgram = $this->degreeProgramViewRepository->findRaw($degreeProgramId);
        if ($degreeProgram === null) {
            return MultilingualString::empty();
        }

        $title = $degreeProgram->title();
        $abbreviation = $degreeProgram->degree()->abbreviation();

        $germanSlug = sanitize_title(
            sprintf(
                "%s-%s",
                $title->inGerman(),
                $abbreviation->inGerman()
            )
        );

        $englishSlug = sanitize_title(
            sprintf(
                "%s-%s",
                $title->inEnglish(),
                $abbreviation->inEnglish()
            )
        );

        return MultilingualString::fromTranslations(
            'post:slug',
            $germanSlug,
            $englishSlug
        );
    }
}
