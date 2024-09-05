<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Cache;

use Fau\DegreeProgram\Common\Application\Event\CacheInvalidated;
use Fau\DegreeProgram\Common\Application\Queue\MessageBus;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Repository\TimestampRepository;

final class WhenCacheInvalidated
{
    public function __construct(
        private MessageBus $messageBus,
        private TimestampRepository $timestampRepository,
    ) {
    }

    public function scheduleWarming(CacheInvalidated $event): void
    {
        $this->messageBus->dispatch(
            WarmCacheMessage::new($event->isFully(), $event->ids())
        );
    }

    public function updateModifiedDate(CacheInvalidated $event): void
    {
        if ($event->reason() !== CacheInvalidated::DATA_CHANGED) {
            return;
        }

        $ids = $event->ids();

        if ($event->isFully()) {
            /** @var array<int> $ids */
            $ids = get_posts([
                'numberposts' => -1,
                'post_type' => DegreeProgramPostType::KEY,
                'post_status' => 'any',
                'fields' => 'ids',
            ]);
        }

        foreach ($ids as $id) {
            $this->timestampRepository->updateModified(DegreeProgramId::fromInt($id));
        }
    }
}
