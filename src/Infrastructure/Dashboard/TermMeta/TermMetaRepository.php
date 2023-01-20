<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

final class TermMetaRepository
{
    public function retrieve(int $termId, string $key): mixed
    {
        return get_term_meta($termId, $key, true);
    }

    public function update(int $termId, string $key, mixed $value): void
    {
        update_term_meta($termId, $key, $value);
    }
}
