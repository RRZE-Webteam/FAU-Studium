<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure;

use Fau\DegreeProgram\Common\Domain\DegreeProgramSanitizer;
use Fau\DegreeProgram\Common\Infrastructure\Sanitizer\HtmlDegreeProgramSanitizer;
use Fau\DegreeProgram\Common\Infrastructure\Sanitizer\SerializedBlocksDegreeProgramSanitizer;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;

final class SanitizerModule implements ServiceModule
{
    use ModuleClassNameIdTrait;

    public function services(): array
    {
        return [
            SerializedBlocksDegreeProgramSanitizer::class =>
                static fn(): DegreeProgramSanitizer => new SerializedBlocksDegreeProgramSanitizer(),
            HtmlDegreeProgramSanitizer::class =>
                static fn(): DegreeProgramSanitizer => new HtmlDegreeProgramSanitizer(),
        ];
    }
}
