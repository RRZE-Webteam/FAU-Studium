<?php

declare(strict_types=1);

/**
 * @var array{id: string, value: string, title: string, editable: bool} $data
 */

[
    'id' => $id,
    'value' => $value,
    'title' => $title,
    'editable' => $editable,
] = $data;
?>

<input type="text"
       name="<?= esc_attr($id) ?>"
       value="<?= esc_attr($value) ?>"
       aria-label="<?= esc_attr($title) ?>"
       <?php wp_readonly(!$editable) ?>
>
