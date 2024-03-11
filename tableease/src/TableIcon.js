import React, { useState } from 'react';

const TableIcon = ({ number, shape }) => {
  const [fillColor, setFillColor] = useState("#FFD700");

  const handleClick = () => {
    if (fillColor === "#FFD700") {
      setFillColor("#FF0000"); // Change fill color to red if it's normal
    } else {
      setFillColor("#FFD700"); // Change fill color back to normal if it's red
    }
  };

  const renderSquareTable = () => (
    <>
      {/* Table */}
      <rect x="20" y="40" width="60" height="40" fill={fillColor} stroke="#000000" strokeWidth="2" onClick={handleClick} />
    </>
  );

  const renderCircleTable = () => (
    <>
      {/* Table */}
      <circle cx="50" cy="50" r="30" fill={fillColor} stroke="#000000" strokeWidth="2" onClick={handleClick} />
    </>
  );

  const renderSeats = () => (
    <>
      {/* Seats */}
      {/* Top seat */}
      <circle cx="50" cy="20" r="8" fill="#FFA500" />
      {/* Right seat */}
      <circle cx="80" cy="50" r="8" fill="#FFA500" />
      {/* Bottom seat */}
      <circle cx="50" cy="80" r="8" fill="#FFA500" />
      {/* Left seat */}
      <circle cx="20" cy="50" r="8" fill="#FFA500" />
    </>
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      {shape === "square" ? renderSquareTable() : renderCircleTable()}
      
      {/* Seats */}
      {renderSeats()}
      
      {/* Table Number */}
      <text x="50" y="55" textAnchor="middle" fontSize="16" fill="#000000">{number}</text>
    </svg>
  );
};

export default TableIcon;
