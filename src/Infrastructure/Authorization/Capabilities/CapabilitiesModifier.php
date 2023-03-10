<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Authorization\Capabilities;

use WP_User;

abstract class CapabilitiesModifier
{
    /**
     * @wp-hook user_has_cap
     * @param array $userCapabilities
     * @param array<array-key, string> $requiredCapabilities
     * @param array $arguments
     * @param WP_User $user
     * @return array
     */
    final public function modify(
        array $userCapabilities,
        array $requiredCapabilities,
        array $arguments,
        WP_User $user
    ): array {

        if (! $this->shouldModify($arguments, $user)) {
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

    abstract protected function shouldModify(array $arguments, WP_User $user): bool;
}
