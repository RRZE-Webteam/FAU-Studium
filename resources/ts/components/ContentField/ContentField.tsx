import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import {
    BlockEditorProvider,
    BlockList,
    BlockTools,
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
    border: 1px solid #757575;
    padding: 10px;
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
                <BlockTools>
                    <WritingFlow>
                        <ObserveTyping>
                            <StyledEditorWrapper>
                                <BlockList />
                            </StyledEditorWrapper>
                        </ObserveTyping>
                    </WritingFlow>
                </BlockTools>
                <Popover.Slot />
            </SlotFillProvider>
        </BlockEditorProvider>
    );
};

export default ContentField;
