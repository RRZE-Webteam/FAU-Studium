<?php

declare(strict_types=1);

use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer;

/**
 * @var array{
 *     last_run_formatted_date_time: string,
 *     changed_degree_programs: array
 *     } $data
 * @var Renderer $renderer
 */

[
    'last_run_formatted_date_time' => $lastRunFormattedDateTime,
    'changed_degree_programs' => $changedDegreePrograms,
] = $data;
$changedDegreeProgramsCount = count($changedDegreePrograms);
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=<?php bloginfo('charset') ?>"/>
    <title><?= esc_html(get_bloginfo('name', 'display')) ?></title>
</head>

<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">

<?php if ($lastRunFormattedDateTime) : ?>
<p>
    <?= sprintf(
            /* translators: %s - formatted date and time of previous notification */
        esc_html_x(
            'We inform about degree programs changes from %s.',
            'backoffice: revision notification',
            'fau-degree-program'
        ),
        esc_html($lastRunFormattedDateTime)
    ) ?>
</p>
<?php else : ?>
    <?=
        esc_html_x(
            'We inform about degree programs changes from the very beginning.',
            'backoffice: revision notification',
            'fau-degree-program'
        )
    ?>
<?php endif; ?>

<p><?= esc_html(
    sprintf(
        /* translators: %s - amount of changed degree programs */
        _nx(
            'During the period, %d degree program was changed.',
            'During the period, %d degree programs were changed.',
            $changedDegreeProgramsCount,
            'backoffice: revision notification',
            'fau-degree-program'
        ),
        $changedDegreeProgramsCount
    )
) ?>
</p>

<?php foreach ($changedDegreePrograms as $degreeProgram) : ?>
    <?php // phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped ?>
    <?= $renderer->render(
        'degree-program',
        ['degree_program' => $degreeProgram]
    ) ?>
    <?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped ?>
<?php endforeach ?>
</body>
