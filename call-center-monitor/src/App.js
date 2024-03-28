import React, { useState, useEffect } from 'react';
import './App.css';

const generateRandomData = (
  agent,
  currentTime,
  lastUpdateTime,
  currentState,
  remainingTime,
  currentQueue,
  currentCountry,
  agentStatesCount,
  talkingAgentsCount
) => {
  const states = ['Not', 'Ready', 'Talking', 'Lunch'];
  const queues = ['React_CS', 'Java_CS', 'Python_CS'];
  const countries = ['Qatar', 'Luxembourg', 'Singapore', 'Brunei', 'Ireland', 'Norway', 'United Arab Emirates', 'Kuwait', 'Switzerland', 'Hong Kong', 'Saudi Arabia', 'Netherlands', 'Bahrain', 'Austria', 'Australia', 'Germany', 'Canada', 'Sweden', 'Belgium', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  let updatedState;
  let updatedRemainingTime;
  let updatedQueue = currentQueue;
  let updatedCountry = currentCountry;

  // Initialize the count for each state if not present
  if (!agentStatesCount) {
    agentStatesCount = {
      'Not': 0,
      'Ready': 0,
      'Talking': 0,
      'Lunch': 0
    };
  }

  if (!talkingAgentsCount) {
    talkingAgentsCount = 1;
  }

  if (remainingTime <= 0) {
    // If the duration is over, change to a new random state
    updatedState = states[Math.floor(Math.random() * states.length)];

    // Ensure no more than 6 agents in total in the specified states
    const totalOtherStatesCount = Object.keys(agentStatesCount)
      .filter(state => ['Lunch'].includes(state))
      .reduce((total, state) => total + agentStatesCount[state], 0);

    // Ensure no more than 7 agents in the 'Talking' state
    if (['Lunch'].includes(updatedState) && totalOtherStatesCount >= 10) {
      updatedState = 'Talking';
    }


    // Update the count for the new state
    agentStatesCount[updatedState]++;
    
    if (updatedState === 'Talking') {
      talkingAgentsCount++;
    }

    // Switch statement for setting durations based on state
    switch (updatedState) {
      case 'Available':
        updatedRemainingTime = 60; // 60 seconds
        break;
      case 'On Call':
        updatedRemainingTime = 90; // 90 seconds
        break;
      case 'Break':
        updatedRemainingTime = 120; // 120 seconds
        break;
      default:
        updatedRemainingTime = 60; // Default to 60 seconds for other states
    }

    // Change queue and country after the duration of state changes
    updatedQueue = queues[Math.floor(Math.random() * queues.length)];
    updatedCountry = countries[Math.floor(Math.random() * countries.length)];
  } else {
    // If the duration is not over, keep the current state
    updatedState = currentState;
    updatedRemainingTime = remainingTime;
  }

  const minutes = Math.floor(updatedRemainingTime / 60);
  const seconds = updatedRemainingTime % 60;

  const formattedDuration = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return {
    agent,
    state: updatedState,
    duration: formattedDuration,
    queue: updatedQueue,
    country: updatedCountry,
    lastUpdateTime: currentTime,
    remainingTime: updatedRemainingTime - 1, // Decrease remaining time by 1 second
    agentStatesCount,
    talkingAgentsCount,
  };
};

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const agents = ['John Smith', 'Alice Johnson', 'Robert Davis', 'Emily White', 'Michael Brown', 'Olivia Martinez', 'William Taylor', 'Sophia Anderson', 'James Harris', 'Ava Wilson', 'Daniel Thompson', 'Emma Davis', 'Matthew Garcia', 'Isabella Miller', 'Christopher Martinez', 'Amelia Johnson', 'David White', 'Sophie Taylor', 'Daniel Robinson', 'Olivia Lee', 'Andrew Moore', 'Grace Harris', 'Joseph Taylor', 'Avery Wilson', 'Oliver Robinson', 'Ella Davis', 'Ryan Anderson', 'Chloe Smith', 'Samuel White', 'Mia Taylor', 'Nicholas Davis', 'Lily Robinson', 'Benjamin Harris', 'Charlotte Wilson', 'Jackson Brown', 'Aria Smith', 'Logan Garcia', 'Sofia Wilson', 'Ethan Robinson']; // Add more agents as needed
    const currentTime = Date.now();
    const initialData = agents.map((agent) =>
      generateRandomData(agent, currentTime, currentTime, 'Not', 10, null, null)
    );
    setData(initialData);

    const intervalId = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) =>
          generateRandomData(
            item.agent,
            Date.now(),
            item.lastUpdateTime,
            item.state,
            item.remainingTime,
            item.queue,
            item.country,
            item.agentStatesCount,
            item.talkingAgentsCount
          )
        )
      );
    }, 1000); // 1 second in milliseconds

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array since agents are defined inside useEffect

  return (
    <div>
      <h1>Call Center Monitoring</h1>
      <table>
        <thead>
          <tr>
            <th>Agent</th>
            <th>State</th>
            <th>Duration</th>
            <th>Queue</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.agent}>
              <td>{item.agent}</td>
              <td className={item.state}>{item.state}</td>
              <td>{item.duration}</td>
              <td>{item.queue}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
