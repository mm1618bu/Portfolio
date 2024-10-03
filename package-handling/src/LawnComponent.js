import React, { useState } from 'react';

// Sample job data with 100 entries
const lawnjobs = [
  { "job_id": 1, "job_type": "Leaf Raking", "price": 353, "address": "2417 Del Mar Avenue", "start_date": "1/2/2024", "duration_hours": 3, "customer_name": "Bobbi Leythley", "job_category": "Fall_A" },
  { "job_id": 2, "job_type": "Fall Clean Up", "price": 276, "address": "80755 Grayhawk Alley", "start_date": "7/24/2023", "duration_hours": 4, "customer_name": "Judon Braunroth", "job_category": "Fall_A" },
  // Add more jobs dynamically
];

// Dynamically generating 100 jobs
for (let i = 3; i <= 100; i++) {
  lawnjobs.push({
    job_id: i,
    job_type: i % 2 === 0 ? "Leaf Raking" : "Fall Clean Up",
    price: Math.floor(Math.random() * 400) + 100,
    address: `${Math.floor(Math.random() * 10000)} Random Street`,
    start_date: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 28) + 1}/2024`,
    duration_hours: Math.floor(Math.random() * 5) + 1,
    customer_name: `Customer ${i}`,
    job_category: `Fall_${String.fromCharCode(65 + (i % 4))}`
  });
}

const LawnComponent = () => {
  const [numEmployees, setNumEmployees] = useState(2); // Example: start with 2 employees
  const [inputs, setInputs] = useState({}); // State to handle input values for each job and employee

  // Handle input change
  const handleInputChange = (event, jobId, employeeIndex) => {
    const newInputs = { ...inputs };
    if (!newInputs[jobId]) {
      newInputs[jobId] = [];
    }
    newInputs[jobId][employeeIndex] = event.target.value;
    setInputs(newInputs);
  };

  // Dynamically generate input fields based on the number of employees
  const generateInputFieldsForJob = (jobId) => {
    let inputFields = [];
    for (let i = 0; i < numEmployees; i++) {
      inputFields.push(
        <input
          key={`job-${jobId}-employee-${i}`}
          type="text"
          value={inputs[jobId] && inputs[jobId][i] ? inputs[jobId][i] : ''}
          onChange={(event) => handleInputChange(event, jobId, i)}
          placeholder={`Employee ${i + 1}`}
          style={{ marginRight: '10px' }}
        />
      );
    }
    return inputFields;
  };

  return (
    <div>
      <h1>Lawn Job Management</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Job Type</th>
            <th>Price</th>
            <th>Address</th>
            <th>Start Date</th>
            <th>Duration (Hours)</th>
            <th>Customer Name</th>
            <th>Job Category</th>
            <th>Employee Inputs</th>
          </tr>
        </thead>
        <tbody>
          {lawnjobs.map((job) => (
            <tr key={job.job_id}>
              <td>{job.job_id}</td>
              <td>{job.job_type}</td>
              <td>${job.price}</td>
              <td>{job.address}</td>
              <td>{job.start_date}</td>
              <td>{job.duration_hours}</td>
              <td>{job.customer_name}</td>
              <td>{job.job_category}</td>
              <td>{generateInputFieldsForJob(job.job_id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LawnComponent;
