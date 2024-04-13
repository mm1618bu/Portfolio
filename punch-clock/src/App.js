import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [clockedInEmployees, setClockedInEmployees] = useState([]);

  const addEmployee = (name) => {
    // Check if the name contains any digits
    if (/\d/.test(name)) {
      alert("Employee name cannot contain numbers!");
      return;
    }
  
    // Capitalize the first letter of the name
    const capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  
    // Check if the name already exists
    if (employees.some(employee => employee.name === capitalizedFirstName)) {
      alert("Employee with the same name already exists!");
      return;
    }
  
    // Add the employee to the list
    setEmployees([...employees, { name: capitalizedFirstName, isClockedIn: false, isOnLunch: false }]);
  };

  const removeEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  const toggleClock = (index, type) => {
    const updatedEmployees = [...employees];
    const currentTime = new Date();
  
    if (type === 'work') {
      updatedEmployees[index].isClockedIn = !updatedEmployees[index].isClockedIn;
  
      if (updatedEmployees[index].isClockedIn) {
        updatedEmployees[index].clockInTime = currentTime;
        setClockedInEmployees([...clockedInEmployees, updatedEmployees[index]]);
      } else {
        updatedEmployees[index].clockOutTime = currentTime;
        const filteredEmployees = clockedInEmployees.filter(
          (employee) => employee.name !== updatedEmployees[index].name
        );
        setClockedInEmployees(filteredEmployees);
      }
    } else if (type === 'lunch') {
      updatedEmployees[index].isOnLunch = !updatedEmployees[index].isOnLunch;
    }
  
    setEmployees(updatedEmployees);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEmployees([...employees]);
    }, 1000);
    return () => clearInterval(interval);
  }, [employees]);

  return (
    <div className='main'>
      <h1>Employee Clocking System</h1>
      <div>
        <h2>Manage Employees:</h2>
        <ul>
          {employees.map((employee, index) => (
            <li key={index} className={`${employee.isClockedIn ? 'on-duty' : 'off-duty'} ${employee.isOnLunch ? 'on-lunch' : ''}`}>
              {employee.name} {' '} <br/>
              {employee.isClockedIn ? 'ON Duty' : 'OFF Duty'} -{' '}
              {employee.isOnLunch ? 'On Lunch' : 'Not On Lunch'}
              <button onClick={() => toggleClock(index, 'work')}>
                {employee.isClockedIn ? 'Punch Out' : 'Punch In'}
              </button>
              <button onClick={() => toggleClock(index, 'lunch')}>
                {employee.isOnLunch ? 'Lunch Out' : 'Lunch In'}
              </button>
              <button onClick={() => removeEmployee(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter employee name"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addEmployee(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
      < br/>
      <div>
        <h2>Clocked In Employees:</h2>
        <ul>
          {clockedInEmployees.map((employee, index) => {
            const elapsedTime = (Date.now() - employee.clockInTime) / 1000;
            const minutes = Math.floor(elapsedTime / 60);
            const seconds = Math.floor(elapsedTime % 60);
            return (
              <li key={index}>
                {employee.name}: <br/> {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
