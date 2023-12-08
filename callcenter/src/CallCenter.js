// CallCenter.js
import React, { useState } from 'react';
import Agent from './Agent';
import Timer from './Timer';
import './CallCenter.css';

const topProgrammingLanguages = [
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'C#',
  'TypeScript',
  'Ruby',
  'Swift',
  'Go',
  'Kotlin',
];

const initialAgents = Array.from({ length: 6 * 6 }, (_, index) => ({
  id: index + 1,
  name: `Agent ${index + 1}`,
  state: 'Ready',
  elapsedTime: 0,
  language: null,
}));

const CallCenter = () => {
  const [agents, setAgents] = useState(initialAgents);

  const updateAgentState = (agentId, newState, elapsedTime = 0) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === agentId
          ? {
              ...agent,
              state: newState,
              elapsedTime,
              language:
                newState === 'Talking' && agent.language === null
                  ? getRandomLanguage(topProgrammingLanguages)
                  : agent.language,
            }
          : agent
      )
    );
  };

  const getRandomLanguage = (languagesArray) => {
    const randomIndex = Math.floor(Math.random() * languagesArray.length);
    return languagesArray[randomIndex];
  };

  const getStateCounts = () => {
    const stateCounts = agents.reduce(
      (counts, agent) => {
        counts[agent.state] += 1;
        return counts;
      },
      { Ready: 0, Talking: 0, WrapUp: 0, Break: 0, Lunch: 0 }
    );

    return stateCounts;
  };

  const stateCounts = getStateCounts();

  return (
    <div className="CallCenterGrid">
      <h1>Call Center</h1>
      <div className="StateCounts">
        {Object.entries(stateCounts).map(([state, count]) => (
          <p key={state}>
            {state}: {count}
          </p>
        ))}
      </div>
      <div className="AgentsGrid">
        {agents.map((agent) => (
          <Agent
            key={agent.id}
            name={agent.name}
            state={agent.state}
            elapsedTime={agent.elapsedTime}
            language={agent.language}
          />
        ))}
      </div>
      <Timer agents={agents} updateAgentState={updateAgentState} />
    </div>
  );
};

export default CallCenter;
