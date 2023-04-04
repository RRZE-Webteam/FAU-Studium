<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\TermMeta;

use Fau\DegreeProgram\Common\Domain\Degree;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\ApplyNowLinkTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\AreaOfStudyTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\AttributeTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\BachelorOrTeachingDegreeAdmissionRequirementTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\DegreeTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\ExaminationsOfficeTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\FacultyTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\GermanLanguageSkillsForInternationalStudentsTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\KeywordTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\MasterDegreeAdmissionRequirementTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\SemesterTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\StudyLocationTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\SubjectGroupTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\SubjectSpecificAdviceTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TeachingDegreeHigherSemesterAdmissionRequirementTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TeachingLanguageTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Repository\BilingualRepository;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\DirectoryLocator;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\Renderer;
use Fau\DegreeProgram\Common\Infrastructure\TemplateRenderer\TemplateRenderer;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Inpsyde\Modularity\Package;
use Psr\Container\ContainerInterface;

final class TermMetaModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    private const TERM_META_FIELD_RENDERER = 'term_meta_field_renderer';

    public function services(): array
    {
        return [
            self::TERM_META_FIELD_RENDERER => static fn(ContainerInterface $container): Renderer => TemplateRenderer::new(
                DirectoryLocator::new(
                    $container->get(Package::PROPERTIES)->basePath() . '/templates/term-meta'
                )
            ),
            TermMetaRepository::class => fn() => new TermMetaRepository(),
            TermMetaRegistrar::class => static fn(ContainerInterface $container): TermMetaRegistrar => new TermMetaRegistrar(
                termMetaFieldRenderer: $container->get(TermMetaModule::TERM_META_FIELD_RENDERER),
                termMetaRepository: $container->get(TermMetaRepository::class),
            ),
        ];
    }

    /**
     * phpcs:disable Inpsyde.CodeQuality.FunctionLength.TooLong
     */
    public function run(ContainerInterface $container): bool
    {
        $termMetaRegistrar = $container->get(TermMetaRegistrar::class);

        $termMetaRegistrar->register(
            AreaOfStudyTaxonomy::KEY,
            ...(new MultilingualLinkTermMetaFields())->getArrayCopy(),
        );
        $termMetaRegistrar->register(
            AttributeTaxonomy::KEY,
            new EnglishNameTermMetaField(),
        );
        $termMetaRegistrar->register(
            BachelorOrTeachingDegreeAdmissionRequirementTaxonomy::KEY,
            ...(new MultilingualLinkTermMetaFields())->getArrayCopy(),
        );
        $termMetaRegistrar->register(
            DegreeTaxonomy::KEY,
            ...self::degreeMetaFields(),
        );
        $termMetaRegistrar->register(
            ExaminationsOfficeTaxonomy::KEY,
            ...(new MultilingualLinkTermMetaFields())->getArrayCopy(),
        );
        $termMetaRegistrar->register(
            FacultyTaxonomy::KEY,
            ...(new MultilingualLinkTermMetaFields())->getArrayCopy(),
        );
        $termMetaRegistrar->register(
            GermanLanguageSkillsForInternationalStudentsTaxonomy::KEY,
            ...(new MultilingualLinkTermMetaFields())->getArrayCopy(),
        );
        $termMetaRegistrar->register(
            KeywordTaxonomy::KEY,
            new EnglishNameTermMetaField(),
        );
        $termMetaRegistrar->register(
            MasterDegreeAdmissionRequirementTaxonomy::KEY,
            ...(new MultilingualLinkTermMetaFields())->getArrayCopy(),
        );
        $termMetaRegistrar->register(
            SemesterTaxonomy::KEY,
            new EnglishNameTermMetaField(),
        );
        $termMetaRegistrar->register(
            StudyLocationTaxonomy::KEY,
            new EnglishNameTermMetaField(),
        );
        $termMetaRegistrar->register(
            SubjectGroupTaxonomy::KEY,
            new EnglishNameTermMetaField(),
        );
        $termMetaRegistrar->register(
            SubjectSpecificAdviceTaxonomy::KEY,
            ...(new MultilingualLinkTermMetaFields())->getArrayCopy(),
        );
        $termMetaRegistrar->register(
            TeachingDegreeHigherSemesterAdmissionRequirementTaxonomy::KEY,
            ...(new MultilingualLinkTermMetaFields())->getArrayCopy(),
        );
        $termMetaRegistrar->register(
            TeachingLanguageTaxonomy::KEY,
            new EnglishNameTermMetaField(),
        );
        $termMetaRegistrar->register(
            ApplyNowLinkTaxonomy::KEY,
            ...(new MultilingualLinkTermMetaFields())->getArrayCopy(),
        );

        return true;
    }

    /**
     * @return array<TermMetaField>
     */
    private static function degreeMetaFields(): array
    {
        return [
            new InputTermMetaField(
                Degree::ABBREVIATION,
                _x(
                    'Abbreviation',
                    'backoffice: term field name',
                    'fau-degree-program'
                )
            ),
            new EnglishNameTermMetaField(),
            new InputTermMetaField(
                BilingualRepository::addEnglishSuffix(Degree::ABBREVIATION),
                _x(
                    'English abbreviation',
                    'backoffice: term field name',
                    'fau-degree-program'
                )
            ),
        ];
    }
}
