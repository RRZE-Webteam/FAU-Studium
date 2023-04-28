<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\RestApi;

use Fau\DegreeProgram\Common\Application\DegreeProgramViewRaw;
use Fau\DegreeProgram\Common\Application\Repository\DegreeProgramViewRepository;
use Fau\DegreeProgram\Common\Domain\DegreeProgramDataValidator;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\Domain\Violation;
use Fau\DegreeProgram\Common\Domain\Violations;
use LogicException;
use stdClass;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

final class DegreeProgramRequestFilter
{
    public function __construct(
        private DegreeProgramDataValidator $degreeProgramDataValidator,
        private DegreeProgramViewRepository $degreeProgramViewRepository,
    ) {
    }

    /**
     * @wp-hook rest_pre_insert_studiengang
     */
    public function filterPostDataBeforeUpdate(
        stdClass $preparedPost,
        WP_REST_Request $request
    ): stdClass|WP_Error {

        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return new WP_Error(
                'degree_program_autosave',
                'Autosave is not supported.'
            );
        }

        $isPublished = $this->detectPostStatus($preparedPost, $request) === 'publish';

        if (!$isPublished) {
            return $preparedPost;
        }

        /** @var array<string, mixed>|null $data */
        $data = $request->get_param(RestApiModule::DEGREE_PROGRAM_REST_PROPERTY);

        if ($data) {
            return $this->filterPreparedPost($preparedPost, $data);
        }

        // No edits from last update.
        $viewRaw = $this->degreeProgramViewRepository->findRaw(
            DegreeProgramId::fromInt((int) $preparedPost->ID)
        );

        if (!$viewRaw instanceof DegreeProgramViewRaw) {
            return $this->convertViolationsToWpError(
                Violations::new(
                    Violation::new(
                        RestApiModule::DEGREE_PROGRAM_REST_PROPERTY,
                        _x(
                            'Empty data.',
                            'backoffice: REST API',
                            'fau-degree-program'
                        ),
                        'empty_data'
                    )
                )
            );
        }

        return $this->filterPreparedPost($preparedPost, $viewRaw->asArray());
    }

    private function detectPostStatus(
        stdClass $preparedPost,
        WP_REST_Request $request
    ): string {

        if (isset($preparedPost->post_status)) {
            return (string) $preparedPost->post_status;
        }

        if ($request->get_method() === WP_REST_Server::CREATABLE) {
            return 'draft';
        }

        $existingStatus = get_post_status((int) $preparedPost->ID);
        if (!$existingStatus) {
            throw new LogicException('Post does not exist.');
        }

        return $existingStatus;
    }

    /**
     * @param array<string, mixed> $data
     */
    private function filterPreparedPost(
        stdClass $preparedPost,
        array $data
    ): stdClass|WP_Error {

        $violations = $this->degreeProgramDataValidator->validatePublish($data);

        return $violations->count() === 0
            ? $preparedPost
            : $this->convertViolationsToWpError($violations);
    }

    private function convertViolationsToWpError(Violations $violations): WP_Error
    {

        return new WP_Error(
            'rest_invalid_param',
            sprintf(
                'Invalid degree program data. Invalid properties: %s.',
                implode(', ', array_map(
                    static fn(Violation $violation) => $violation->readablePath(),
                    $violations->getArrayCopy()
                ))
            ),
            [
                'status' => 400,
                'params' => array_map(
                    static fn($violation) => [
                        'code' => $violation->errorCode(),
                        'message' => $violation->errorMessage(),
                    ],
                    $violations->getArrayCopy(),
                ),
            ],
        );
    }
}
