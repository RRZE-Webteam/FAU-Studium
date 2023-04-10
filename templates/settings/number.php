<?php

declare(strict_types=1);

/**
 * @var array{
 *     id: string,
 *     value: string,
 *     title: string,
 *     editable: bool,
 *     min: ?float,
 *     max: ?float,
 *     step: ?float,
 * } $data
 */

[
    'id' => $id,
    'value' => $value,
    'title' => $title,
    'editable' => $editable,
    'min' => $min,
    'max' => $max,
    'step' => $step,
] = $data;

?>

<input type="number"
       name="<?= esc_attr($id) ?>"
       value="<?= esc_attr($value) ?>"
       min="<?= esc_attr((string) $min) ?>"
       max="<?= esc_attr((string) $max) ?>"
       step="<?= esc_attr((string) $step ?: 'any') ?>"
       aria-label="<?= esc_attr($title) ?>"
       <?php wp_readonly(!$editable) ?>
>
