<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Common\Tests\Validator;

use Fau\DegreeProgram\Common\Infrastructure\Sanitizer\SerializedBlocksDegreeProgramSanitizer;
use Fau\DegreeProgram\Common\Infrastructure\Validator\JsonSchemaDegreeProgramDataValidator;
use Fau\DegreeProgram\Common\Tests\FixtureDegreeProgramDataProviderTrait;
use Fau\DegreeProgram\Common\Tests\WpDbLess\WpDbLessTestCase;

class JsonSchemaDegreeProgramDataValidatorTest extends WpDbLessTestCase
{
    use FixtureDegreeProgramDataProviderTrait;

    private JsonSchemaDegreeProgramDataValidator $sut;

    public function setUp(): void
    {
        $this->sut = new JsonSchemaDegreeProgramDataValidator(
            require ROOT_DIR . '/config/schema_draft.php',
            require ROOT_DIR . '/config/schema_publish.php',
            new SerializedBlocksDegreeProgramSanitizer(),
        );

        parent::setUp();
    }

    /**
     * @dataProvider fixtureDataProvider
     */
    public function testSuccessfulValidation(array $fixtureData): void
    {
        $violations = $this->sut->validatePublish($fixtureData);
        $this->assertCount(0, $violations->getArrayCopy());
        $violations = $this->sut->validateDraft($fixtureData);
        $this->assertCount(0, $violations->getArrayCopy());
    }

    /**
     * @dataProvider fixtureDataProvider
     */
    public function testViolations(array $fixtureData): void
    {
        unset($fixtureData['content']);
        $violations = $this->sut->validateDraft($fixtureData);
        $this->assertCount(1, $violations->getArrayCopy());
        $this->assertSame(
            'content is a required property of degree_program.',
            $violations['degree_program']->errorMessage()
        );
    }

    /**
     * @dataProvider invalidDeadlineDataProvider
     */
    public function testInvalidApplicationDeadlines(string $deadline): void
    {
        $fixtureData = $this->fixtureData();
        $fixtureData['application_deadline_winter_semester'] = $deadline;

        $violations = $this->sut->validatePublish($fixtureData);
        $this->assertCount(1, $violations->getArrayCopy());
        $this->assertStringStartsWith(
            'application_deadline_winter_semester does not match pattern',
            $violations['application_deadline_winter_semester']->errorMessage(),
        );
    }
    /**
     * @dataProvider validDeadlineDataProvider
     */
    public function testValidApplicationDeadlines(string $deadline): void
    {
        $fixtureData = $this->fixtureData();
        $fixtureData['application_deadline_winter_semester'] = $deadline;

        $violations = $this->sut->validatePublish($fixtureData);
        $this->assertCount(0, $violations->getArrayCopy());
    }

    public function invalidDeadlineDataProvider(): array
    {
        return [
            ['1'],
            ['ab.bc.'],
            ['12.123'],
            ['12.13.'],
            ['31.04.'],
            ['30.04'],
            ['1.4.'],
        ];
    }

    public function validDeadlineDataProvider(): array
    {
        return [
            ['12.12.'],
            ['01.01.'],
            ['30.04.'],
            ['31.08.'],
            ['20.02.'],
            [''],
        ];
    }
}
