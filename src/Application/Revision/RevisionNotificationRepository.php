<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\Revision;

interface RevisionNotificationRepository
{
    /**
     * @return array<int> user IDs
     */
    public function findUsersToBeNotifiedForLastRevisions(): array;

    /**
     * @psalm-return array<int, array<int>> array keyed with Degree Program ID of revisions IDs
     */
    public function findLastRevisionsForUser(int $userId): array;

    public function findPreviousRevision(int $degreeProgramId, int $revisionId): int;
}
