import React, { useState } from 'react';
import './App.css';
import WaitingForm from './WaitingForm';
import TableIcon from './TableIcon';
import TableManager from './TableManager';

function App() {
  // State to manage table status and capacity
  const [tables, setTables] = useState([
    { id: 1, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 2, capacity: 2, currentOccupancy: 0, isFull: false },
    { id: 3, capacity: 2, currentOccupancy: 0, isFull: false },
    { id: 4, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 5, capacity: 6, currentOccupancy: 0, isFull: false },
    { id: 6, capacity: 3, currentOccupancy: 0, isFull: false },
    { id: 7, capacity: 5, currentOccupancy: 0, isFull: false },
    { id: 8, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 9, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 10, capacity: 2, currentOccupancy: 0, isFull: false },
    { id: 11, capacity: 2, currentOccupancy: 0, isFull: false },
    { id: 12, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 13, capacity: 6, currentOccupancy: 0, isFull: false },
    { id: 14, capacity: 3, currentOccupancy: 0, isFull: false },
    { id: 15, capacity: 5, currentOccupancy: 0, isFull: false },
    { id: 16, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 17, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 18, capacity: 2, currentOccupancy: 0, isFull: false },
    { id: 19, capacity: 2, currentOccupancy: 0, isFull: false },
    { id: 20, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 21, capacity: 6, currentOccupancy: 0, isFull: false },
    { id: 22, capacity: 3, currentOccupancy: 0, isFull: false },
    { id: 23, capacity: 5, currentOccupancy: 0, isFull: false },
    { id: 24, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 25, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 26, capacity: 2, currentOccupancy: 0, isFull: false },
    { id: 27, capacity: 2, currentOccupancy: 0, isFull: false },
    { id: 28, capacity: 4, currentOccupancy: 0, isFull: false },
    { id: 29, capacity: 6, currentOccupancy: 0, isFull: false },
    { id: 30, capacity: 3, currentOccupancy: 0, isFull: false },
    { id: 31, capacity: 5, currentOccupancy: 0, isFull: false },
    { id: 32, capacity: 4, currentOccupancy: 0, isFull: false },
    // Add more tables as needed
  ]);

  // State to manage waiting queue
  const [waitingQueue, setWaitingQueue] = useState([]);

  // Function to assign people to a table
  const assignTable = (numberOfPeople) => {
    // Filter tables that are not full and have enough capacity
    const availableTables = tables.filter(table => !table.isFull && table.capacity >= numberOfPeople);

    if (availableTables.length > 0) {
      // Select a random table
      const randomTable = availableTables[Math.floor(Math.random() * availableTables.length)];

      // Update the selected table
      setTables(tables.map((table) => {
        if (table.id === randomTable.id) {
          return { ...table, currentOccupancy: numberOfPeople, isFull: true };
        }
        return table;
      }));
    } else {
      // If no tables are available, add the user to the waiting queue
      setWaitingQueue([...waitingQueue, { numberOfPeople }]);
    }


    };
    const clearTable = (index) => {
      setTables(tables.map((table, i) => {
        if (i === index) {
          return { ...table, currentOccupancy: 0, isFull: false };
        }
        return table;
      }));
  };

  return (
    <div className="App">
      <h1>Table Reservation App</h1>
      <div className="tables">
        {tables.map((table, index) => (
          <div key={index} className={`table ${table.isFull ? 'full' : 'empty'}`} onClick={() => clearTable(index)}>
            Table <b>{table.id}</b>  Capacity: {table.capacity}  Occupancy: {table.currentOccupancy}
          </div>
        ))}
      </div>
      <h2>Assign Table</h2>
      <button onClick={() => assignTable(2)}>2 People</button>
      <button onClick={() => assignTable(3)}>3 People</button>
      <button onClick={() => assignTable(4)}>4 People</button>
      <button onClick={() => assignTable(5)}>5 People</button>
      <button onClick={() => assignTable(6)}>6 People</button>
      <div className="waiting-queue">
        <h2>Waiting Queue</h2>
        <ul>
          {waitingQueue.map((item, index) => (
            <li key={index}>Group of {item.numberOfPeople}</li>
          ))}
        </ul>
      </div>
      <WaitingForm />
      <TableIcon />
      <TableManager />
    </div>
  );
}

export default App;