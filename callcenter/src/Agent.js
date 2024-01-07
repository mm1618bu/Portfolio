// Agent.js
import React from 'react';
import './Agent.css';

const Agent = ({ name, state, queue, location, elapsedTime }) => (
  <div className={`Agent ${state}`}>
    <span>
      <p>{name}</p>
      <p>{state}</p>
    </span>
    <span>
      {state === 'Talking' && <p>FC_{queue}</p>}
      {state === 'Talking' && <p>{location}</p>}
      <p className='timer'>{formatElapsedTime(elapsedTime)}</p>
    </span>
  </div>
);

const formatElapsedTime = (elapsedTime) => {
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  return `${minutes}:${seconds}`;
};

export default Agent;
