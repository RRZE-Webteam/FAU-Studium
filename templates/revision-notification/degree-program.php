<?php

declare(strict_types=1);

use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer;

/**
 * @var array{
 *     degree_program: array{
 *     id: string,
 *     title: string,
 *     link: string,
 *     revisions: array
 *    }
 * } $data
 * @var Renderer $renderer
 */

[
    'degree_program' => $degreeProgram,
] = $data;

$revisionsCount = count($degreeProgram['revisions']);
?>

<h2># <?= esc_html($degreeProgram['id']) ?> <a href="<?= esc_url($degreeProgram['link']) ?>">
        <?= esc_html($degreeProgram['title']) ?>
    </a>
</h2>

<p><?= esc_html(
    sprintf(
        /* translators: %s - amount of revisions */
        _n(
            '%d revision was created.',
            '%d revisions were created.',
            $revisionsCount,
            'fau-degree-program'
        ),
        $revisionsCount
    )
) ?>
</p>

<?php foreach ($degreeProgram['revisions'] as $revision) : ?>
    <?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
    <?= $renderer->render('revision', ['revision' => $revision]) ?>
<?php endforeach ?>
