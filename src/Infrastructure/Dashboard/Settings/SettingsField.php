<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Dashboard\Settings;

interface SettingsField extends Option
{
    public function id(): string;
    public function title(): string;

    public function templateName(): string;
    public function templateData(mixed $value): array;
}
