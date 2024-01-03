// StatusBar.js
import React from 'react';
import './StatusBar.css'; // Import the CSS file

const StatusBar = ({ progress }) => (
  <div>
    <p>Overall Progress: {progress}%</p>
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  </div>
);

export default StatusBar;
