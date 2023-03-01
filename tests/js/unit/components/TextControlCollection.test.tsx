import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';

import TextControlCollection from 'components/TextControlCollection';

jest.mock('nanoid', () => ({ nanoid: () => `key_${Math.random()}` }));

describe('TextControlCollection', () => {
    it('should show one text field initially', () => {
        render(<TextControlCollection value={[]} onChange={() => {}} />);
        expect(screen.queryAllByRole('textbox').length).toBe(1);
    });

    it('should render text fields with whatever passed as value', () => {
        render(<TextControlCollection value={['foo', 'bar', 'baz']} onChange={() => {}} />);
        const textInputs: HTMLInputElement[] = screen.getAllByRole('textbox');
        expect(textInputs[0].value).toBe('foo');
        expect(textInputs[1].value).toBe('bar');
        expect(textInputs[2].value).toBe('baz');
    });

    it('should add one text field after clicking add button', () => {
        render(<TextControlCollection value={[]} onChange={() => {}} />);
        const button = screen.getByRole('button', { name: /Add/i });

        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(screen.queryAllByRole('textbox').length).toBe(2);
    });

    it('should remove text field after clicking x button', () => {
        render(<TextControlCollection value={['']} onChange={() => {}} />);
        const button = screen.getByRole('button', { name: /remove/i });

        expect(screen.queryAllByRole('textbox').length).toBe(1);

        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(screen.queryAllByRole('textbox').length).toBe(0);
    });

    it('should call onChange with same texts typed in textboxes', () => {
        const onChange = jest.fn();
        render(<TextControlCollection value={['', '']} onChange={onChange} />);

        const textInputs = screen.getAllByRole('textbox');
        fireEvent.change(textInputs[0], { target: { value: 'foo' } });
        fireEvent.change(textInputs[1], { target: { value: 'bar' } });
        expect(onChange).toBeCalledWith(['foo', 'bar']);
    });
});
