<?php

declare(strict_types=1);

use Fau\DegreeProgram\Infrastructure\Dashboard\Settings\SettingsPage;

/**
 * @var array{id: string, editable: bool, tabs: SettingsPage[], currentTab: string} $data
 */

[
    'id' => $id,
    'editable' => $editable,
    'tabs' => $tabs,
    'currentTab' => $currentTab,
] = $data;

?>

<div class="wrap fau-settings">
    <h1><?= esc_html(get_admin_page_title()) ?></h1>

    <nav class="nav-tab-wrapper">
        <?php foreach ($tabs as $tab) : ?>
            <a
                href="<?= esc_url(add_query_arg('tab', $tab->id())) ?>"
                class="nav-tab <?= $currentTab === $tab->id() ? 'nav-tab-active' : '' ?>"
            >
                <?= esc_html($tab->title()) ?>
            </a>
        <?php endforeach ?>
    </nav>

    <?php if ($editable) : ?>
    <form action="options.php" method="post">
        <?php
        settings_fields($currentTab);
        do_settings_sections($currentTab);
        submit_button(__('Save Changes'));
        ?>
    </form>
    <?php else : ?>
        <?php
        settings_fields($currentTab);
        do_settings_sections($currentTab);
        ?>
    <?php endif ?>
</div>
