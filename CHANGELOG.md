# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

### Removed
- Link text input for Subject-specific advice taxonomy terms.
- Degree program taxonomies from "Add menu items" box.

### Fixed
- Missing description for the `search` REST API collection parameter for the `fau/v1/degree-program` endpoint.
- Use default Gutenberg font for error messages.
- Improve degree program combination control.
- Clear content fields with empty paragraphs.
- PHP 8.1 compatibility.
- Taxonomy labels generation before text domain loading.
- Workflow author terms synchronization.

## [1.0.0] - 2023-05-03
### Added
- Initial release.

[Unreleased]: https://github.com/RRZE-Webteam/FAU-Studium/compare/1.1.0...HEAD
[1.1.0]: https://github.com/RRZE-Webteam/FAU-Studium//compare/1.0.0...1.1.0
[1.0.0]: https://github.com/RRZE-Webteam/FAU-Studium/releases/tag/1.0.0
