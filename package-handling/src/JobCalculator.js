import React, { useState } from 'react';

const JobCalculator = () => {
  const [jobCost, setJobCost] = useState('');
  const [requiresCar, setRequiresCar] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [jobDate, setJobDate] = useState('');
  const [jobTime, setJobTime] = useState('');
  const [jobs, setJobs] = useState([]);

  // List of available laborers
  const laborers = ['Bentley', 'Iacomini', 'Lawlor', 'Donovan', 'Scott', 'Donahue'];

  // Function to get random laborers
  const getRandomLaborers = (num) => {
    // Shuffle the array of laborers and slice the required number
    const shuffled = [...laborers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const calculateJob = (cost, carRequired) => {
    let jobType;
    let numLaborers;

    if (cost <= 125) {
      numLaborers = 1;
      jobType = carRequired ? 'E' : 'A';
    } else if (cost <= 250) {
      numLaborers = 2;
      jobType = carRequired ? 'F' : 'B';
    } else if (cost <= 375) {
      numLaborers = 3;
      jobType = carRequired ? 'G' : 'C';
    } else if (cost <= 500) {
      numLaborers = 4;
      jobType = carRequired ? 'H' : 'D';
    } else {
      alert('Job cost exceeds the maximum allowed value.');
      return null;
    }

    const adjustedCost = carRequired ? cost + 25 : cost;

    // Select the required number of random laborers
    const assignedLaborers = getRandomLaborers(numLaborers);

    return {
      jobType,
      numLaborers,
      adjustedCost,
      assignedLaborers,
    };
  };

  const handleAddJob = () => {
    const cost = parseFloat(jobCost);
    if (isNaN(cost) || cost <= 0) {
      alert('Please enter a valid job cost.');
      return;
    }

    

    const jobDetails = calculateJob(cost, requiresCar);
    if (jobDetails) {
      const newJob = {
        ...jobDetails,
        customerName,
        customerAddress,
        jobDate,
        jobTime,
      };
      setJobs([...jobs, newJob]);
      // Clear the input fields
      setJobCost('');
      setRequiresCar(false);
      setCustomerName('');
      setCustomerAddress('');
      setJobDate('');
      setJobTime('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '100%', margin: '0 auto' }}>
      <h2>Job Calculator</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Job Cost: $
          <input
            type="number"
            value={jobCost}
            onChange={(e) => setJobCost(e.target.value)}
            placeholder="Enter job cost"
            style={{ marginLeft: '10px', marginBottom: '10px' }}
          />
        </label>
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              checked={requiresCar}
              onChange={(e) => setRequiresCar(e.target.checked)}
            />
            Requires Car
          </label>
        </div>
        <br />
        <button
          style={{ marginTop: '20px' }}
          onClick={handleAddJob}
        >
          Add Job
        </button>
      </div>
      {jobs.length > 0 && (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Customer Name</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Address</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Date</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Time</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Job Type</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Number of Laborers</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Adjusted Cost ($)</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Assigned Laborers</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.customerName}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.customerAddress}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.jobDate}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.jobTime}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.jobType}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.numLaborers}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.adjustedCost.toFixed(2)}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{job.assignedLaborers.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JobCalculator;
