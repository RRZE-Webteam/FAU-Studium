<?php

declare(strict_types=1);

namespace {
    class WP_CLI {
        public static function add_command(string $name, callable|object $command, array $args = []): void
        {}
    }

    define('EMPTY_TRASH_DAYS',  30);
    define('DAY_IN_SECONDS', 86400);
}
