<?php

declare(strict_types=1);

namespace Fau\DegreeProgram\Infrastructure\Revision\Notification;

use DOMDocument;
use DOMElement;
use DOMNode;
use DOMNodeList;
use DOMXPath;

final class RevisionDiff
{
    private const INLINE_STYLES_MAP = [
        '//table' => [
            'width: 100%',
        ],
        '//td | //th' => [
            'padding: 8px 8px 8px 16px',
            'vertical-align: top',
            'word-wrap: break-word',
            'white-space: pre-wrap',
            'width: 50%',
        ],
        '//td[contains(@class, "diff-deletedline")]' => [
            'background-color: #fcf0f1',
        ],
        '//td[contains(@class, "diff-addedline")]' => [
            'background-color: #edfaef',
        ],
    ];

    private const ELEMENTS_TO_REMOVE = [
        '//span[contains(@class, "screen-reader-text")]',
        '//span[contains(@class, "dashicons")]',
    ];

    /**
     * @psalm-return array<array{id: string, name: string, diff: string}>
     */
    public function diff(int $degreeProgramId, int $from, int $to): array
    {
        if (!function_exists('wp_get_revision_ui_diff')) {
            require ABSPATH . 'wp-admin/includes/revision.php';
        }

        /** @var array<string, array<array{id: string, name: string, diff: string}>> $cache */
        static $cache = [];
        $key = implode('-', [$degreeProgramId, $from, $to]);
        if (isset($cache[$key])) {
            return $cache[$key];
        }

        /** @var false|array<array{id: string, name: string, diff: string}> $result */
        $result = wp_get_revision_ui_diff($degreeProgramId, $from, $to);
        if (!$result) {
            $cache[$key] = [];
            return $cache[$key];
        }

        $formattedResult = [];
        foreach ($result as $diff) {
            $formattedResult[] = [
                'id' => $diff['id'],
                'name' => $diff['name'],
                'diff' => $this->formatDiffTable($diff['diff']),
            ];
        }

        $cache[$key] = $formattedResult;
        return $cache[$key];
    }

    private function formatDiffTable(string $table): string
    {
        libxml_use_internal_errors(true);
        $document = new DOMDocument();
        $encodedContent = (string) mb_convert_encoding($table, 'HTML-ENTITIES', 'UTF-8');
        if (!$encodedContent) {
            return $table;
        }

        $isValidHtml = $document->loadHTML($encodedContent, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
        if (!$isValidHtml) {
            return $table;
        }

        $xpath = new DOMXpath($document);

        $this->removeElements($document, $xpath);
        $this->mergeInlineStyles($xpath);

        return (string) $document->saveHTML();
    }

    private function removeElements(DOMDocument $document, DOMXPath $xpath): void
    {
        foreach (self::ELEMENTS_TO_REMOVE as $xpathSelector) {
            $elements = $xpath->query($xpathSelector);
            if (!$elements instanceof DOMNodeList) {
                continue;
            }

            /** @var DOMNode $element */
            foreach ($elements as $element) {
                $parent = $element->parentNode ?? $document;
                $parent->removeChild($element);
            }
        }
    }

    /**
     * phpcs:disable Inpsyde.CodeQuality.NestingLevel.High
     */
    private function mergeInlineStyles(DOMXPath $xpath): void
    {
        foreach (self::INLINE_STYLES_MAP as $xpathSelector => $inlineStyles) {
            $elements = $xpath->query($xpathSelector);
            if (!$elements instanceof DOMNodeList) {
                continue;
            }

            foreach ($elements as $element) {
                if (!$element instanceof DOMElement) {
                    continue;
                }

                $this->updateStyleAttribute($element, $inlineStyles);
            }
        }
    }

    /**
     * @psalm-param array<string> $inlineStyles
     */
    private function updateStyleAttribute(DOMElement $element, array $inlineStyles): void
    {
        $styles = $element->getAttribute('style');
        $styles = array_filter(explode(';', $styles));
        $styles = array_merge($styles, $inlineStyles);
        $element->setAttribute('style', implode(';', $styles) . ';');
    }
}
