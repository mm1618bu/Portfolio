// Agent.js
import React from 'react';

const Agent = ({ name, state, queue, location, elapsedTime }) => (
  <div className={`Agent ${state}`}>
    <span>
      <p>{name}</p>
      <p>{state}</p>
    </span>
    <span>
      {state === 'Talking' && <p>{queue}</p>}
      {state === 'Talking' && <p>{location}</p>}
      <p>{formatElapsedTime(elapsedTime)}</p>
    </span>
  </div>
);

const formatElapsedTime = (elapsedTime) => {
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  return `${minutes}m ${seconds}s`;
};

export default Agent;
