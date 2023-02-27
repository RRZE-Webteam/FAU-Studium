# FAU Degree Program Management

Add and edit degree programs and expose them via the REST API.
 
## Table Of Contents

* [Installation](#installation)
* [Requirements](#requirements)
* [Usage](#usage)
* [Crafted by Inpsyde](#crafted-by-inpsyde)
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

The plugin's logger uses [`error_log()`](https://www.php.net/manual/en/function.error-log.php) internally.

## Crafted by Inpsyde

The team at [Inpsyde](https://inpsyde.com/) is engineering the Web since 2006.

## License

Copyright (c) 2022, Inpsyde GmbH

This software is released under the ["GNU General Public License v2.0 or later"](LICENSE) license.

## Contributing

All feedback / bug reports / pull requests are welcome.
