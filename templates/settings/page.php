<?php

declare(strict_types=1);

/**
 * @var array{id: string, editable: bool} $data
 */

[
    'id' => $id,
    'editable' => $editable
] = $data;

?>

<div class="wrap fau-settings">
    <h1><?= esc_html(get_admin_page_title()); ?></h1>
    <?php if ($editable) : ?>
    <form action="options.php" method="post">
        <?php
        settings_fields($id);
        do_settings_sections($id);
        submit_button(__('Save Settings', 'fau-degree-program'));
        ?>
    </form>
    <?php else : ?>
        <?php
        settings_fields($id);
        do_settings_sections($id);
        ?>
    <?php endif ?>
</div>
