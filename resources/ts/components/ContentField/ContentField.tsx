import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import {
    BlockEditorKeyboardShortcuts,
    BlockEditorProvider,
    BlockList,
    BlockTools,
    DefaultBlockAppender,
    ObserveTyping,
    store as blockEditorStore,
    WritingFlow,
} from '@wordpress/block-editor';
import { parse, serialize } from '@wordpress/blocks';
import { Popover, SlotFillProvider } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';

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

const BlockDeselectListener = ({ editorRef }: { editorRef: RefObject<HTMLDivElement> }) => {
    const { clearSelectedBlock } = useDispatch(blockEditorStore);

    const blurListener = (event: MouseEvent) => {
        if (!editorRef.current || editorRef.current.contains(event.target as Node)) {
            return;
        }

        clearSelectedBlock();
    };

    useEffect(() => {
        document.body.addEventListener('click', blurListener, { capture: true });

        return () => document.body.removeEventListener('click', blurListener, { capture: true });
    }, []);

    return null;
};

/**
 * Provides restricted Block Editor UI.
 * Allowed blocks and formatting options are limited.
 *
 * @param content Serialized blocks string
 * @param onChange Callback to update content
 */
const ContentField = ({ content, onChange }: ContentFieldProps) => {
    const [currentBlocks, setCurrentBlocks] = useState(parse(content));
    const editorRef = useRef<HTMLDivElement>(null);

    /**
     * The `onChange` callback is fired only when changes are considered final,
     * i.e., when the user switches to another block.
     * To prevent incomplete persisting, we have to serialize the blocks `onInput`.
     * But since the callback runs on every attribute change,
     * a debounced version of the function for improved performance existed but was removed due to issues.
     * TODO: Bring back performance considerations using a debounced update
     */
    const updateValue = (blocks) => {
        onChange(serialize(blocks));
    };

    const settings = useBlockEditorSettings();

    return (
        <BlockEditorProvider
            value={currentBlocks}
            onInput={(blocks) => {
                setCurrentBlocks(blocks);
                updateValue(blocks);
            }}
            onChange={(blocks) => {
                setCurrentBlocks(blocks);
                updateValue(blocks);
            }}
            settings={settings}
        >
            <div ref={editorRef} className="fau-content-field">
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
                                    <BlockDeselectListener editorRef={editorRef} />
                                </ObserveTyping>
                            </WritingFlow>
                        </BlockTools>
                    </StyledEditorWrapper>
                    <Popover.Slot />
                </SlotFillProvider>
            </div>
        </BlockEditorProvider>
    );
};

export default ContentField;
