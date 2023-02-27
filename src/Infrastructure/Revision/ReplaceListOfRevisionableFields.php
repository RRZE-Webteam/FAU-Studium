<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision;

use Fau\DegreeProgram\Application\Revision\DegreeProgramRevision;
use Fau\DegreeProgram\Application\Revision\DegreeProgramRevisionRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;

class ReplaceListOfRevisionableFields
{
    public function __construct(
        private DegreeProgramRevisionRepository $degreeProgramRevisionRepository,
        private FieldRetriever $fieldRetriever,
    ) {
    }

    /**
     * Replace the list of revisionable fields for degree programs because the default fields
     * post_title, post_content, and post_excerpt don't make sense for degree programs.
     *
     * @wp-hook _wp_post_revision_fields
     */
    public function replace(array $fields, array $post): array
    {
        static $once = false;
        $postType = $post['post_type'] ?? '';
        if ($postType !== DegreeProgramPostType::KEY) {
            return $fields;
        }

        $id = (int) $post['ID'];
        $revision = $this->degreeProgramRevisionRepository->findRevision(DegreeProgramId::fromInt($id));
        if (!$revision instanceof DegreeProgramRevision) {
            return $fields;
        }

        $keyTitleMap = $revision->keyTitleMap();
        if (!$once) {
            $this->addFilters($keyTitleMap);
            $once = true;
        }

        return $keyTitleMap;
    }

    /**
     * @param array<string, string> $keyTitleMap
     * @return void
     */
    private function addFilters(array $keyTitleMap): void
    {
        foreach ($keyTitleMap as $key => $title) {
            if (has_filter("_wp_post_revision_field_{$key}")) {
                continue;
            }

            add_filter(
                "_wp_post_revision_field_{$key}",
                [$this->fieldRetriever, 'retrieve'],
                10,
                3
            );
        }
    }
}
