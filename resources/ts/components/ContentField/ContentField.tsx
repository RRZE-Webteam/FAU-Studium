import React, {
	RefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
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

import { useFieldContext } from '../FormField/FormField';
import useBlockEditorSettings from './useBlockEditorSettings';

interface ContentFieldProps {
	// eslint-disable-next-line react/no-unused-prop-types
	key: string;
	content: string;
	onChange( content: string ): void;
	required?: boolean;
}

const StyledEditorWrapper = styled.div`
	margin: 0 0 12px !important;

	.content-field-blocks-list {
		border: 1px solid #757575;
		padding: 10px;
	}
`;

const BlockDeselectListener = ( {
	editorRef,
}: {
	editorRef: RefObject< HTMLDivElement >;
} ) => {
	const { clearSelectedBlock } = useDispatch( blockEditorStore );

	const blurListener = useCallback(
		( event: MouseEvent ) => {
			if (
				! editorRef.current ||
				editorRef.current.contains( event.target as Node )
			) {
				return;
			}

			clearSelectedBlock();
		},
		[ editorRef, clearSelectedBlock ]
	);

	useEffect( () => {
		document.body.addEventListener( 'click', blurListener, {
			capture: true,
		} );

		return () =>
			document.body.removeEventListener( 'click', blurListener, {
				capture: true,
			} );
	}, [ blurListener ] );

	return null;
};

/* eslint-disable jsdoc/check-param-names */
/**
 * Provides restricted Block Editor UI.
 * Allowed blocks and formatting options are limited.
 *
 * @param {string}                 content  Serialized blocks string
 * @param {function(string): void} onChange Callback to update content
 * @param {?boolean}               required Is required?
 */
const ContentField = ( {
	content,
	onChange,
	required = false,
}: ContentFieldProps ) => {
	const [ currentBlocks, setCurrentBlocks ] = useState( parse( content ) );
	const editorRef = useRef< HTMLDivElement >( null );
	const { selectionChange } = useDispatch( 'core/block-editor' );

	/* The block editor mis-detects the selection inside our nested BlockEditorProvider: the parent editor
	 * sees only `{ clientId }` (no `attributeKey`) and assumes the whole Degree-Program block is
	 * selected, so a paste tries to replace the block. By capturing the paste first and forcing
	 * `attributeKey: 'content'`, we tell WP we are editing _within_ the block, letting the text
	 * drop into the intended paragraph instead of being blocked.
	 */
	useEffect( () => {
		const container = editorRef.current;

		if ( ! container ) {
			return;
		}

		const handlePaste = ( event: ClipboardEvent ) => {
			const target = event.target as HTMLElement;
			const isWithinNestedEditor = container.contains( target );
			if ( ! isWithinNestedEditor ) {
				return;
			}

			const blockElement = target.closest( '[data-block]' );
			if ( ! blockElement ) {
				return;
			}

			const blockId = blockElement.getAttribute( 'data-block' );
			if ( ! blockId ) {
				return;
			}

			selectionChange( blockId, 'content' );
		};

		container.addEventListener( 'paste', handlePaste, true );
		return () =>
			container.removeEventListener( 'paste', handlePaste, true );
	}, [ selectionChange ] );

	/**
	 * The `onChange` callback is fired only when changes are considered final,
	 * i.e., when the user switches to another block.
	 * To prevent incomplete persisting, we have to serialize the blocks `onInput`.
	 * But since the callback runs on every attribute change,
	 * a debounced version of the function for improved performance existed but was removed due to issues.
	 * TODO: Bring back performance considerations using a debounced update
	 * @param blocks
	 */
	const updateValue = ( blocks ) => {
		onChange( serialize( blocks ) );
	};

	const settings = useBlockEditorSettings();
	const { required: fieldRequired } = useFieldContext();

	return (
		<BlockEditorProvider
			value={ currentBlocks }
			onInput={ ( blocks ) => {
				setCurrentBlocks( blocks );
				updateValue( blocks );
			} }
			onChange={ ( blocks ) => {
				setCurrentBlocks( blocks );
				updateValue( blocks );
			} }
			settings={ settings }
		>
			<div ref={ editorRef } className="fau-content-field">
				<SlotFillProvider>
					<StyledEditorWrapper className="editor-styles-wrapper">
						<BlockEditorKeyboardShortcuts.Register />
						<BlockTools>
							<WritingFlow>
								<ObserveTyping>
									<div
										role="textbox"
										aria-required={
											required ?? fieldRequired
										}
									>
										<BlockList
											renderAppender={
												DefaultBlockAppender
											}
											className="content-field-blocks-list"
										/>
										<BlockDeselectListener
											editorRef={ editorRef }
										/>
									</div>
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
