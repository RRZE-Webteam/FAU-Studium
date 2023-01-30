<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Tests\Content;

use Fau\DegreeProgram\Application\Content\GeneratePostSlug;
use Fau\DegreeProgram\Common\Infrastructure\Repository\IdGenerator;
use Fau\DegreeProgram\Common\LanguageExtension\ArrayOfStrings;
use Fau\DegreeProgram\Common\Tests\FixtureDegreeProgramDataProviderTrait;
use Fau\DegreeProgram\Common\Tests\Repository\StubDegreeProgramRepository;
use Fau\DegreeProgram\Common\Tests\Sanitizer\StubSanitizer;
use Fau\DegreeProgram\Common\Tests\Validator\StubDataValidator;
use Fau\DegreeProgram\Common\Tests\WpDbLess\WpDbLessTestCase;

class GeneratePostSlugTest extends WpDbLessTestCase
{
    use FixtureDegreeProgramDataProviderTrait;

    public function testGenerateSlug(): void
    {
        $repository = new StubDegreeProgramRepository();
        $emptyDegreeProgram = $this->createEmptyDegreeProgram(123);
        $data = $this->fixtureData();
        $data['id'] = 123;
        $data['title']['de'] = 'Title DE';
        $data['title']['en'] = 'Title EN';
        $data['degree']['abbreviation']['de'] = 'M.A.DE';
        $data['degree']['abbreviation']['en'] = 'M.A.EN';
        $emptyDegreeProgram->update(
            $data,
            new StubDataValidator(ArrayOfStrings::new()),
            new StubSanitizer()
        );
        $repository->save($emptyDegreeProgram);

        $sut = new GeneratePostSlug(
            $repository,
            new IdGenerator(),
        );

        $result = $sut->generate(123);
        $this->assertSame('title-de-m-a-de', $result->inGerman());
        $this->assertSame('title-en-m-a-en', $result->inEnglish());
    }

    public function testGenerateSlugForNonExistingDegreeProgram(): void
    {
        $repository = new StubDegreeProgramRepository();
        $sut = new GeneratePostSlug(
            $repository,
            new IdGenerator(),
        );

        $result = $sut->generate(123);
        $this->assertSame('', $result->inGerman());
        $this->assertSame('', $result->inEnglish());
    }
}
