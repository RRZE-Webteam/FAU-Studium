<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\Event;

use Stringable;

final class RevisionNotificationCompleted implements Stringable
{
    public const NAME = 'degree_program_revision_notification_completed';

    /**
     * @var array<int>
     */
    private array $processedIds;

    private function __construct(int ...$processedIds)
    {
        $this->processedIds = $processedIds;
    }

    public static function new(int ...$processedIds): self
    {
        return new self(...$processedIds);
    }

    /**
     * @return array<int>
     */
    public function processedIds(): array
    {
        return $this->processedIds;
    }

    public function __toString(): string
    {
        return self::NAME;
    }
}
