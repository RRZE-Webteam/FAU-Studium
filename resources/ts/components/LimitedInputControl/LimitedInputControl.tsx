import React, { ReactNode, useEffect, useState } from 'react';

import { Flex } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import CircularProgress from 'components/CircularProgress';

interface Props {
    maxChars: number;
    value: string;
    children: ({
        maxChars,
        updatedValue,
    }: {
        maxChars: number;
        updatedValue: (text: string) => string;
    }) => ReactNode;
}

const LimitedInputControl = ({ maxChars, children, value }: Props) => {
    const [charsLeft, setCharsLeft] = useState<number>(maxChars);

    useEffect(() => {
        setCharsLeft(maxChars - value.length);
    }, [value, maxChars]);

    const updatedValue = (text: string) => {
        return text.length <= maxChars ? text : text.substring(0, maxChars);
    };

    return (
        <>
            {children({ updatedValue, maxChars })}

            <Flex justify="flex-start">
                <CircularProgress percentage={(charsLeft * 100) / maxChars} squareSize={16} />

                <small>
                    {_x(
                        '%s characters left',
                        'backoffice: limited text input',
                        'fau-degree-program',
                    ).replace('%s', charsLeft.toString())}
                </small>
            </Flex>
        </>
    );
};

export default LimitedInputControl;
