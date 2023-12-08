// Timer.js
import React, { useEffect, useCallback, useState } from 'react';

const Timer = ({ agents, updateAgentState }) => {
  const [stateDurations] = useState({
    Talking: 60, // 5 minutes in seconds
    WrapUp: 15, // 2 minutes in seconds
    Break:  60, // 4 minutes in seconds
    Ready: 30, // 30 seconds
  });

  const getRandomState = () => {
    const states = ['Ready', 'Talking', 'WrapUp', 'Lunch', 'Break'];
    const randomIndex = Math.floor(Math.random() * states.length);
    return states[randomIndex];
  };

  const handleStateUpdate = useCallback(() => {
    // Simulate agent state changes
    const agentIdToUpdate = Math.floor(Math.random() * agents.length) + 1;
    const currentAgent = agents.find((agent) => agent.id === agentIdToUpdate);
    const currentState = currentAgent.state;
    const elapsedTime = currentAgent.elapsedTime + 1; // Increment elapsed time

    if (currentState === 'Ready' && elapsedTime >= stateDurations.Ready) {
      // Transition to a new state after 100ms in Ready state
      updateAgentState(agentIdToUpdate, getRandomState());
    } else if (currentState === 'Talking' && elapsedTime >= stateDurations.Talking) {
      // Transition to WrapUp state when Talking time is complete
      updateAgentState(agentIdToUpdate, 'WrapUp');
    } else if (currentState === 'WrapUp' && elapsedTime >= stateDurations.WrapUp) {
      // Transition to a new state when WrapUp time is complete
      updateAgentState(agentIdToUpdate, getRandomState());
    } else if (currentState === 'Break' && elapsedTime >= stateDurations.Break) {
      // Transition back to Ready state when Break time is complete
      updateAgentState(agentIdToUpdate, 'Ready');
    } else {
      // Update elapsed time for the current state
      updateAgentState(agentIdToUpdate, currentState, elapsedTime);
    }
  }, [agents, updateAgentState, stateDurations]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleStateUpdate();
    }, 100); // Update every 100ms

    return () => clearInterval(interval);
  }, [handleStateUpdate]);

  return null;
};

export default Timer;
