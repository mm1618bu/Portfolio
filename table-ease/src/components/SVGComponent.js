import React, { useState, useRef, useEffect } from 'react';

export default function SVGComponent(){
    const [circleColor, setCircleColor] = useState('#FCBCBC');
    const [pathColor, setPathColor] = useState('#B13838');
    const [rectColor, setRectColor] = useState('#B13838');
    const canvasRef = useRef(null);

    const toggleColor = () => {
        setCircleColor(prevColor => prevColor === '#FCBCBC' ? '#00FF00' : '#FCBCBC');
        setPathColor(prevColor => prevColor === '#B13838' ? '#00FF00' : '#B13838');
        setRectColor(prevColor => prevColor === '#B13838' ? '#00FF00' : '#B13838');
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw circle
        context.beginPath();
        context.arc(42, 42, 26, 0, 2 * Math.PI);
        context.fillStyle = circleColor;
        context.fill();

        // Draw path (simulated with line for simplicity)
        context.beginPath();
        context.moveTo(0.0922852, 34);
        context.lineTo(16.092, 34.0921);
        context.lineTo(16, 50.0918);
        context.lineTo(0.000233166, 49.9997);
        context.closePath();
        context.fillStyle = pathColor;
        context.fill();

        // Draw rectangles
        context.fillStyle = rectColor;
        context.fillRect(34.0923, 68, 16, 16); // Adjusted for simplicity
        context.fillRect(68.0923, 34, 16, 16);
        context.fillRect(34.0923, 0, 16, 16);
    }, [circleColor, pathColor, rectColor]); // Redraw when colors change

    return (
        <canvas
            ref={canvasRef}
            width="200"
            height="221"
            onClick={toggleColor}
            role="img"
            aria-label="Interactive canvas component"
        ></canvas>
    );
};
