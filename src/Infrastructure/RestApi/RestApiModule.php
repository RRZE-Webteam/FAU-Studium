<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\RestApi;

use Fau\DegreeProgram\Application\DegreeProgramRetriever;
use Fau\DegreeProgram\Application\DegreeProgramUpdater;
use Fau\DegreeProgram\Common\Application\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramDataValidator;
use Fau\DegreeProgram\Common\Domain\DegreeProgramRepository;
use Fau\DegreeProgram\Common\Infrastructure\Content\PostType\DegreeProgramPostType;
use Fau\DegreeProgram\Common\Infrastructure\Sanitizer\SerializedBlocksDegreeProgramSanitizer;
use Fau\DegreeProgram\Common\Infrastructure\Validator\JsonSchemaDegreeProgramDataValidator;
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
            DegreeProgramDataValidator::class => static fn() => new JsonSchemaDegreeProgramDataValidator(),
            DegreeProgramUpdater::class => static fn(ContainerInterface $container) => new DegreeProgramUpdater(
                $container->get(DegreeProgramRepository::class),
                $container->get(DegreeProgramDataValidator::class),
                $container->get(SerializedBlocksDegreeProgramSanitizer::class),
            ),
            DegreeProgramController::class => static fn(ContainerInterface $container) => new DegreeProgramController(
                $container->get(DegreeProgramRetriever::class),
                $container->get(DegreeProgramUpdater::class),
                $container->get(LoggerInterface::class),
            ),
        ];
    }

    public function run(ContainerInterface $container): bool
    {
        $degreeProgramController = $container->get(DegreeProgramController::class);

        add_action('rest_api_init', static function () use ($degreeProgramController): void {
            register_rest_field(
                DegreeProgramPostType::KEY,
                self::DEGREE_PROGRAM_REST_PROPERTY,
                [
                    'get_callback' => [$degreeProgramController, 'get'],
                    'update_callback' => [$degreeProgramController, 'update'],
                    'schema' => JsonSchemaDegreeProgramDataValidator::SCHEMA,
                ]
            );
        });

        return true;
    }
}
