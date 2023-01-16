<?php

declare(strict_types=1);

/**
 * @var array{id: string, value: string, title: string} $data
 */

[
    'id' => $id,
    'value' => $value,
    'title' => $title
] = $data;
?>

<input type="text"
       name="<?= esc_attr($id) ?>"
       value="<?= esc_attr($value) ?>"
       aria-label="<?= esc_attr($title) ?>"
>
