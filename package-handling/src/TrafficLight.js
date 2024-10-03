import React, { useState, useEffect } from 'react';

export default function TrafficLight({ name }) {
  const [currentLight, setCurrentLight] = useState('green'); // Initial light color
  const [counter, setCounter] = useState(() => Math.floor(Math.random() * 10) + 1); // Initialize counter with a random number between 1 and 10

  useEffect(() => {
    const lightOrder = ['green', 'yellow', 'red']; // The order in which the lights will change
    let currentIndex = 0;

    // Generate a random interval between 5 and 15 seconds
    const randomInterval = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % lightOrder.length; // Cycle through the lights
      setCurrentLight(lightOrder[currentIndex]);

      // Update the counter with a new random number between 1 and 10 on each change
      setCounter(Math.floor(Math.random() * 10) + 1);
    }, randomInterval);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const styles = {
    trafficLightContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '20px'
    },
    trafficLight: {
      width: '300px',
      height: '100px',
      backgroundColor: 'black',
      borderRadius: '20px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'row', // Set to 'row' for horizontal layout
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: '10px'
    },
    light: {
      width: '60px',
      height: '60px',
      backgroundColor: 'gray',
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
    },
    intersectionName: {
      fontSize: '16px',
      color: '#333'
    }
  };

  return (
    <div style={styles.trafficLightContainer}>
      <div style={styles.trafficLight}>
        <div
          style={{
            ...styles.light,
            backgroundColor: currentLight === 'red' ? 'red' : 'gray'
          }}
        ></div>
        <div
          style={{
            ...styles.light,
            backgroundColor: currentLight === 'yellow' ? 'yellow' : 'gray'
          }}
        ></div>
        <div
          style={{
            ...styles.light,
            backgroundColor: currentLight === 'green' ? 'green' : 'gray'
          }}
        ></div>
      </div>
      {/* Display the intersection name and the counter */}
      <div style={styles.intersectionName}>{name} (Counter: {counter})</div>
    </div>
  );
}
