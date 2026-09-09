import React from 'react';
import { createPortal } from 'react-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';

import Edit from '../../../../resources/ts/blocks/degree-program-form/Edit';

jest.mock('@wordpress/block-editor', () => ({
    useBlockProps: (props: object) => props,
}));

jest.mock('../../../../resources/ts/components/DegreeProgramEditForm', () => {
    const React = require('react');
    const styled = require('styled-components').default;
    const Field = styled.button`
        padding: ${(props: { expanded: boolean }) => props.expanded ? '17px' : '13px'};
    `;

    return {
        __esModule: true,
        default: function TestForm() {
            const [expanded, setExpanded] = React.useState(false);
            return React.createElement(Field, {
                expanded,
                onClick: () => setExpanded(true),
            }, 'Show another field');
        },
    };
});

const generatedRules = (ownerDocument: Document): string =>
    Array.from(ownerDocument.querySelectorAll<HTMLStyleElement>('style[data-styled]'))
        .flatMap((style) => Array.from(style.sheet?.cssRules ?? []))
        .map((rule) => rule.cssText)
        .join('\n');

describe('degree-program form styles', () => {
    const frames: HTMLIFrameElement[] = [];

    const createCanvas = (): Document => {
        const frame = document.createElement('iframe');
        document.body.appendChild(frame);
        frames.push(frame);
        return frame.contentDocument!;
    };

    afterEach(() => {
        cleanup();
        frames.splice(0).forEach((frame) => frame.remove());
    });

    it('inserts initial and newly generated styles into the canvas document', () => {
        const canvas = createCanvas();
        render(createPortal(<Edit />, canvas.body));

        expect(generatedRules(canvas)).toMatch(/padding:\s*13px/);
        expect(generatedRules(document)).not.toMatch(/padding:\s*13px/);

        fireEvent.click(canvas.querySelector('button')!);

        expect(generatedRules(canvas)).toMatch(/padding:\s*17px/);
        expect(generatedRules(document)).not.toMatch(/padding:\s*17px/);
    });

    it('targets the replacement document when the editor recreates its canvas', () => {
        const firstCanvas = createCanvas();
        const view = render(createPortal(<Edit />, firstCanvas.body));
        expect(generatedRules(firstCanvas)).toMatch(/padding:\s*13px/);

        const nextCanvas = createCanvas();
        view.rerender(createPortal(<Edit />, nextCanvas.body));

        expect(nextCanvas.querySelector('button')).not.toBeNull();
        expect(generatedRules(nextCanvas)).toMatch(/padding:\s*13px/);
        fireEvent.click(nextCanvas.querySelector('button')!);
        expect(generatedRules(nextCanvas)).toMatch(/padding:\s*17px/);
    });

    it('also supports a form rendered outside an iframe', () => {
        const view = render(<Edit />);

        expect(view.getByRole('button')).toBeInTheDocument();
        expect(generatedRules(document)).toMatch(/padding:\s*13px/);
    });
});
