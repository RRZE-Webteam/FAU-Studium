<?php

declare(strict_types=1);

/**
 * @var array{key: string, value: string, title: string, description: string, type: string} $data
 */

[
    'key' => $key,
    'value' => $value,
    'description' => $description,
    'type' => $type,
] = $data;

?>


<input name="<?= esc_attr($key) ?>"
       id="<?= esc_attr($key) ?>"
       type="<?= esc_attr($type) ?>"
       value="<?= esc_attr($value) ?>"
       size="40"
       <?php if ($description) : ?>
           aria-describedby="<?= esc_attr($key) ?>-description"
       <?php endif; ?>
/>
<?php if ($description) : ?>
    <p class="description" id="<?= esc_attr($key) ?>-description">
        <?= wp_kses_post($description) ?>
    </p>
<?php endif; ?>
