// App.js
import React, { useState } from 'react';
import Week from './Week';
import Assignment from './Assignment';
import StatusBar from './StatusBar';
import './App.css';
import axios from 'axios';  // Import Axios

const App = () => {
  const [progress, setProgress] = useState([
    { week: 1, assignments: ['not-started', 'not-started', 'not-started'] },
    { week: 2, assignments: ['not-started', 'not-started', 'not-started'] },
    { week: 3, assignments: ['not-started', 'not-started', 'not-started'] },
    { week: 4, assignments: ['not-started', 'not-started', 'not-started'] },
    { week: 5, assignments: ['not-started', 'not-started', 'not-started'] },
    { week: 6, assignments: ['not-started', 'not-started', 'not-started'] },
    { week: 7, assignments: ['not-started', 'not-started', 'not-started'] },
    { week: 8, assignments: ['not-started', 'not-started', 'not-started'] },
    { week: 9, assignments: ['not-started', 'not-started', 'not-started'] },
    { week: 10, assignments: ['not-started', 'not-started', 'not-started'] },
    // ... for all 13 weeks
  ]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('mongodb+srv://admin:admin@cluster0.4ohy84q.mongodb.net/api/register', { email, password });
      console.log('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleLogin = async () => {
    // Implement the login functionality if needed
  };

  // eslint-disable-next-line no-unused-vars
  const handleLogout = () => {
    // Implement the logout functionality if needed
  };

  // eslint-disable-next-line no-unused-vars
  const handleAddProgress = async () => {
    // Implement the add progress functionality if needed
  };

  // eslint-disable-next-line no-unused-vars
  const updateStatus = (weekIndex, assignmentIndex, newStatus) => {
    const newProgress = [...progress];
    newProgress[weekIndex].assignments[assignmentIndex] = newStatus;
    setProgress(newProgress);
  };

  // eslint-disable-next-line no-unused-vars
  const calculateOverallProgress = (progress) => {
    const totalAssignments = progress.reduce((acc, week) => acc + week.assignments.length, 0);
    const completedAssignments = progress.reduce(
      (acc, week) => acc + week.assignments.filter((status) => status === 'completed').length,
      0
    );
    return (completedAssignments / totalAssignments) * 100 || 0;
  };

  // eslint-disable-next-line no-unused-vars
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <header>
        <h1>Course Progress Tracker</h1>
        <div className="user-actions">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="current-date">
          <p>Current Date: {getCurrentDate()}</p>
        </div>
      </header>

      <StatusBar progress={calculateOverallProgress(progress)} />

      {progress.map((week, weekIndex) => (
        <Week key={weekIndex} weekNumber={week.week}>
          {week.assignments.map((status, assignmentIndex) => (
            <Assignment
              key={assignmentIndex}
              status={status}
              onUpdateStatus={(newStatus) => updateStatus(weekIndex, assignmentIndex, newStatus)}
            />
          ))}
        </Week>
      ))}
    </div>
  );
};

export default App;
