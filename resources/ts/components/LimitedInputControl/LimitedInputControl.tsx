import React, { ReactNode, useEffect, useState } from 'react';

import { Flex } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import CircularProgress from 'components/CircularProgress';

interface Props {
    maxChars: number;
    value: string;
    children: (maxChars: number) => ReactNode;
}

const LimitedInputControl = ({ maxChars, children, value }: Props) => {
    const [charsLeft, setCharsLeft] = useState<number>(maxChars);

    useEffect(() => {
        setCharsLeft(maxChars - value.length);
    }, [value, maxChars]);

    return (
        <>
            {children(maxChars)}

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
