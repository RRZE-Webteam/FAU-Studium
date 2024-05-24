<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

class TermMetaFieldValidationPattern
{
    /**
     * @param non-empty-string $pattern regex pattern without delimiters
     * @param string $expectedPatternMessage message to display as the expected pattern
     */
    public function __construct(
        private string $pattern,
        private string $expectedPatternMessage = '',
    ) {
    }

    public function matches(string $value): bool
    {
        return (bool) preg_match(
            '/' . $this->pattern() . '/',
            $value
        );
    }

    /**
     * @return non-empty-string
     */
    public function pattern(): string
    {
        return $this->pattern;
    }

    public function expectedPatternMessage(): string
    {
        return $this->expectedPatternMessage;
    }
}
