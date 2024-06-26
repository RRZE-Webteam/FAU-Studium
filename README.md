# FAU Degree Program Management

Add and edit degree programs and expose them via the REST API.

## Table Of Contents

* [Installation](#installation)
* [Requirements](#requirements)
* [Usage](#usage)
* [Crafted by Syde](#crafted-by-syde)
* [License](#license)
* [Contributing](#contributing)

## Installation

The best way to use this package is to download the archive from the releases page on GitHub and
install it as a WordPress plugin.

## Requirements

PHP version 8.0 or greater.
PHP extensions: DOM, libxml.

The WordPress Cron API is required for the correct functioning of the plugin because it is used to
update the degree program cache. If the cron API is inactive, the cache will not be warmed after
invalidation, leading to performance issues.
If you can't use the WordPress Cron API, make sure you run cron jobs using the WP-CLI or a real Unix
cron job.

After plugin activation, a daily WordPress Cron job is registered to schedule revision notifications.
The behavior can be disabled by defining the PHP constant or environment variable `FAU_DISABLE_DAILY_REVISION_NOTIFICATION`.
In this case, a Unix cron job that executes the WP-CLI command `wp fau revision notify` should be run with the desired frequency.
This is the preferred way for revision notification because there are no time and memory limits
compared to WordPress Cron which runs within HTTP requests.

The plugin's logger uses [`error_log()`](https://www.php.net/manual/en/function.error-log.php) internally.

## Usage

The plugin supports marking selected degree programs as "sticky".
This can be set for all degree programs or degree programs of a particular term, e.g., "Degree".

The "FAU Degree Program Output" plugin displays sticky degree programs first
when rendering the "search" shortcode.

## Crafted by Syde

The team at [Syde](https://syde.com/) is engineering the Web since 2006.

## License

Copyright (c) 2022, Syde GmbH

This software is released under the ["GNU General Public License v2.0 or later"](LICENSE) license.

## Contributing

All feedback / bug reports / pull requests are welcome.
