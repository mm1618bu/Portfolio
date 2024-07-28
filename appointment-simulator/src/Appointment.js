// src/components/Appointment.js
import React from 'react';

const Appointment = ({ appointment }) => {
  return (
    <div className="appointment">
      <p>{appointment.name} = {appointment.time}</p>
    </div>
  );
};

export default Appointment;
