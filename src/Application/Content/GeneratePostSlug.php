<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\Content;

use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Domain\MultilingualString;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;

class GeneratePostSlug
{
    public function __construct(
        private DegreeProgramViewRepository $degreeProgramViewRepository,
        private IdGenerator $idGenerator,
    ) {
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
            $this->idGenerator->generatePostId($postId, 'post_name'),
            $germanSlug,
            $englishSlug
        );
    }
}
