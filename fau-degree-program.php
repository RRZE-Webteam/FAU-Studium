<?php

/**
 * Plugin Name: FAU Degree Program Management
 * Plugin URI:  https://github.com/RRZE-Webteam/FAU-Studium
 * Description: Add and edit degree programs and expose them via the REST API.
 * Version:     0.0.11
 * Author:      Inpsyde GmbH
 * Author URI:  https://inpsyde.com/
 * Update URI:  false
 * GitHub Plugin URI: RRZE-Webteam/FAU-Studium
 * License:     GPL-2.0-or-later
 * Text Domain: fau-degree-program
 * Domain Path: /languages
 */

declare(strict_types=1);

namespace Fau\DegreeProgram;

// phpcs:disable PSR1.Files.SideEffects

use Fau\DegreeProgram\Infrastructure\Authorization\AuthorizationModule;
use Fau\DegreeProgram\Infrastructure\Authorization\UserRolesModifier;
use Fau\DegreeProgram\Infrastructure\Authorization\UserRolesRegistrar;
use Fau\DegreeProgram\Infrastructure\Authorization\WorkflowAuthor\WorkflowAuthorModule;
use Fau\DegreeProgram\Infrastructure\Cache\CacheModule;
use Fau\DegreeProgram\Infrastructure\CliModule;
use Fau\DegreeProgram\Infrastructure\Command\CommandModule;
use Fau\DegreeProgram\Infrastructure\Content\ContentModule;
use Fau\DegreeProgram\Infrastructure\Dashboard\AdminBarModule;
use Fau\DegreeProgram\Infrastructure\Dashboard\DegreeProgramEditor\DegreeProgramEditorModule;
use Fau\DegreeProgram\Infrastructure\Dashboard\Settings\SettingsModule;
use Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta\TermMetaModule;
use Fau\DegreeProgram\Infrastructure\EventDispatcherModule;
use Fau\DegreeProgram\Infrastructure\LoggerModule;
use Fau\DegreeProgram\Infrastructure\Migration\MigrationModule;
use Fau\DegreeProgram\Infrastructure\Patches\PatchesModule;
use Fau\DegreeProgram\Infrastructure\QueueModule;
use Fau\DegreeProgram\Infrastructure\Repository\RepositoryModule;
use Fau\DegreeProgram\Infrastructure\RestApi\RestApiModule;
use Fau\DegreeProgram\Infrastructure\Revision\Notification\RevisionNotificationModule;
use Fau\DegreeProgram\Infrastructure\Revision\RevisionModule;
use Fau\DegreeProgram\Infrastructure\SanitizerModule;
use Fau\DegreeProgram\Infrastructure\TranslationModule;
use Inpsyde\Modularity\Package;
use Inpsyde\Modularity\Properties\PluginProperties;
use RuntimeException;
use Throwable;

/**
 * Display an error message in the WP admin.
 *
 * @param string $message The message content
 *
 * @return void
 */
function errorNotice(string $message): void
{
    add_action(
        'all_admin_notices',
        static function () use ($message) {
            $class = 'notice notice-error';
            printf(
                '<div class="%1$s"><p>%2$s</p></div>',
                esc_attr($class),
                wp_kses_post($message)
            );
        }
    );
}

/**
 * Handle any exception that might occur during plugin setup.
 *
 * @param Throwable $throwable The Exception
 *
 * @return void
 */
function handleException(Throwable $throwable): void
{
    do_action('fau.degree-program.critical', $throwable);

    errorNotice(
        sprintf(
            '<strong>Error:</strong> %s <br><pre>%s</pre>',
            $throwable->getMessage(),
            $throwable->getTraceAsString()
        )
    );
}

/**
 * Provide the plugin instance.
 *
 * @link https://github.com/inpsyde/modularity#access-from-external
 */
function plugin(): Package
{
    /** @var Package|null $package */
    static $package;
    if (!$package) {
        $properties = PluginProperties::new(__FILE__);
        $package = Package::new($properties);
    }

    return $package;
}

function setUpAutoloader(): void
{
    if (class_exists(ContentModule::class)) {
        return;
    }

    if (!is_readable(__DIR__ . '/vendor/autoload.php')) {
        throw new RuntimeException('Composer autoload file does not exist.');
    }

    require_once __DIR__ . '/vendor/autoload.php';
}

/**
 * Initialize plugin.
 *
 * @throws Throwable
 */
function initialize(): void
{
    try {
        setUpAutoloader();

        // Initialize plugin
        plugin()->boot(
            new TranslationModule(),
            new ContentModule(),
            new TermMetaModule(),
            new SettingsModule(),
            new RevisionModule(__FILE__),
            new RepositoryModule(),
            new CommandModule(),
            new DegreeProgramEditorModule(),
            new RestApiModule(),
            new LoggerModule(),
            new SanitizerModule(),
            new EventDispatcherModule(),
            new CacheModule(),
            new CliModule(),
            new AdminBarModule(),
            new QueueModule(),
            new WorkflowAuthorModule(),
            new AuthorizationModule(),
            new MigrationModule(),
            new RevisionNotificationModule(),
            new PatchesModule(),
        );
    } catch (Throwable $throwable) {
        handleException($throwable);
    }
}

add_action('plugins_loaded', __NAMESPACE__ . '\\initialize');

register_activation_hook(
    __FILE__,
    static function (): void {
        setUpAutoloader();
        UserRolesRegistrar::register();
        UserRolesModifier::modify();
    },
);
