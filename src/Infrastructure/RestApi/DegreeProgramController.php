<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\RestApi;

use Fau\DegreeProgram\Application\DegreeProgramRetriever;
use Fau\DegreeProgram\Application\DegreeProgramUpdater;
use Fau\DegreeProgram\Common\Application\DegreeProgramViewRaw;
use Fau\DegreeProgram\Common\Domain\DegreeProgramDataValidator;
use Fau\DegreeProgram\Common\Domain\Violations;
use InvalidArgumentException;
use Psr\Log\LoggerInterface;
use Psr\Log\NullLogger;
use RuntimeException;
use WP_Error;
use WP_Post;

final class DegreeProgramController
{
    private LoggerInterface $logger;

    public function __construct(
        private DegreeProgramRetriever $degreeProgramRetriever,
        private DegreeProgramUpdater $degreeProgramUpdater,
        private DegreeProgramDataValidator $degreeProgramDataValidator,
        ?LoggerInterface $logger = null,
    ) {

        $this->logger = $logger ?? new NullLogger();
    }

    public function get(): ?DegreeProgramViewRaw
    {
        $post = get_post();
        if (!$post instanceof WP_Post) {
            return null;
        }

        return $this
            ->degreeProgramRetriever
            ->retrieveDegreeProgramView($post->ID);
    }

    /**
     * @param array<string, mixed> $data
     */
    public function update(
        array $data,
        WP_Post $post,
    ): void {

        try {
            $this->degreeProgramUpdater->updateDegreeProgram(
                $post->ID,
                $data,
            );
        } catch (InvalidArgumentException | RuntimeException $exception) {
            $code = $exception instanceof InvalidArgumentException
                ? 'validation_failed'
                : 'persisting_failed';

            $this->logger->error(
                sprintf('Could not update Degree Program #%s', $post->ID),
                [
                    'code' => $code,
                    'exception' => $exception,
                ]
            );

            status_header(400);
            echo wp_json_encode([
                'code' => $code,
                'message' => $exception->getMessage(),
            ]);
            die();
        }
    }

    /**
     * @param array<string, mixed> $data
     * @return true|WP_Error
     */
    public function validate(array $data): bool|WP_Error
    {
        $violations = $this->degreeProgramDataValidator->validate($data);

        if ($violations->count() === 0) {
            return true;
        }

        return new WP_Error(
            'rest_invalid_param',
            sprintf(
                'Invalid degree program data. Violations: %s.',
                implode('|', array_keys($violations->getArrayCopy()))
            ),
            [
                'status' => 400,
                'params' => $this->violationsToRestResponse($violations),
            ],
        );
    }

    private function violationsToRestResponse(Violations $violations): array
    {
        return array_map(
            static fn ($violation) => [
                'code' => $violation->errorCode(),
                'message' => $violation->errorMessage(),
            ],
            $violations->getArrayCopy(),
        );
    }
}
