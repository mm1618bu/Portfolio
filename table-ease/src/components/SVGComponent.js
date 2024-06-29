import React, { useState } from 'react';
import '../App.css';

const SVGComponent = () => {
    // Initialize state with the default fill colors
    const [circleColor, setCircleColor] = useState('#FCBCBC');
    const [pathColor, setPathColor] = useState('#B13838');
    const [rectColor, setRectColor] = useState('#B13838');

    // Function to toggle the fill color on click
    const toggleColor = () => {
        setCircleColor(prevColor => prevColor === '#FCBCBC' ? '#00FF00' : '#FCBCBC');
        setPathColor(prevColor => prevColor === '#B13838' ? '#00FF00' : '#B13838');
        setRectColor(prevColor => prevColor === '#B13838' ? '#00FF00' : '#B13838');
    };

    return (
        <svg width="493" height="221" viewBox="0 0 493 221" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleColor}>
            <circle cx="42" cy="42" r="26" fill={circleColor}/>
            <path d="M0.0922852 34L16.092 34.0921L16 50.0918L0.000233166 49.9997L0.0922852 34Z" fill={pathColor}/>
            <rect x="34.0923" y="68" width="16" height="16" transform="rotate(0.329639 34.0923 68)" fill={rectColor}/>
            <rect x="68.0923" y="34" width="16" height="16" transform="rotate(0.329639 68.0923 34)" fill={rectColor}/>
            <rect x="34.0923" width="16" height="16" transform="rotate(0.329639 34.0923 0)" fill={rectColor}/>
        </svg>
    );
};

export default SVGComponent;