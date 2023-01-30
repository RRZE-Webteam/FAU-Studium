<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Tests;

use Fau\DegreeProgram\Application\DegreeProgramRetriever;
use Fau\DegreeProgram\Common\Tests\FixtureDegreeProgramDataProviderTrait;
use Fau\DegreeProgram\Common\Tests\Repository\StubDegreeProgramRepository;
use PHPUnit\Framework\TestCase;

final class RetrieveDegreeProgramTest extends TestCase
{
    use FixtureDegreeProgramDataProviderTrait;

    public function testRetrievingExistingDegreeProgram(): void
    {
        $repository = new StubDegreeProgramRepository();
        $emptyDegreeProgram = $this->createEmptyDegreeProgram(123);
        $repository->save($emptyDegreeProgram);

        $retriever = new DegreeProgramRetriever(
            $repository
        );

        $result = $retriever->retrieveDegreeProgramView(123);
        $this->assertSame(123, $result->id()->asInt());
    }

    public function testRetrievingNonExistingDegreeProgram(): void
    {
        $repository = new StubDegreeProgramRepository();

        $retriever = new DegreeProgramRetriever(
            $repository
        );

        $result = $retriever->retrieveDegreeProgramView(123);
        $this->assertNull($result);
    }
}
