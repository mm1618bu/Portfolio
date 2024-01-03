// Assignment.js
import React, { useState, useEffect } from 'react';
import './Assignment.css';

const Assignment = ({ status, onUpdateStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState(status);

  useEffect(() => {
    setSelectedStatus(status);
  }, [status]);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    onUpdateStatus(newStatus);
  };

  const getProgressBarWidth = (status) => {
    switch (status) {
      case 'not-started':
        return '0%';
      case 'started':
        return '25%'; // Example: show 25% progress when started
      case 'completed':
        return '100%'; // Example: show 50% progress when completed
      case 'stuck':
        return '50%'; // Example: show 75% progress when stuck
      default:
        return '0%';
    }
  };

  const getStatusOptions = () => {
    return ['not-started', 'started', 'completed', 'stuck'];
  };

  return (
    <div className={`assignment ${selectedStatus}`}>
      <div className="assignment-container">
        <label>Assignment: </label>
        <select value={selectedStatus} onChange={handleStatusChange}>
          {getStatusOptions().map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="mini-progress-bar-container">
          <div className="mini-progress-bar" style={{ width: getProgressBarWidth(selectedStatus) }} />
        </div>
      </div>
    </div>
  );
};

export default Assignment;
