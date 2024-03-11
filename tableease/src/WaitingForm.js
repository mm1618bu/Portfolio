import React, { useState } from 'react';
import './WaitingForm.css'; // Make sure to import the CSS file

export default function WaitingForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', party: '', time: '' });
  const [reservations, setReservations] = useState([]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setReservations([...reservations, formData]);
    setFormData({ name: '', phone: '', party: '', time: '' });
  };

  return (
    <div className="form-table-container">
      <form onSubmit={handleFormSubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required onChange={handleInputChange} />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required onChange={handleInputChange} />
        <label htmlFor="party">Party Size:</label>
        <input type="number" id="party" name="party" required onChange={handleInputChange} />
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Party Size</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.name}</td>
              <td>{reservation.phone}</td>
              <td>{reservation.party}</td>
              <td>{reservation.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}