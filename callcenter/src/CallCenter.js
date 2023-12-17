// CallCenter.js
import React, { useState } from 'react';
import Agent from './Agent';
import Timer from './Timer';
import './CallCenter.css';

// Custom agent names
const customAgentNames = [
  'John Doe',
  'Jane Doe',
  'Alex Smith',
  'Emma Johnson',
  'Michael Brown',
  'Olivia Davis',
  'Daniel Wilson',
  'Sophia Taylor',
  'Matthew Anderson',
  'Emily Thomas',
  'William Harris',
  'Ava Miller',
  'Christopher Baker'
];

const topProgrammingLanguages = [
  'HTML/CSS',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'C#',
  'C',
  'TypeScript',
  'Ruby',
  'Swift',
  'Go',
  'Kotlin',
  'React',
  'Angular',
  'Vue',
  'Next.js',
  'PHP',
  'Perl',
  'Linux',
  'SQL',
  'MongoDB',
  'Wordpress',
  'Magento'
];

const location = [
  "United States T1",
  "United States T2",
  "United States T3",
  "United States T4",
  "United States T5",
  "United States T6",
  "United States T7",
  "United States T8",
  "United States T9",
  "United States T10",
  "Canada",
  "Mexico",
  "England",
  "Ireland",
  "India",
  "China",
  "Phillipines",
  "Nigeria",
  "Brazil",
  "Serbia",
  "Germany",
  "Scottland",
  "Lebanon",
  "Croatia",
  "Egypt",
  "Wales",
  "Pakistan",
  "Ukraine",
  "Syria",
  "South Africa",
  "Cambodia",
  "Estonia",
  "Latvia",
  "Ghana",
  "Armenia",
  "Poland",
  "Venezuela",
  "Turkey",
  "Bangledesh",
  "Vietnam",
  "Romania",
  "Mauritius",
  "Chile",
  "Congo",
  "Bolivia",
  "Thailand",
  "Costa Rica",
  "Algeria",
  "Bulgaria",
  "Italy",
  "Oromia",
  "Myanmar",
  "Bhutan",
  "Liberia",
  "Guinea",
  "Peru",
  "Mali",
  "Hungary",
  "Bosnia",
  "Malaysia",
  "Kenya",
  "Austria",
  "Greece",
  "Slovakia"
];

const getRandomQueue = (languagesArray) => {
  const randomIndex = Math.floor(Math.random() * languagesArray.length);
  return languagesArray[randomIndex];
};

const getRandomLocation = (location) => {
  const randomLocation = Math.floor(Math.random() * location.length);
  return location[randomLocation];
};

const initialAgents = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: customAgentNames[index % customAgentNames.length], // Use custom names cyclically
    state: 'Ready',
    elapsedTime: 0,
    queue: null,
    location: null
  }));

const CallCenter = () => {
  const [agentsCount, setAgentsCount] = useState(50);
  const [agents, setAgents] = useState(initialAgents(agentsCount));

  const updateAgentState = (agentId, newState, elapsedTime = 0) => {
    setAgents((prevAgents) => {
      const updatedAgents = prevAgents.map((agent) =>
        agent.id === agentId
          ? {
              ...agent,
              state: newState,
              location:
                newState === 'Talking' && agent.location === null
                  ? getRandomLocation(location)
                  : agent.location,
              elapsedTime,
              queue:
                newState === 'Talking' && agent.queue === null
                  ? getRandomQueue(topProgrammingLanguages)
                  : agent.queue
            }
          : agent
      );

      const newBreakLunchCount = updatedAgents.filter(
        (agent) => agent.state === 'Break' || agent.state === 'Lunch' || agent.state === 'Project' || agent.state === 'Meeting'
      ).length;

      // Check if the maximum limit is exceeded
      if (newBreakLunchCount <= 10) {
        return updatedAgents;
      } else {
        // Revert the state change if the limit is exceeded
        return prevAgents;
      }
    });
  };

  const getStateCounts = () => {
    const stateCounts = {};

    agents.forEach((agent) => {
      stateCounts[agent.state] = (stateCounts[agent.state] || 0) + 1;
    });

    return stateCounts;
  };

  const stateCounts = getStateCounts();

  const getQueueCounts = () => {
    const queueCounts = {};

    agents.forEach((agent) => {
      if (agent.state === 'Talking' && agent.queue) {
        queueCounts[agent.queue] = (queueCounts[agent.queue] || 0) + 1;
      }
    });

    return queueCounts;
  };

  const queueCounts = getQueueCounts();

  const getLocationCounts = () =>{
    const locationCounts = {};

    agents.forEach((agent) => {
      if (agent.state === 'Talking' && agent.location){
        locationCounts[agent.location] = (locationCounts[agent.location] || 0)+1;
      }
    });

    return locationCounts;
  };

  const locationCounts = getLocationCounts();

  const handleAgentCountChange = (event) => {
    const newAgentsCount = parseInt(event.target.value, 10);
    setAgentsCount(newAgentsCount);
    setAgents(initialAgents(newAgentsCount));
  };


  return (
    <div className="CallCenterGrid">
      <h1>Call Center</h1>
      <div>
        <label htmlFor="agentCount">Number of Agents:</label>
        <select id="agentCount" onChange={handleAgentCountChange} value={agentsCount}>
          {[50, 100, 500, 1000].map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>
      <div className='TableContainer'>
      <div className="QueueCounts">
        <h2>Queue Counts</h2>
        <table>
          <thead>
            <tr>
              <th>Queue</th>
              <th>Call Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(queueCounts).map(([queue, count]) => (
              <tr key={queue}>
                <td>{queue}</td>
                <td>{count} calls</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="StateCounts">
        <h2>State Counts</h2>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Agent Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(stateCounts).map(([state, count]) => (
              <tr key={state}>
                <td>{state}</td>
                <td>{count} agents</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="LocationCounts">
        <h2>Location Counts</h2>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Agent Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(locationCounts).map(([location, count]) => (
              <tr key={location}>
                <td>{location}</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <br></br>
      <div className="AgentsGrid">
        {agents.map((agent) => (
          <Agent
            key={agent.id}
            name={agent.name}
            state={agent.state}
            queue={agent.queue}
            location={agent.location}
            elapsedTime={agent.elapsedTime}
          />
        ))}
      </div>
      <Timer agents={agents} updateAgentState={updateAgentState} />
    </div>
  );
};

export default CallCenter;
