<?php

declare(strict_types=1);

use Fau\DegreeProgram\Common\Domain\MultilingualString;

/**
 * @var array{id: string, value: array{de: string, en: string}, title: string} $data
 */

[
    'id' => $id,
    'value' => $value,
    'title' => $title
] = $data;
?>

<input type="text"
       name="<?= esc_attr(sprintf('%s[%s]', $id, MultilingualString::DE)) ?>"
       value="<?= esc_attr($value[MultilingualString::DE]) ?>"
       aria-label="<?= esc_attr($title) ?>"
>
<p class="description">
    <?= esc_html_x(
        'German variant.',
        'backoffice: settings field description',
        'fau-degree-program'
    ) ?>
</p>


<br/>

<input type="text"
       name="<?= esc_attr(sprintf('%s[%s]', $id, MultilingualString::EN)) ?>"
       value="<?= esc_attr($value[MultilingualString::EN]) ?>"
       aria-label="<?= esc_attr($title) ?>"
>
<p class="description">
    <?= esc_html_x(
        'English variant.',
        'backoffice: settings field description',
        'fau-degree-program'
    )
                    ?>
</p>
