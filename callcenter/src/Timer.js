// Timer.js
import React, { useEffect, useCallback, useState } from 'react';

const Timer = ({ agents, updateAgentState }) => {
  const [stateDurations] = useState({
    Talking: 900, // 180 seconds (3 minutes) in the Talking state
    Break: 900, // 20 seconds (for example) in the Break state
    Ready: 120, // 30 seconds (for example) in the Ready state
    Lunch: 900,
    Project: 500,
    Meeting: 500
  });

  const getRandomState = () => {
    const states = ['Ready', 'Talking', 'Lunch', 'Break', 'Project', 'Meeting'];
    const randomIndex = Math.floor(Math.random() * states.length);
    return states[randomIndex];
  };

  const handleStateUpdate = useCallback(() => {
    // Simulate agent state changes
    agents.forEach((currentAgent) => {
      const agentIdToUpdate = currentAgent.id;
      const currentState = currentAgent.state;
      const elapsedTime = currentAgent.elapsedTime + 1; // Increment elapsed time

      if (currentState === 'Ready' && elapsedTime >= stateDurations.Ready) {
        // Transition to a new state after 100ms in Ready state
        updateAgentState(agentIdToUpdate, getRandomState());
      } else if (currentState === 'Break' && elapsedTime >= stateDurations.Break) {
        // Transition back to Ready state when Break time is complete
        updateAgentState(agentIdToUpdate, 'Ready');
      } else if (currentState === 'Lunch' && elapsedTime >= stateDurations.Lunch) {
        // Transition back to Ready state after 180 seconds in Lunch state
        updateAgentState(agentIdToUpdate, 'Ready');
      } else if (currentState === 'Talking' && elapsedTime >= stateDurations.Talking) {
        // Transition back to Ready state after 180 seconds in Talking state
        updateAgentState(agentIdToUpdate, 'Ready');
      } else if (currentState === 'Project' && elapsedTime >= stateDurations.Project) {
        // Transition back to Ready state after 180 seconds in Talking state
        updateAgentState(agentIdToUpdate, 'Ready');
      } else if (currentState === 'Meeting' && elapsedTime >= stateDurations.Meeting) {
        // Transition back to Ready state after 180 seconds in Talking state
        updateAgentState(agentIdToUpdate, 'Ready');
      } else {
        // Update elapsed time for the current state
        updateAgentState(agentIdToUpdate, currentState, elapsedTime);
      }
    });
  }, [agents, updateAgentState, stateDurations]);

  useEffect(() => {
    const totalAgents = agents.length;
    const intervalDuration = Math.max(100, 1000 / totalAgents); // Minimum 100ms interval

    const interval = setInterval(() => {
      handleStateUpdate();
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [handleStateUpdate, agents]);

  return null;
};

export default Timer;
