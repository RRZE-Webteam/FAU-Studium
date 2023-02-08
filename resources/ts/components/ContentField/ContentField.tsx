import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import {
    BlockBreadcrumb,
    BlockEditorKeyboardShortcuts,
    BlockEditorProvider,
    BlockList,
    BlockTools,
    DefaultBlockAppender,
    ObserveTyping,
    WritingFlow,
} from '@wordpress/block-editor';
import { parse, serialize } from '@wordpress/blocks';
import { Popover, SlotFillProvider } from '@wordpress/components';
import { useDebounce } from '@wordpress/compose';

import useBlockEditorSettings from './useBlockEditorSettings';

interface ContentFieldProps {
    content: string;

    onChange(content: string): void;
}

const StyledEditorWrapper = styled.div`
    margin: 0 0 12px !important;

    .content-field-blocks-list {
        border: 1px solid #757575;
        padding: 10px;
    }
`;

/**
 * Provides restricted Block Editor UI.
 * Allowed blocks and formatting options are limited.
 *
 * @param content Serialized blocks string
 * @param onChange Callback to update content
 */
const ContentField = ({ content, onChange }: ContentFieldProps) => {
    const [currentBlocks, setCurrentBlocks] = useState(parse(content));

    /**
     * The `onChange` callback is fired only when changes are considered final,
     * i.e., when the user switches to another block.
     * To prevent incomplete persisting, we have to serialize the blocks `onInput`.
     * But since the callback runs on every attribute change,
     * the debounced version of the function is used to improve performance.
     */
    const updateValue = useCallback((blocks) => {
        onChange(serialize(blocks));
    }, []);
    const updateValueDebounced = useDebounce(updateValue, 500);

    const settings = useBlockEditorSettings();

    return (
        <BlockEditorProvider
            value={currentBlocks}
            onInput={(blocks) => {
                setCurrentBlocks(blocks);
                updateValueDebounced(blocks);
            }}
            onChange={(blocks) => {
                setCurrentBlocks(blocks);
                updateValue(blocks);
            }}
            settings={settings}
        >
            <SlotFillProvider>
                <StyledEditorWrapper className="editor-styles-wrapper">
                    <BlockEditorKeyboardShortcuts.Register />
                    <BlockTools>
                        <WritingFlow>
                            <ObserveTyping>
                                <BlockList
                                    renderAppender={DefaultBlockAppender}
                                    className="content-field-blocks-list"
                                />
                            </ObserveTyping>
                        </WritingFlow>
                    </BlockTools>

                    <BlockBreadcrumb />
                </StyledEditorWrapper>
                <Popover.Slot />
            </SlotFillProvider>
        </BlockEditorProvider>
    );
};

export default React.memo(
    ContentField,
    (prevProps, nextProps) => prevProps.content === nextProps.content,
);
