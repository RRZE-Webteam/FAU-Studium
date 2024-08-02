<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Repository;

use Fau\DegreeProgram\Application\Revision\DegreeProgramRevision;
use Fau\DegreeProgram\Application\Revision\DegreeProgramRevisionRepository;
use Fau\DegreeProgram\Common\Application\Cache\CacheKeyGenerator;
use Fau\DegreeProgram\Common\Application\DegreeProgramViewRaw;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\AdmissionRequirement;
use Fau\DegreeProgram\Common\Domain\AdmissionRequirements;
use Fau\DegreeProgram\Common\Domain\Content;
use Fau\DegreeProgram\Common\Domain\Degree;
use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Domain\DegreeProgramIds;
use Fau\DegreeProgram\Common\Domain\Image;
use Fau\DegreeProgram\Common\Domain\MultilingualLink;
use Fau\DegreeProgram\Common\Domain\MultilingualLinks;
use Fau\DegreeProgram\Common\Domain\MultilingualList;
use Fau\DegreeProgram\Common\Domain\MultilingualString;
use Fau\DegreeProgram\Common\Domain\NumberOfStudents;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;
use Psr\SimpleCache\CacheInterface;
use WP_Post;

final class CacheBasedRevisionRepository implements DegreeProgramRevisionRepository
{
    private const ENGLISH_KEY = MultilingualString::LANGUAGES[MultilingualString::EN];

    public function __construct(
        private CacheKeyGenerator $cacheKeyGenerator,
        private CacheInterface $cache,
        private DegreeProgramViewRepository $uncachedDegreeProgramViewRepository,
        private DegreeProgramViewRepository $degreeProgramViewRepository,
        private IdGenerator $idGenerator,
    ) {
    }

    public function addRevision(DegreeProgramId $degreeProgramId, DegreeProgramId $revisionId): void
    {
        $rawView = $this->uncachedDegreeProgramViewRepository->findRaw($degreeProgramId);
        if (!$rawView instanceof DegreeProgramViewRaw) {
            return;
        }

        $cacheKey = $this->cacheKeyGenerator->generateForDegreeProgram($revisionId);
        $this->cache->set($cacheKey, $rawView->asArray());

        $this->saveStatus($degreeProgramId, $revisionId);
    }

    private function saveStatus(DegreeProgramId $degreeProgramId, DegreeProgramId $revisionId): void
    {
        $degreeProgramPost = get_post($degreeProgramId->asInt());
        if (!$degreeProgramPost instanceof WP_Post) {
            return;
        }

        update_metadata(
            'post',
            $revisionId->asInt(),
            DegreeProgramRevision::STATUS,
            $degreeProgramPost->post_status
        );
    }

