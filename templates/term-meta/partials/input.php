<?php

declare(strict_types=1);

/**
 * @var array{
 *     key: string,
 *     description: string,
 *     minLength: ?int,
 *     maxLength: ?int,
 *     title: string,
 *     type: string,
 *     value: string
 * } $data
 */

[
    'key' => $key,
    'description' => $description,
    'minLength' => $minLength,
    'maxLength' => $maxLength,
    'type' => $type,
    'value' => $value,
] = $data;

?>


<input name="<?= esc_attr($key) ?>"
       id="<?= esc_attr($key) ?>"
       type="<?= esc_attr($type) ?>"
       value="<?= esc_attr($value) ?>"
       size="40"
       <?php if ($description) : ?>
           aria-describedby="<?= esc_attr($key) ?>-description"
       <?php endif ?>
       <?php if (! is_null($minLength)) : ?>
           minlength="<?= esc_attr((string) $minLength) ?>"
       <?php endif ?>
       <?php if (! is_null($maxLength)) : ?>
           maxlength="<?= esc_attr((string) $maxLength) ?>"
       <?php endif ?>
/>
<?php if ($description) : ?>
    <p class="description" id="<?= esc_attr($key) ?>-description">
        <?= wp_kses_post($description) ?>
    </p>
<?php endif; ?>
