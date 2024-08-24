import React, { useState, useEffect } from 'react';

const MachineStatus = () => {
  const [connectedMachines, setConnectedMachines] = useState(0);

  useEffect(() => {
    // Simulate fetching data from an API or backend
    const fetchConnectedMachines = () => {
      // Replace this with an actual API call to get the connected machines count
      const simulatedData = Math.floor(Math.random() * 100); // Example: Random number of machines
      setConnectedMachines(simulatedData);
    };

    fetchConnectedMachines();

    // Optionally, set up a timer to update the count every few seconds
    const interval = setInterval(fetchConnectedMachines, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Connected Machines</h2>
      <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
        {connectedMachines}
      </div>
    </div>
  );
};

export default MachineStatus;
