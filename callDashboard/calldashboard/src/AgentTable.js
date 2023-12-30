import React, { useEffect, useState } from 'react';
import './App.css';

const AgentTable = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Generate initial random data
    generateRandomData();

    // Update state duration every second
    const intervalId = setInterval(() => updateDuration(), 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const generateRandomData = () => {
    const getRandomValue = (array) => array[Math.floor(Math.random() * array.length)];

    const locations = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'Japan', 'India', 'Brazil', 'China'];
    const queues = ['HTML', 'CSS', 'Javascript', 'Python'];
    const states = ['Ready', 'Talking', 'Meeting', 'Project', 'Break', 'Lunch'];
    const agentNames = [
      'John Smith', 'Jane Doe', 'Michael Johnson', 'Emily Davis', 'Christopher Brown',
      'Emma Taylor', 'Daniel Wilson', 'Olivia Miller', 'Matthew Anderson', 'Sophia Martinez',
      'Andrew Jackson', 'Ava White', 'Ethan Harris', 'Isabella Thompson', 'William Hall',
      'Mia Adams', 'Alexander Wright', 'Abigail Lee', 'James Turner', 'Grace Scott',
      'Benjamin Evans', 'Chloe Clark', 'David Walker', 'Ella Baker', 'Joseph Carter',
      'Avery Garcia', 'Ryan Cooper', 'Madison Hill', 'Samuel Hayes', 'Lily Murphy',
      'Nicholas Ward', 'Zoe Foster', 'Christopher Morris', 'Hannah Sullivan', 'Jackson Reed',
      'Aria Torres', 'Logan Nelson', 'Sofia Rivera', 'Caleb Mitchell', 'Addison Price',
    ];

    const randomAgents = agentNames.map((name, index) => {
      let initialState = 'Ready';
      

      return {
        id: index + 1,
        name,
        state: initialState,
        stateDuration: 0,
        countryCallingFrom: '',
        queueName: '',
      };
    });

    setAgents(randomAgents);
  };

  const updateDuration = () => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) => {
        const updatedDuration = agent.stateDuration >= 30 ? 1 : agent.stateDuration + 1;
        const updatedState = agent.stateDuration >= 30 ? getRandomState() : agent.state;
        const updatedCountry = agent.stateDuration >= 30 ? getRandomCountry() : agent.countryCallingFrom;
        const updatedQueue = agent.stateDuration >= 30 ? getRandomQueue() : agent.queueName;

        return {
          ...agent,
          state: updatedState,
          stateDuration: updatedDuration,
          countryCallingFrom: updatedCountry,
          queueName: updatedQueue,
        };
      })
    );
  };

  const getRandomState = () => {
    const states = ['Ready', 'Talking', 'Meeting', 'Project', 'Break', 'Lunch'];
    return states[Math.floor(Math.random() * states.length)];
  };

  const getRandomCountry = () => {
    const locations = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'Japan', 'India', 'Brazil', 'China'];
    return locations[Math.floor(Math.random() * locations.length)];
  };

  const getRandomQueue = () => {
    const queues = ['HTML', 'CSS', 'Javascript', 'Python'];
    return queues[Math.floor(Math.random() * queues.length)];
  };

  return (
    <div>
      <h2>Agent Table</h2>
      <table>
        <thead>
          <tr>
            <th>Agent Name</th>
            <th>State</th>
            <th>State Duration</th>
            <th>Country Calling From</th>
            <th>Queue Name</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id}>
              <td>{agent.name}</td>
              <td>{agent.state}</td>
              <td>{agent.stateDuration} seconds</td>
              <td>{agent.state === 'Talking' ? agent.countryCallingFrom : ''}</td>
              <td>{agent.state === 'Talking' ? agent.queueName : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentTable;
