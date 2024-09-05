<!-- markdownlint-disable MD024 -->
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `date` and `modified` degree program REST API properties.
- `fau/v1/degree-program/index` REST API endpoint.

### Removed

- Campo Keys are no longer part of degree program revision data.

## [2.0.1] - 2024-08-07

### Fixed

- Degree program revisions.

## [2.0.0] - 2024-07-24

### Added

- Support WordPress "Quote" block in content fields.
- "Campo-Key" term meta field.

### Changed

- Make "Duration of studies in semester" a single line input.

## [1.2.7] - 2023-11-23

### Fixed

- WordPress 6.4 compatibility.

## [1.2.6] - 2023-08-02

### Changed

- Updated dependencies.

## [1.2.5] - 2023-07-26

### Changed

- Updated dependencies.

## [1.2.4] - 2023-07-19

### Changed

- Updated dependencies.

## [1.2.3] - 2023-07-05

### Changed

- Avoid error for invalid `lang` query param for the `fau/v1/degree-program` endpoint.

## [1.2.2] - 2023-06-14

### Changed

- Updated dependencies.

## [1.2.1] - 2023-06-07

### Added

- Ability to define sticky degree programs.

### Removed

- Ability to sort degree programs.

### Fixed

- Degree program preview generation.

## [1.2.0] - 2023-05-24

### Removed

- Link text input for Subject-specific advice taxonomy terms.
- Degree program taxonomies from "Add menu items" box.

### Fixed

- Taxonomy labels generation before text domain loading.
- Workflow author terms synchronization.

## [1.1.0] - 2023-05-16

### Added

- Ability to sort degree programs.
- Extend help text for image fields with image sizes.
- Name property to `NumberOfStudents? value object.
- "Tips for application" link text setting.

### Changed

- Sanitize data when saving draft degree program.
- Make application deadlines and info brochure fields optional.
- Make attributes and language skills for Philosophy faculty fields optional.
- Order setting fields by output order.

### Fixed

- Missing description for the `search` REST API collection parameter for the `fau/v1/degree-program` endpoint.
- Use default Gutenberg font for error messages.
- Improve degree program combination control.
- Clear content fields with empty paragraphs.
- PHP 8.1 compatibility.

## [1.0.0] - 2023-05-03

### Added

- Initial release.

[Unreleased]: https://github.com/RRZE-Webteam/FAU-Studium/compare/2.0.1...HEAD
[2.0.1]: https://github.com/RRZE-Webteam/FAU-Studium/compare/2.0.0...2.0.1
[2.0.0]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.2.7...2.0.0
[1.2.7]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.2.6...1.2.7
[1.2.6]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.2.5...1.2.6
[1.2.5]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.2.4...1.2.5
[1.2.4]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.2.3...1.2.4
[1.2.3]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.2.2...1.2.3
[1.2.2]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.2.1...1.2.2
[1.2.1]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/RRZE-Webteam/FAU-Studium/releases/tag/1.0.0
