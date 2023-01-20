<?php

declare(strict_types=1);

/**
 * @var array{id: string} $data
 */

[
    'id' => $id,
] = $data;

?>

<div class="wrap fau-settings">
    <h1><?= esc_html(get_admin_page_title()); ?></h1>
    <form action="options.php" method="post">
        <?php
        settings_fields($id);
        do_settings_sections($id);
        submit_button(__('Save Settings', 'fau-degree-program'));
        ?>
    </form>
</div>
