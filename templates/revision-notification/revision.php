<?php

declare(strict_types=1);

/**
 * @var array{
 *     revision: array{
 *      link: string,
 *      date: string,
 *      author: string,
 *      diffs: array<array{id: string, name: string, diff: string}>
 *    }
 *  } $data
 */

[
    'revision' => $revision,
] = $data;

?>

<h3>
    <?= sprintf(
    /* translators: %1$s - link to revision, %2$s - revision date, %3$s - revision author  */
        _x( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            'Revision at <a href="%1$s">%2$s</a> by %3$s.',
            'backoffice: revision notification',
            'fau-degree-program'
        ),
        esc_url($revision['link']),
        esc_html($revision['date']),
        esc_html($revision['author'])
    ) ?>
</h3>

<?php foreach ($revision['diffs'] as $diff) : ?>
    <h4><?= esc_html($diff['name']) ?></h4>
    <?php //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
    <?= $diff['diff'] // already escaped with \WP_Text_Diff_Renderer_Table ?>
<?php endforeach ?>
