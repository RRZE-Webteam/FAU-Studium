<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\RestApi;

use Fau\DegreeProgram\Application\DegreeProgramRetriever;
use Fau\DegreeProgram\Application\DegreeProgramUpdater;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramCollectionRepository;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramDataValidator;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\BachelorOrTeachingDegreeAdmissionRequirementTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\DegreeTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\MasterDegreeAdmissionRequirementTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Content\Taxonomy\TeachingDegreeHigherSemesterAdmissionRequirementTaxonomy;
use Fau\DegreeProgram\Common\Infrastructure\Repository\FacultyRepository;
use Fau\DegreeProgram\Common\Infrastructure\Sanitizer\SerializedBlocksDegreeProgramSanitizer;
use Fau\DegreeProgram\Common\Infrastructure\Validator\CompositeValidator;
use Fau\DegreeProgram\Common\Infrastructure\Validator\ConditionalFieldsValidator;
use Fau\DegreeProgram\Common\Infrastructure\Validator\JsonSchemaDegreeProgramDataValidator;
use Fau\DegreeProgram\Infrastructure\Repository\TermsRepository;
use Inpsyde\Modularity\Module\ExecutableModule;
use Inpsyde\Modularity\Module\ModuleClassNameIdTrait;
use Inpsyde\Modularity\Module\ServiceModule;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;

final class RestApiModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public const DEGREE_PROGRAM_REST_PROPERTY = 'degree_program';

    public function services(): array
    {
        return [
            DegreeProgramRetriever::class => static fn(ContainerInterface $container) => new DegreeProgramRetriever(
                $container->get(DegreeProgramViewRepository::class)
            ),
            DegreeProgramDataValidator::class => static fn(ContainerInterface $container) => new CompositeValidator(
                new JsonSchemaDegreeProgramDataValidator(),
                new ConditionalFieldsValidator($container->get(FacultyRepository::class)),
            ),
            DegreeProgramUpdater::class => static fn(ContainerInterface $container) => new DegreeProgramUpdater(
                $container->get(DegreeProgramRepository::class),
                $container->get(DegreeProgramDataValidator::class),
                $container->get(SerializedBlocksDegreeProgramSanitizer::class),
            ),
            DegreeProgramController::class => static fn(ContainerInterface $container) => new DegreeProgramController(
                $container->get(DegreeProgramRetriever::class),
                $container->get(DegreeProgramUpdater::class),
                $container->get(DegreeProgramDataValidator::class),
                $container->get(LoggerInterface::class),
            ),
            TranslatedDegreeProgramController::class => static fn(ContainerInterface $container) => new TranslatedDegreeProgramController(
                $container->get(DegreeProgramViewRepository::class),
                $container->get(DegreeProgramCollectionRepository::class),
            ),
            TermsParentObjectController::class => static fn(ContainerInterface $container) => new TermsParentObjectController(
                $container->get(TermsRepository::class),
            ),
        ];
    }

    // phpcs:ignore Inpsyde.CodeQuality.FunctionLength.TooLong
    public function run(ContainerInterface $container): bool
    {
        $degreeProgramController = $container->get(DegreeProgramController::class);
        $translatedDegreeProgramController = $container->get(TranslatedDegreeProgramController::class);
        $termsParentObjectController = $container->get(TermsParentObjectController::class);

        add_action(
            'rest_api_init',
            static function () use (
                $degreeProgramController,
                $translatedDegreeProgramController,
                $termsParentObjectController,
            ): void {
                $schema = JsonSchemaDegreeProgramDataValidator::SCHEMA;
                $schema['arg_options'] = [
                    'validate_callback' => [$degreeProgramController, 'validate'],
                ];

                register_rest_field(
                    DegreeProgramPostType::KEY,
                    self::DEGREE_PROGRAM_REST_PROPERTY,
                    [
                        'get_callback' => [$degreeProgramController, 'get'],
                        'update_callback' => [$degreeProgramController, 'update'],
                        'schema' => $schema,
                    ]
                );

                $taxonomies = [
                    DegreeTaxonomy::KEY,
                    BachelorOrTeachingDegreeAdmissionRequirementTaxonomy::KEY,
                    MasterDegreeAdmissionRequirementTaxonomy::KEY,
                    TeachingDegreeHigherSemesterAdmissionRequirementTaxonomy::KEY,
                ];

                foreach ($taxonomies as $taxonomy) {
                    register_rest_field(
                        $taxonomy,
                        'parent_object',
                        [
                            'get_callback' => [$termsParentObjectController, 'get'],
                        ]
                    );
                }

                $translatedDegreeProgramController->register_routes();
            }
        );

        return true;
    }
}
