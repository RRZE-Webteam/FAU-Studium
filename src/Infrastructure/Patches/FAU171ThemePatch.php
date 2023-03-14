<?php

/**
 * A `pre_get_posts` hook in the "FAU Einrichtungen" theme wrongly manipulates
 * REST API search results.
 * This patch removes the hook when in REST API context.
 *
 * @see https://github.com/RRZE-Webteam/FAU-Einrichtungen/blob/c5217d233b22887e3685d2ac1366fdb011a69749/functions/filters.php#L68-L91
 */

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Patches;

class FAU171ThemePatch implements Patch
{
    public function apply(): void
    {
        add_action(
            'rest_api_init',
            static fn () => remove_action('pre_get_posts', 'fau_searchfilter')
        );
    }
}
