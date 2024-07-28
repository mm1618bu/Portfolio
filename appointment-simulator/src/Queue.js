// src/components/Queue.js
import React, { useState, useEffect } from 'react';
import Appointment from './Appointment';

const Queue = () => {
  const [appointments, setAppointments] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);

      // Add a new appointment every 2 minutes (120 seconds)
      if (counter % 12 === 0) {
        addNewAppointment();
      }

      // Remove the first appointment every 2 minutes
      if (appointments.length > 0 && counter % 120 === 0) {
        setAppointments((prev) => prev.slice(0,-1));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter, appointments]);

  const addNewAppointment = () => {
    const newAppointment = {
      name: `Appointment ${appointments.length + 1}`,
      time: new Date().toLocaleTimeString(),
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  return (
    <div className="queue">
      <h2>Appointment Queue</h2>
      {appointments.map((appointment, index) => (
        <Appointment key={index} appointment={appointment} />
      ))}
    </div>
  );
};

export default Queue;
