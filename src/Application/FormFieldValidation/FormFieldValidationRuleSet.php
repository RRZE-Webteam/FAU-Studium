<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Application\FormFieldValidation;

use ArrayObject;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\AlphaNumeric;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\LowerCaseOnly;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\MaxLength;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\MinLength;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\NumericString;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\NumericStringNoLeadingZeros;
use Fau\DegreeProgram\Application\FormFieldValidation\Rules\UpperCaseOnly;
use LogicException;

/**
 * @template-extends ArrayObject<string, FormFieldValidationRule>
 */
class FormFieldValidationRuleSet extends ArrayObject
{
    private function __construct()
    {
    }

    public static function new(): self
    {
        return new self();
    }

    public function get(string $key): ?FormFieldValidationRule
    {
        return $this->offsetExists($key) ? $this->offsetGet($key) : null;
    }

    public function alphaNumeric(): self
    {
        $this->addRule(AlphaNumeric::name(), new AlphaNumeric());
        return $this;
    }

    public function numericLeadingZerosAllowed(): self
    {
        $this->addRule(NumericString::name(), new NumericString());
        return $this;
    }

    public function numericLeadingZerosNotAllowed(): self
    {
        $this->addRule(NumericStringNoLeadingZeros::name(), new NumericStringNoLeadingZeros());
        return $this;
    }

    public function minLength(int $value): self
    {
        $this->addRule(MinLength::name(), new MinLength($value));
        return $this;
    }

    public function maxLength(int $value): self
    {
        $this->addRule(MaxLength::name(), new MaxLength($value));
        return $this;
    }

    public function lowerCaseOnly(): self
    {
        if ($this->offsetExists(LowerCaseOnly::name())) {
            throw new LogicException('Cannot have both upper and lower case rules');
        }

        $this->addRule(LowerCaseOnly::name(), new LowerCaseOnly());
        return $this;
    }

    public function upperCaseOnly(): self
    {
        if ($this->offsetExists(UpperCaseOnly::name())) {
            throw new LogicException('Cannot have both upper and lower case rules');
        }

        $this->addRule(UpperCaseOnly::name(), new UpperCaseOnly());
        return $this;
    }

    private function addRule(string $key, FormFieldValidationRule $rule): void
    {
        if (! is_null($this->get($key))) {
            return;
        }

        $this->offsetSet($key, $rule);
    }
}