    /**
     * phpcs:disable Inpsyde.CodeQuality.FunctionLength.TooLong
     */
    public function findRevision(DegreeProgramId $revisionId): ?DegreeProgramRevision
    {
        /** @var array<int, DegreeProgramRevision|null> $cache */
        static $cache = [];
        if (
            array_key_exists($revisionId->asInt(), $cache)
            // Original post can be changed several times during request
            && !self::isParentPost($revisionId->asInt())
        ) {
            return $cache[$revisionId->asInt()];
        }

        $rawRevision = $this->degreeProgramViewRepository->findRaw($revisionId);
        if (!$rawRevision instanceof DegreeProgramViewRaw) {
            $cache[$revisionId->asInt()] = null;
            return null;
        }

        /** @var array<string, string> $data */
        $data = array_merge(
            [
                DegreeProgramRevision::STATUS => self::status($revisionId->asInt()),
                DegreeProgram::FEATURED_IMAGE => self::imageToContextualId($rawRevision->featuredImage()),
                DegreeProgram::TEASER_IMAGE => self::imageToContextualId($rawRevision->teaserImage()),
            ],
            self::multilingualStringToFlatArray(DegreeProgram::TITLE, $rawRevision->title()),
            self::multilingualStringToFlatArray(DegreeProgram::SUBTITLE, $rawRevision->subtitle()),
            [
                DegreeProgram::STANDARD_DURATION => $rawRevision->standardDuration() ?: '',
                DegreeProgram::FEE_REQUIRED => $rawRevision->isFeeRequired() ? 'yes' : 'no',
                DegreeProgram::START => $this->arrayLikeStructureToContextualIdList($rawRevision->start()),
                DegreeProgram::NUMBER_OF_STUDENTS => $this->structureToContextualId($rawRevision->numberOfStudents()),
                DegreeProgram::TEACHING_LANGUAGE => $this->structureToContextualId($rawRevision->teachingLanguage()),
                DegreeProgram::ATTRIBUTES => $this->arrayLikeStructureToContextualIdList($rawRevision->attributes()),
                DegreeProgram::DEGREE => $this->structureToContextualId($rawRevision->degree()),
                DegreeProgram::FACULTY => $this->arrayLikeStructureToContextualIdList($rawRevision->faculty()),
                DegreeProgram::LOCATION => $this->arrayLikeStructureToContextualIdList($rawRevision->location()),
                DegreeProgram::SUBJECT_GROUPS => $this->arrayLikeStructureToContextualIdList($rawRevision->subjectGroups()),
                DegreeProgram::VIDEOS => implode(', ', $rawRevision->videos()->getArrayCopy()),
            ],
            self::multilingualStringToFlatArray(DegreeProgram::META_DESCRIPTION, $rawRevision->metaDescription()),
            self::contentToFlatArray($rawRevision->content()),
            [
                self::key(
                    DegreeProgram::ADMISSION_REQUIREMENTS,
                    AdmissionRequirements::BACHELOR_OR_TEACHING_DEGREE
                ) => $this->structureToContextualId($rawRevision->admissionRequirements()->bachelorOrTeachingDegree()),
                self::key(
                    DegreeProgram::ADMISSION_REQUIREMENTS,
                    AdmissionRequirements::TEACHING_DEGREE_HIGHER_SEMESTER
                ) => $this->structureToContextualId($rawRevision->admissionRequirements()->teachingDegreeHigherSemester()),
                self::key(
                    DegreeProgram::ADMISSION_REQUIREMENTS,
                    AdmissionRequirements::MASTER
                ) => $this->structureToContextualId($rawRevision->admissionRequirements()->master()),
            ],
            self::multilingualStringToFlatArray(DegreeProgram::CONTENT_RELATED_MASTER_REQUIREMENTS, $rawRevision->contentRelatedMasterRequirements()),
            [
                DegreeProgram::APPLICATION_DEADLINE_WINTER_SEMESTER => $rawRevision->applicationDeadlineWinterSemester(),
                DegreeProgram::APPLICATION_DEADLINE_SUMMER_SEMESTER => $rawRevision->applicationDeadlineSummerSemester(),
            ],
            self::multilingualStringToFlatArray(DegreeProgram::DETAILS_AND_NOTES, $rawRevision->detailsAndNotes()),
            self::multilingualStringToFlatArray(DegreeProgram::LANGUAGE_SKILLS, $rawRevision->languageSkills()),
            [
                DegreeProgram::LANGUAGE_SKILLS_HUMANITIES_FACULTY =>
                    $rawRevision->languageSkillsHumanitiesFaculty(),
                DegreeProgram::GERMAN_LANGUAGE_SKILLS_FOR_INTERNATIONAL_STUDENTS =>
                    $this->structureToContextualId($rawRevision->germanLanguageSkillsForInternationalStudents()),
                DegreeProgram::EXAMINATIONS_OFFICE => $this->structureToContextualId($rawRevision->examinationsOffice()),
                DegreeProgram::MODULE_HANDBOOK => $rawRevision->moduleHandbook(),
            ],
            self::multilingualStringToFlatArray(DegreeProgram::URL, $rawRevision->url()),
            self::multilingualStringToFlatArray(DegreeProgram::DEPARTMENT, $rawRevision->department()),
            [
                DegreeProgram::EXAMINATION_REGULATIONS => $rawRevision->examinationRegulations(),
                DegreeProgram::SUBJECT_SPECIFIC_ADVICE => $this->structureToContextualId($rawRevision->subjectSpecificAdvice()),
                DegreeProgram::INFO_BROCHURE => $rawRevision->infoBrochure(),
            ],
            self::multilingualStringToFlatArray(DegreeProgram::DEGREE_PROGRAM_FEES, $rawRevision->degreeProgramFees()),
            [
                DegreeProgram::KEYWORDS => $this->arrayLikeStructureToContextualIdList($rawRevision->keywords()),
                DegreeProgram::AREA_OF_STUDY => $this->arrayLikeStructureToContextualIdList($rawRevision->areaOfStudy()),
                DegreeProgram::COMBINATIONS => $this->combinationsToContextualIdList($rawRevision->combinations()),
                DegreeProgram::LIMITED_COMBINATIONS => $this->combinationsToContextualIdList($rawRevision->limitedCombinations()),
                DegreeProgram::APPLY_NOW_LINK => $this->structureToContextualId($rawRevision->applyNowLink()),
                DegreeProgram::CAMPO_KEYS => implode(', ', $rawRevision->campoKeys()->asArray()),
            ],
            self::multilingualStringToFlatArray(DegreeProgram::ENTRY_TEXT, $rawRevision->entryText()),
        );

        $cache[$revisionId->asInt()] = DegreeProgramRevision::fromArray($data);
        return $cache[$revisionId->asInt()];
    }

