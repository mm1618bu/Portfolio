import React from 'react';
import TableIcon from './TableIcon'; // Assuming TableIcon is in the same directory

const TableManager = () => {
  const renderTables = () => {
    const tables = [];
    for (let i = 1; i <= 30; i++) {
      tables.push(<TableIcon key={i} number={i} />);
    }
    return tables;
  };

  return (
    <div>
      <h1>Restaurant Table Booking App</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {renderTables()}
      </div>
    </div>
  );
};

export default TableManager;
