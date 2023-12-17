// src/InformationForm.js
import React, { useState } from 'react';

const InformationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    agentName: '',
    evaluatorName: '',
    callDateTime: '',
    accountName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the correct prop name here
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Agent Name:</label>
        <input
          type="text"
          name="agentName"
          value={formData.agentName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Evaluator Name:</label>
        <input
          type="text"
          name="evaluatorName"
          value={formData.evaluatorName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Call Date & Time:</label>
        <input
          type="datetime-local"
          name="callDateTime"
          value={formData.callDateTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Account Name:</label>
        <input
          type="text"
          name="accountName"
          value={formData.accountName}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InformationForm;
