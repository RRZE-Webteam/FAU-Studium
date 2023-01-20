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

<tr class="form-field term-<?= esc_attr($key) ?>-wrap">
    <th scope="row"><label for="<?= esc_attr($key) ?>"><?= esc_html($title) ?></label></th>
    <td>
        <?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        <?= $renderer->render('partials/input', $data) ?>
    </td>
</tr>