    private static function key(string ...$parts): string
    {
        return implode('.', $parts);
    }

    private static function multilingualStringToFlatArray(string $key, MultilingualString $string): array
    {
        return [
            $key => $string->inGerman(),
            self::key($key, self::ENGLISH_KEY) => $string->inEnglish(),
        ];
    }

    private static function contentToFlatArray(Content $content): array
    {
        $data = $content->asArray();
        $result = [];
        foreach ($data as $key => $contentItem) {
            $germanKey = self::key(DegreeProgram::CONTENT, $key);
            $result[$germanKey] = $contentItem['description'][MultilingualString::DE];

            $englishKey = self::key(DegreeProgram::CONTENT, $key, self::ENGLISH_KEY);
            $result[$englishKey] = $contentItem['description'][MultilingualString::EN];
        }

        return $result;
    }

    private static function imageToContextualId(Image $image): string
    {
        return self::contextualId($image->id(), $image->url());
    }

    private function arrayLikeStructureToContextualIdList(MultilingualList|MultilingualLinks $list): string
    {
        $pieces = [];
        /** @var MultilingualString|MultilingualLink $item */
        foreach ($list as $item) {
            $piece = $this->structureToContextualId($item);
            if (!$piece) {
                continue;
            }
            $pieces[] = $piece;
        }

        return implode(', ', $pieces);
    }

    private function structureToContextualId(
        MultilingualString|Degree|MultilingualLink|NumberOfStudents|AdmissionRequirement $structure
    ): string {

        $name = '';

        if ($structure instanceof MultilingualString) {
            $name = $structure->inGerman();
        }

        if ($structure instanceof NumberOfStudents) {
            $name = $structure->name();
        }

        if (
            $structure instanceof Degree
            || $structure instanceof MultilingualLink
            || $structure instanceof AdmissionRequirement
        ) {
            $name = $structure->name()->inGerman();
        }

        return self::contextualId($this->idGenerator->termIdsList($structure)[0] ?? 0, $name);
    }

    private function combinationsToContextualIdList(DegreeProgramIds $combination): string
    {
        $pieces = [];
        /** @var DegreeProgramId $id */
        foreach ($combination as $id) {
            $piece = self::contextualId($id->asInt(), get_the_title($id->asInt()));
            if (!$piece) {
                continue;
            }
            $pieces[] = $piece;
        }

        return implode(', ', $pieces);
    }

    private static function contextualId(int $id, string $context): string
    {
        if (!$id) {
            return '';
        }

        if (!$context) {
            return (string) $id;
        }

        return sprintf('%d (%s)', $id, $context);
    }

    private static function status(int $postId): string
    {
        $post = get_post($postId);
        if (!$post instanceof WP_Post) {
            return '';
        }

        if ($post->post_type === DegreeProgramPostType::KEY) {
            return $post->post_status;
        }

        return (string) get_post_meta($postId, DegreeProgramRevision::STATUS, true);
    }

    private static function isParentPost(int $postId): bool
    {
        $post = get_post($postId);
        if (!$post instanceof WP_Post) {
            return false;
        }

        return $post->post_parent === 0;
    }
}
