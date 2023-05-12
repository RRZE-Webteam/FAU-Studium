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

/**
 * @psalm-import-type SchemaType from JsonSchemaDegreeProgramDataValidator
 */
final class RestApiModule implements ServiceModule, ExecutableModule
{
    use ModuleClassNameIdTrait;

    public const DEGREE_PROGRAM_REST_PROPERTY = 'degree_program';

    public function __construct(private string $commonConfigDirectory)
    {
    }

    public function services(): array
    {
        return [
            DegreeProgramRetriever::class => static fn(ContainerInterface $container) => new DegreeProgramRetriever(
                $container->get(DegreeProgramViewRepository::class)
            ),
            JsonSchemaDegreeProgramDataValidator::class => function (): JsonSchemaDegreeProgramDataValidator {
                /** @var SchemaType $draftSchema */
                $draftSchema = require $this->commonConfigDirectory . '/schema_draft.php';
                /** @var SchemaType $publishSchema */
                $publishSchema = require $this->commonConfigDirectory . '/schema_publish.php';

                return new JsonSchemaDegreeProgramDataValidator(
                    $draftSchema,
                    $publishSchema,
                );
            },
            DegreeProgramDataValidator::class => static fn(ContainerInterface $container) => new CompositeValidator(
                $container->get(JsonSchemaDegreeProgramDataValidator::class),
                new ConditionalFieldsValidator($container->get(FacultyRepository::class)),
            ),
            DegreeProgramUpdater::class => static fn(ContainerInterface $container) => new DegreeProgramUpdater(
                $container->get(DegreeProgramRepository::class),
                $container->get(DegreeProgramDataValidator::class),
                $container->get(SerializedBlocksDegreeProgramSanitizer::class),
            ),
            DegreeProgramRequestFilter::class => static fn(ContainerInterface $container) => new DegreeProgramRequestFilter(
                $container->get(DegreeProgramDataValidator::class),
                $container->get(DegreeProgramViewRepository::class),
            ),
            DegreeProgramController::class => static fn(ContainerInterface $container) => new DegreeProgramController(
                $container->get(DegreeProgramRetriever::class),
                $container->get(DegreeProgramUpdater::class),
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
        $schema = $container->get(JsonSchemaDegreeProgramDataValidator::class)->draftSchema();

        add_action(
            'rest_api_init',
            static function () use (
                $degreeProgramController,
                $translatedDegreeProgramController,
                $termsParentObjectController,
                $schema
            ): void {

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

        add_filter(
            sprintf(
                'rest_pre_insert_%s',
                DegreeProgramPostType::KEY
            ),
            [
                $container->get(DegreeProgramRequestFilter::class),
                'filterPostDataBeforeUpdate',
            ],
            10,
            2
        );

        add_filter(
            sprintf(
                'rest_%s_collection_params',
                DegreeProgramPostType::KEY
            ),
            static function (array $params): array {
                /** @psalm-suppress MixedArrayAssignment */
                $params['per_page']['maximum'] = 300;

                return $params;
            }
        );

        return true;
    }
}
