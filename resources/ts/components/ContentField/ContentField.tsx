import React, { useMemo, useState } from 'react';

import {
    BlockEditorProvider,
    BlockList,
    BlockTools,
    ObserveTyping,
    WritingFlow,
} from '@wordpress/block-editor';
import { Popover, SlotFillProvider } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

const ALLOWED_BLOCK_TYPES = ['core/paragraph'];

const defaultSettings = {
    allowedBlockTypes: ALLOWED_BLOCK_TYPES,
};

const ContentField = () => {
    const [currentBlocks, setCurrentBlocks] = useState([]);
    const canUserCreateMedia = useSelect((select: any) => {
        return !!select('core').canUser('create', 'media');
    }, []);

    const settings = useMemo(() => {
        if (!canUserCreateMedia) {
            return defaultSettings;
        }

        return {
            ...defaultSettings,
        };
    }, [defaultSettings]);

    return (
        <BlockEditorProvider
            value={currentBlocks}
            onInput={(blocks) => setCurrentBlocks(blocks)}
            onChange={(blocks) => setCurrentBlocks(blocks)}
            settings={settings}
        >
            <SlotFillProvider>
                <BlockTools>
                    <WritingFlow>
                        <ObserveTyping>
                            <BlockList />
                        </ObserveTyping>
                    </WritingFlow>
                </BlockTools>
                <Popover.Slot />
            </SlotFillProvider>
        </BlockEditorProvider>
    );
};

export default ContentField;
