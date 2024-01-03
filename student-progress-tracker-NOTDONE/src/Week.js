// Week.js
import React from 'react';

const Week = ({ weekNumber, children }) => (
  <div>
    <h2>Week {weekNumber}</h2>
    {children}
  </div>
);

export default Week;
