<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Tests;

use Fau\DegreeProgram\Application\DegreeProgramUpdater;
use Fau\DegreeProgram\Common\Domain\DegreeProgramId;
use Fau\DegreeProgram\Common\LanguageExtension\ArrayOfStrings;
use Fau\DegreeProgram\Common\Tests\FixtureDegreeProgramDataProviderTrait;
use Fau\DegreeProgram\Common\Tests\Repository\StubDegreeProgramRepository;
use Fau\DegreeProgram\Common\Tests\Sanitizer\StubSanitizer;
use Fau\DegreeProgram\Common\Tests\Validator\StubDataValidator;
use PHPUnit\Framework\TestCase;
use RuntimeException;

final class UpdateDegreeProgramTest extends TestCase
{
    use FixtureDegreeProgramDataProviderTrait;

    public function testSuccessfullyUpdatingDegreeProgram(): void
    {
        $repository = new StubDegreeProgramRepository();
        $emptyDegreeProgram = $this->createEmptyDegreeProgram(123);
        $repository->save($emptyDegreeProgram);

        $updater = new DegreeProgramUpdater(
            $repository,
            new StubDataValidator(ArrayOfStrings::new()),
            new StubSanitizer(),
        );

        $data = $this->fixtureData();
        $data['id'] = 123;
        $data['title']['de'] = 'Bachelor of Arts FAU';
        $updater->updateDegreeProgram(123, $data);

        $raw = $repository->findRaw(DegreeProgramId::fromInt(123));
        $this->assertSame('Bachelor of Arts FAU', $raw->title()->inGerman());
    }

    public function testUpdatingNonExistingDegreeProgram(): void
    {
        $this->expectException(RuntimeException::class);
        $repository = new StubDegreeProgramRepository();

        $updater = new DegreeProgramUpdater(
            $repository,
            new StubDataValidator(ArrayOfStrings::new()),
            new StubSanitizer(),
        );

        $data = $this->fixtureData();
        $updater->updateDegreeProgram(123, $data);
    }
}
