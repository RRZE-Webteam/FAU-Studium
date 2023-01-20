<?php

declare(strict_types=1);

use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer;

/**
 * @var array{key: string, value: string, title: string, description: string, type: string} $data
 * @var Renderer $renderer
 */

[
    'key' => $key,
    'title' => $title,
] = $data;

?>

<div class="form-field term-<?= esc_attr($key) ?>-wrap">
    <label for="<?= esc_attr($key) ?>"><?= esc_html($title) ?></label>
    <?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
    <?= $renderer->render('partials/input', $data) ?>
</div>
