import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// Function to generate a random number within a range


// Function to generate a random number within a range
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Function to generate a random letter from the specified set
  const getRandomLetter = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'G', 'H', 'J'];
    return letters[getRandomNumber(0, letters.length - 1)];
  };
  
  // Function to generate a random aisle from A1 to A26, including options for A, B, C, D, E, G, H, J
  const getRandomAisle = () => {
    return `${getRandomLetter()}${getRandomNumber(1, 26)} & ${getRandomLetter()}${getRandomNumber(1, 26)}`;
  };
  
  // Sample data array with random totalScans and aisleAssigned
  const generateData = () => [
    { name: 'John Doe', badgeNumber: '123', scansLeft: 400, scansDone: 0, errors: 2, ratePerMinute: 1.5 },
    { name: 'John Doe', badgeNumber: '123', scansLeft: 400, scansDone: 0, errors: 2, ratePerMinute: 1.5 },
    {
        "name": "Haze Smittoune",
        "badgeNumber": 667,
        "scansLeft": 400,
        "scansDone": 19,
        "errors": 6,
        "ratePerMinute": 1.4
      }, {
        "name": "Reinaldo Jefferd",
        "badgeNumber": 642,
        "scansLeft": 400,
        "scansDone": 60,
        "errors": 2,
        "ratePerMinute": 1.8
      }, {
        "name": "Anderea Snoddy",
        "badgeNumber": 581,
        "scansLeft": 400,
        "scansDone": 50,
        "errors": 5,
        "ratePerMinute": 1.4
      }, {
        "name": "Hollis Beckham",
        "badgeNumber": 80,
        "scansLeft": 400,
        "scansDone": 99,
        "errors": 0,
        "ratePerMinute": 1.5
      }, {
        "name": "Aryn Kealy",
        "badgeNumber": 725,
        "scansLeft": 60,
        "scansDone": 36,
        "errors": 10,
        "ratePerMinute": 1.1
      }
    // Add more objects for each row you want in your table
  ].map(item => ({
    ...item,
    totalScans: getRandomNumber(500, 800), // Generate a random totalScans between 50 and 150
    aisleAssigned: getRandomAisle(), // Assign a random aisle from A1 to A26
  }));
  
  export default function Main() {
    const [data, setData] = useState(generateData());

    const updateScansLeft = useCallback(() => {
        const updatedData = data.map(item => {
          const decrement = Math.floor(Math.random() * 2) + 1; // Randomly subtracts 1 or 2 from scansLeft
          const newScansLeft = Math.max(0, item.scansLeft - decrement); // Ensure scansLeft doesn't go below 0
          const newScansDone = item.totalScans - newScansLeft; // Correct calculation for scansDone
          return {
            ...item,
            scansLeft: newScansLeft,
            scansDone: newScansDone,
          };
        });
        setData(updatedData);
      }, [data]);
  
    useEffect(() => {
      const intervalId = setInterval(updateScansLeft, 3000); // Update every 30 seconds
  
      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }, [updateScansLeft]); // useEffect with updateScansLeft as a dependency
  
    // Your component's return statement
 
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Badge #</th>
            <th>Aisle(s) Assigned to</th>
            <th>Total Scans</th>
            <th>Scans Left</th>
            <th>Scans Done</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.badgeNumber}</td>
              <td>{row.aisleAssigned}</td>
              <td>{row.totalScans}</td>
              <td>{row.scansLeft}</td>
              <td>{row.scansDone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}