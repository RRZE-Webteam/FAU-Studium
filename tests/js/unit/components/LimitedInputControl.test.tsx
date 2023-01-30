import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import LimitedInputControl from 'components/LimitedInputControl';

const TextInput = () => {
    const [text, setText] = useState('');

    return (
        <LimitedInputControl value={text} maxChars={10}>
            {({ updatedValue }) => (
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(updatedValue(e.target.value))}
                />
            )}
        </LimitedInputControl>
    );
};

describe('LimitedInputControl', () => {
    it('should display correct remaining characters', () => {
        render(<TextInput />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'abc' } });
        expect(screen.queryByText('7 characters left')).toBeInTheDocument();
    });

    it('should truncate texts longer than limit', () => {
        render(<TextInput />);

        const input: HTMLInputElement = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'foobarbazfoobarbazgoobarbaz' } });
        expect(input.value).toBe('foobarbazf');
    });

    it('should stop updating textfield when it reaches limit', () => {
        render(<TextInput />);

        const input: HTMLInputElement = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'abcdefghij' } });
        expect(input.value).toBe('abcdefghij');
        fireEvent.change(input, { target: { value: 'abcdefghijk' } });
        expect(input.value).toBe('abcdefghij');
    });
});
