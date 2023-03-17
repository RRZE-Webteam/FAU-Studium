<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramEditor;

use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use WP_Screen;

final class CodeEditingDisabler
{
    /**
     * @wp-hook block_editor_settings_all
     */
    public function disableForDegreeProgram(array $settings): array
    {
        $currentScreen = get_current_screen();

        if (!$currentScreen instanceof WP_Screen || $currentScreen->post_type !== DegreeProgramPostType::KEY) {
            return $settings;
        }

        $settings['codeEditingEnabled'] = false;

        return $settings;
    }
}
