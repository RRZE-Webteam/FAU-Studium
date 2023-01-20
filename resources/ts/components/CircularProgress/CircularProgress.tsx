import React from 'react';
import styled from 'styled-components';

/**
 * Original component:
 * @link https://codepen.io/bbrady/pen/ozMjKE
 */

interface Props {
    percentage: number;
    squareSize?: number;
    strokeWidth?: number;
}

const DEFAULT_SQUARE_SIZE = 100;
const DEFAULT_STROKE_WIDTH = 2;

const StyledSvgCircle = styled.svg`
    stroke: var(--wp-admin-theme-color, #007cba);
`;

const CircularProgressBar = ({
    percentage,
    squareSize = DEFAULT_SQUARE_SIZE,
    strokeWidth = DEFAULT_STROKE_WIDTH,
}: Props) => {
    const radius = (squareSize - strokeWidth) / 2;
    const viewBox = `0 0 ${squareSize} ${squareSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    return (
        <StyledSvgCircle width={squareSize} height={squareSize} viewBox={viewBox}>
            <circle
                className="circle-background"
                cx={squareSize / 2}
                cy={squareSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                fill="none"
                stroke="rgba(167, 152, 181, 0.3)"
            />
            <circle
                className="circle-progress"
                cx={squareSize / 2}
                cy={squareSize / 2}
                r={radius}
                fill="none"
                strokeWidth={`${strokeWidth}px`}
                // Start progress marker at 12 O'Clock
                transform={`rotate(-90 ${squareSize / 2} ${squareSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                }}
            />
        </StyledSvgCircle>
    );
};

CircularProgressBar.defaultProps = {
    squareSize: DEFAULT_SQUARE_SIZE,
    strokeWidth: DEFAULT_STROKE_WIDTH,
};

export default CircularProgressBar;
