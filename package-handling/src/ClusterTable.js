import React, { useState, useEffect } from "react";

// Component to generate a table for each cluster
function ClusterTable({ clusterName, aisles, updateClusterStats }) {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomInterval = () => getRandomNumber(4000, 6000); // Random interval between 6-9 seconds

  const initialRows = aisles.map((aisle) => {
    const queued = getRandomNumber(100, 300); // Queue between 100 and 300
    return {
      aisle,
      queued,
      stowed: 0, // Start with no items stowed
      stowRate: 100, // Start at 100%
      startTime: Date.now() // Track the start time
    };
  });

  const [rows, setRows] = useState(initialRows);

  // Function to calculate stow rate based on the ideal stow rate (5 per minute)
  const calculateStowRate = (row) => {
    const currentTime = Date.now();
    const elapsedMinutes = (currentTime - row.startTime) / 60000; // Time elapsed in minutes
    const idealStowed = Math.min(row.queued, Math.floor(elapsedMinutes * 5)); // Ideal stowed based on elapsed time

    // Calculate stow rate: if keeping up, stow rate is 100%. If falling behind, it decreases.
    const stowRate = idealStowed > 0 ? (row.stowed / idealStowed) * 100 : 100;

    return stowRate;
  };

  // Function to determine the background color based on stow rate
  const getStowRateBackgroundColor = (stowRate) => {
    if (stowRate < 85) {
      return "red"; // Red for stow rate below 85%
    } else if (stowRate >= 85 && stowRate <= 92) {
      return "yellow"; // Yellow for stow rate between 86% and 92%
    } else {
      return "green"; // Green for stow rate 93% and above
    }
  };

  // Update stowed values and recalculate the stow rate at random intervals
  useEffect(() => {
    const intervalIds = rows.map((row, index) => {
      return setInterval(() => {
        setRows((prevRows) => {
          const updatedRows = [...prevRows];
          const currentRow = updatedRows[index];

          if (currentRow.stowed < currentRow.queued) {
            currentRow.stowed += 1; // Increment stowed items
          }

          // Recalculate stow rate
          currentRow.stowRate = calculateStowRate(currentRow);

          return updatedRows;
        });
      }, getRandomInterval());
    });

    return () => {
      intervalIds.forEach(clearInterval);
    };
  }, [rows]);

  // Notify parent of the updated stats for this cluster
  useEffect(() => {
    updateClusterStats(clusterName, rows);
  }, [rows, clusterName, updateClusterStats]);

  return (
    <table className="cluster-table">
      <thead>
        <tr>
          <th colSpan="5" className="table-heading">{clusterName}</th>
        </tr>
        <tr>
          <th>Aisle</th>
          <th>Queued</th>
          <th>Stowed</th>
          <th>Stow Rate</th>
          <th>Accuracy</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.aisle}>
            <td>{row.aisle}</td>
            <td>{row.queued}</td>
            <td>{row.stowed}</td>
            <td
              style={{
                backgroundColor: getStowRateBackgroundColor(row.stowRate), // Apply background color based on stow rate
                color: row.stowRate < 85 ? "white" : "black", // White text for red background for better contrast
              }}
            >
              {row.stowRate.toFixed(2)}%
            </td>
            <td></td> {/* Accuracy can be added later */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Main component to handle multiple clusters and overall stats
function ClusterTableContainer() {
  const clusters = [
    { name: "Cluster A", aisles: Array.from({ length: 26 / 2 }, (_, i) => `A${i * 2 + 1}-A${i * 2 + 2}`), },
    { name: "Cluster B", aisles: Array.from({ length: 26 / 2 }, (_, i) => `B${i * 2 + 1}-B${i * 2 + 2}`), },
    { name: "Cluster C", aisles: Array.from({ length: 26 / 2 }, (_, i) => `C${i * 2 + 1}-C${i * 2 + 2}`), },
    { name: "Cluster D", aisles: Array.from({ length: 26 / 2 }, (_, i) => `D${i * 2 + 1}-D${i * 2 + 2}`), },
    { name: "Cluster E", aisles: Array.from({ length: 26 / 2 }, (_, i) => `E${i * 2 + 1}-E${i * 2 + 2}`), },
    { name: "Cluster G", aisles: Array.from({ length: 26 / 2 }, (_, i) => `G${i * 2 + 1}-G${i * 2 + 2}`), },
    { name: "Cluster H", aisles: Array.from({ length: 26 / 2 }, (_, i) => `H${i * 2 + 1}-H${i * 2 + 2}`), },
    { name: "Cluster J", aisles: Array.from({ length: 26 / 2 }, (_, i) => `J${i * 2 + 1}-J${i * 2 + 2}`), },
  ];

  const [overallStats, setOverallStats] = useState({
    totalQueued: 10,
    totalStowed: 10,
    averageStowRate: 100
  });

  const [elapsedTime, setElapsedTime] = useState(0); // Elapsed time in seconds
  const [clusterStats, setClusterStats] = useState({});

  // Function to update the stats for each cluster
  const updateClusterStats = (clusterName, clusterRows) => {
    setClusterStats((prevStats) => ({
      ...prevStats,
      [clusterName]: clusterRows
    }));
  };

  // Update overall stats at a fixed interval based on the current cluster data
  useEffect(() => {
    const intervalId = setInterval(() => {
      const totalQueued = Object.values(clusterStats).flat().reduce((acc, row) => acc + row.queued, 0);
      const totalStowed = Object.values(clusterStats).flat().reduce((acc, row) => acc + row.stowed, 0);
      const stowRates = Object.values(clusterStats).flat().map(row => row.stowRate);
      const averageStowRate = stowRates.length > 0 ? (stowRates.reduce((acc, rate) => acc + rate, 0) / stowRates.length).toFixed(2) : 100;

      setOverallStats({
        totalQueued,
        totalStowed,
        averageStowRate
      });
    }, 5000); // Update stats every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [clusterStats]);

  // Timer for elapsed time
  useEffect(() => {
    const timerId = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1); // Increment by 1 second every second
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Clean up the timer on unmount
  }, []);

  // Helper function to format elapsed time in HH:MM:SS format
  const formatElapsedTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <style>{`
        .cluster-table-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        
        td{
          font-size: small;  
        }
        .cluster-table {
          width: 200px;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .cluster-table th, .cluster-table td {
          border: 1px solid #000;
          padding: 8px;
          text-align: left;
        }
        .cluster-table th {
          background-color: #f2f2f2;
        }
        .table-heading {
          background-color: #4CAF50;
          color: white;
        }
        .overall-stats-container {
          margin-bottom: 20px;
        }
        .overall-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .elapsed-time {
          text-align: center;
        }
      `}</style>
      <div className="overall-stats-container">
        <div className="overall-stats">
          <div>Total Queued: {overallStats.totalQueued}</div>
          <div>Total Stowed: {overallStats.totalStowed}</div>
          <div>Average Stow Rate: {overallStats.averageStowRate}%</div>
        </div>
        <div className="elapsed-time">
          Elapsed Time: {formatElapsedTime(elapsedTime)}
        </div>
      </div>
      <div className="cluster-table-container">
        {clusters.map(cluster => (
          <ClusterTable
            key={cluster.name}
            clusterName={cluster.name}
            aisles={cluster.aisles}
            updateClusterStats={updateClusterStats}
          />
        ))}
      </div>
    </>
  );
}

export default ClusterTableContainer;
