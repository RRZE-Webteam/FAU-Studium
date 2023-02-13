<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

use Fau\DegreeProgram\Common\Domain\Content;
use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Domain\MultilingualString;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\DirectoryLocator;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\TemplateRenderer;
use Inpsyde\Assets\AssetManager;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Inpsyde\Modularity\Package;
use Psr\Container\ContainerInterface;

final class SettingsModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    private const SETTINGS_FIELD_RENDERER = 'settings_field_renderer';

    private const FAU_CONTENT_ITEM_TITLES = 'fau_content_item_titles';
    private const FAU_DEGREE_PROGRAM_SHARED_PROPERTIES = 'fau_degree_program_shared_properties';
    //@TODO: consider specific capability like 'edit_fau_central_settings'
    private const CAPABILITY = 'delete_users';

    public function services(): array
    {
        return [
            self::SETTINGS_FIELD_RENDERER => static fn(ContainerInterface $container): Renderer => TemplateRenderer::new(
                DirectoryLocator::new(
                    $container->get(Package::PROPERTIES)->basePath() . '/templates/settings'
                )
            ),
            SettingsRegistrar::class => static fn(ContainerInterface $container): SettingsRegistrar => new SettingsRegistrar(
                $container->get(SettingsModule::SETTINGS_FIELD_RENDERER),
            ),
            SettingAssetsLoader::class => static fn(ContainerInterface $container): SettingAssetsLoader => new SettingAssetsLoader(
                $container->get(Package::PROPERTIES),
                [
                    self::FAU_CONTENT_ITEM_TITLES,
                    self::FAU_DEGREE_PROGRAM_SHARED_PROPERTIES,
                ],
            ),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        add_action(
            AssetManager::ACTION_SETUP,
            [$container->get(SettingAssetsLoader::class), 'load']
        );

        $container->get(SettingsRegistrar::class)->registerSettings(
            SettingsPage::default(
                self::FAU_CONTENT_ITEM_TITLES,
                _x(
                    'FAU Content',
                    'backoffice: setting page title',
                    'fau-degree-program'
                ),
                self::CAPABILITY,
                self::contentItemTitlesSection(),
            ),
            SettingsPage::default(
                self::FAU_DEGREE_PROGRAM_SHARED_PROPERTIES,
                _x(
                    'FAU Degree Program',
                    'backoffice: setting page title',
                    'fau-degree-program'
                ),
                self::CAPABILITY,
                self::degreeProgramSharedPropertiesSection(),
            )
        );

        return true;
    }

    /**
     * phpcs:disable Inpsyde.CodeQuality.FunctionLength.TooLong
     */
    private static function contentItemTitlesSection(): SettingsSection
    {
        return SettingsSection::default(
            'fau_content_item_titles',
            _x(
                'Content item (accordion) titles',
                'backoffice: setting page section',
                'fau-degree-program'
            ),
            new BilingualTextSettingsField(
                Content::ABOUT,
                _x('About', 'backoffice: setting title', 'fau-degree-program'),
                [
                    MultilingualString::DE => 'Worum geht es im Studiengang?',
                    MultilingualString::EN => 'What is the degree program about?',
                ]
            ),
            new BilingualTextSettingsField(
                Content::STRUCTURE,
                _x('Structure', 'backoffice: setting title', 'fau-degree-program'),
                [
                    MultilingualString::DE => 'Aufbau und Struktur',
                    MultilingualString::EN => 'Design and structure',
                ]
            ),
            new BilingualTextSettingsField(
                Content::SPECIALIZATIONS,
                _x('Specializations', 'backoffice: setting title', 'fau-degree-program'),
                [
                    MultilingualString::DE => 'Studienrichtungen und Schwerpunkte',
                    MultilingualString::EN => 'Fields of study and specializations',
                ]
            ),
            new BilingualTextSettingsField(
                Content::QUALITIES_AND_SKILLS,
                _x(
                    'Qualities and skills',
                    'backoffice: setting title',
                    'fau-degree-program'
                ),
                [
                    MultilingualString::DE => 'Was sollte ich mitbringen?',
                    MultilingualString::EN => 'Which qualities and skills do I need?',
                ]
            ),
            new BilingualTextSettingsField(
                Content::WHY_SHOULD_STUDY,
                _x('Why study at FAU', 'backoffice: setting title', 'fau-degree-program'),
                [
                    MultilingualString::DE =>
                        'Gute Gründe für ein Studium an der FAU',
                    MultilingualString::EN =>
                        'Why should I study at FAU?',
                ]
            ),
            new BilingualTextSettingsField(
                Content::CAREER_PROSPECTS,
                _x('Career prospects', 'backoffice: setting title', 'fau-degree-program'),
                [
                    MultilingualString::DE =>
                        'Welche beruflichen Perspektiven stehen mir offen?',
                    MultilingualString::EN =>
                        'Which career prospects are open to me?',
                ]
            ),
            new BilingualTextSettingsField(
                Content::SPECIAL_FEATURES,
                _x('Special Features', 'backoffice: setting title', 'fau-degree-program'),
                [
                    MultilingualString::DE => 'Besondere Hinweise',
                    MultilingualString::EN => 'Special features',
                ]
            ),
            new BilingualTextSettingsField(
                Content::TESTIMONIALS,
                _x('Testimonials', 'backoffice: setting title', 'fau-degree-program'),
                [
                    MultilingualString::DE => 'Erfahrungsberichte',
                    MultilingualString::EN => 'Testimonials',
                ]
            ),
        );
    }

    private static function degreeProgramSharedPropertiesSection(): SettingsSection
    {
        return SettingsSection::default(
            'fau_degree_program_shared_properties',
            _x(
                'Degree program shared properties',
                'backoffice: setting page section',
                'fau-degree-program'
            ),
            new BilingualLinkSettingsField(
                DegreeProgram::START_OF_SEMESTER,
                _x('Start of semester', 'backoffice: setting title', 'fau-degree-program')
            ),
            new BilingualLinkSettingsField(
                DegreeProgram::SEMESTER_DATES,
                _x('Semester dates', 'backoffice: setting title', 'fau-degree-program')
            ),
            new BilingualLinkSettingsField(
                DegreeProgram::DEPARTMENT,
                _x('Department', 'backoffice: setting title', 'fau-degree-program')
            ),
            new BilingualLinkSettingsField(
                DegreeProgram::STUDENT_ADVICE,
                _x(
                    'Student Advice and Career Service',
                    'backoffice: setting title',
                    'fau-degree-program'
                )
            ),
            new BilingualLinkSettingsField(
                DegreeProgram::SERVICE_CENTERS,
                _x(
                    'Counseling and Service Centers at FAU',
                    'backoffice: setting title',
                    'fau-degree-program'
                )
            ),
            new BilingualLinkSettingsField(
                DegreeProgram::SEMESTER_FEE,
                _x('Semester fee', 'backoffice: setting title', 'fau-degree-program')
            ),
            new BilingualLinkSettingsField(
                DegreeProgram::ABROAD_OPPORTUNITIES,
                _x(
                    'Opportunities for spending time abroad',
                    'backoffice: setting title',
                    'fau-degree-program'
                )
            ),
        );
    }
}
