<?php

declare(strict_types=1);

/**
 * @var array{
 *     id: string,
 *     value: array{
 *          name: string,
 *          name_en: string,
 *          link_text: string,
 *          link_text_en: string,
 *          link_url: string,
 *          link_url_en: string,
 *         },
 *     sub_fields: array{
 *          name: string,
 *          name_en: string,
 *          link_text: string,
 *          link_text_en: string,
 *          link_url: string,
 *          link_url_en: string,
 *         },
 *     title: string,
 *     editable: bool
 *   } $data
 */

[
    'id' => $id,
    'value' => $value,
    'title' => $title,
    'sub_fields' => $subFields,
    'editable' => $editable,
] = $data;
?>

<?php foreach ($subFields as $subFieldId => $subFieldTitle) : ?>
    <input type="text"
           name="<?= esc_attr(sprintf('%s[%s]', $id, $subFieldId)) ?>"
           value="<?= esc_attr($value[$subFieldId]) ?>"
           aria-label="<?= esc_attr($title . ': ' . $subFieldTitle) ?>"
           <?php wp_readonly(!$editable) ?>
    >
    <p class="description">
        <?= esc_html($subFieldTitle) ?>
    </p>
    <br/>
<?php endforeach; ?>
