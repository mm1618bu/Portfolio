import React from 'react';
import SVGComponent from './SVGComponent';
import '../App.css'; // Ensure you have this file for custom styles

const ContainerComponent = () => {
    return (
        <div className="container">
            {Array.from({ length: 16 }, (_, index) => (
                <SVGComponent key={index} />
            ))}
        </div>
    );
};

export default ContainerComponent;
