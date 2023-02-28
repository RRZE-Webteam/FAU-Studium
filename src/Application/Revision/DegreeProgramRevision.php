<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\Revision;

use Fau\DegreeProgram\Common\Application\DegreeProgramViewRaw;
use Fau\DegreeProgram\Common\Domain\DegreeProgram;
use Fau\DegreeProgram\Common\Domain\Image;
use Fau\DegreeProgram\Common\Domain\MultilingualList;
use Fau\DegreeProgram\Common\Domain\MultilingualString;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;

final class DegreeProgramRevision
{
    public const STATUS = 'status';

    /**
     * @psalm-param array<string, string> $data
     */
    private function __construct(private array $data)
    {
    }

    /**
     * @psalm-param array<string, string> $data
     */
    public static function fromArray(array $data): self
    {
        return new self($data);
    }

    /**
     * @return array<string, string>
     */
    public function asArray(): array
    {
        return $this->data;
    }

    /**
     * @return array<string, string>
     */
    public function keyTitleMap(): array
    {
        $result = [];
        foreach ($this->data as $key => $value) {
            $result[$key] = self::readableKey($key);
        }

        return $result;
    }

    public static function readableKey(string $key): string
    {
        $result = ucwords($key, '.');
        return str_replace(['_', '.'], [' ', ' - '], $result);
    }
}
