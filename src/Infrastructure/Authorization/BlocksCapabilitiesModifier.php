<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization;

use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramAuthor;
use Fau\DegreeProgram\Infrastructure\Authorization\Roles\DegreeProgramEditor;
use WP_User;

class BlocksCapabilitiesModifier
{
    /**
     * @wp-hook user_has_cap
     * @param array $userCapabilities
     * @param array<array-key, string> $requiredCapabilities
     * @param array $arguments
     * @param WP_User $user
     * @return array
     */
    public function modify(array $userCapabilities, array $requiredCapabilities, array $arguments, WP_User $user): array
    {
        if (! $this->isMatchingRestRequest()) {
            return $userCapabilities;
        }

        $userHasApplicableRoles = array_intersect([
            DegreeProgramAuthor::KEY,
            DegreeProgramEditor::KEY,
        ], $user->roles);

        if (count($userHasApplicableRoles) === 0) {
            return $userCapabilities;
        }

        $initiallyRequestedCapability = $arguments[0] ?? '';
        if ($initiallyRequestedCapability !== 'edit_posts') {
            return $userCapabilities;
        }

        /**
         * Generated array that grants (set to true) all required capabilities.
         * @var array<string, boolean> $grantedRequiredCapabilities
         */
        $grantedRequiredCapabilities = array_fill_keys(
            $requiredCapabilities,
            true
        );

        return array_merge($userCapabilities, $grantedRequiredCapabilities);
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
