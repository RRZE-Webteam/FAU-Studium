<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Cache;

use Fau\DegreeProgram\Common\Application\Cache\CacheInvalidator;

final class WhenDegreeProgramSharedPropertyUpdated
{
    public function __construct(
        private CacheInvalidator $cacheInvalidator
    ) {
    }

    public function invalidateCache(): void
    {
        static $once = false;

        if ($once) {
            // Only run once, even if multiple options are saved in a single request.
            return;
        }

        $once = true;
        $this->cacheInvalidator->invalidateFully();
    }
}
