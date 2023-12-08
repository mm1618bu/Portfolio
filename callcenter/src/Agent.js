// Agent.js
import React from 'react';

const Agent = ({ name, state, queue, elapsedTime }) => (
  <div className={`Agent ${state}`}>
    <p>{name}</p>
    <p>{state}</p>
    <p>{queue}</p>
    {elapsedTime > 0 && (
      <p>
        Elapsed Time: {formatElapsedTime(elapsedTime)}
      </p>
    )}
  </div>
);

const formatElapsedTime = (elapsedTime) => {
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  return `${minutes}m ${seconds}s`;
};

export default Agent;
