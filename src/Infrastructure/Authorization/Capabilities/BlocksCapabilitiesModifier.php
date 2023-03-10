<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\Capabilities;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\UserRoleChecker;
use WP_User;

final class BlocksCapabilitiesModifier extends CapabilitiesModifier
{
    protected function shouldModify(array $arguments, WP_User $user): bool
    {
        if (! UserRoleChecker::isDegreeProgramAuthorOrEditor($user)) {
            return false;
        }

        $requestedCapability = $arguments[0] ?? '';
        if ($requestedCapability !== 'edit_posts') {
            return false;
        }

        return $this->isMatchingRestRequest();
    }

    private function isMatchingRestRequest(): bool
    {
        if (! (defined('REST_REQUEST') && REST_REQUEST)) {
            return false;
        }

        $requestUri = (string) filter_input(INPUT_SERVER, 'REQUEST_URI', FILTER_SANITIZE_URL);
        $queryString = (string) filter_input(INPUT_SERVER, 'QUERY_STRING', FILTER_SANITIZE_URL);

        $cleanRequestUri = trim(str_replace($queryString, '', $requestUri), '?');
        return $cleanRequestUri === '/wp-json/wp/v2/blocks';
    }
}
