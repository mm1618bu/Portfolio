import React, { useState } from 'react';
import '../App.css';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([
        { id: 1, name: 'John Doe', date: '2024-06-30', time: '18:00', table: 5 },
        { id: 2, name: 'Jane Smith', date: '2024-06-30', time: '19:00', table: 3 },
    ]);

    const [tables, setTables] = useState([
        { id: 1, number: 1, seats: 4, status: 'Available' },
        { id: 2, number: 2, seats: 2, status: 'Occupied' },
    ]);

    const [employees, setEmployees] = useState([
        { id: 1, name: 'Alice Johnson', startDate: '2023-01-10', position: 'Manager', status: 'Active' },
        { id: 2, name: 'Bob Brown', startDate: '2022-03-15', position: 'Chef', status: 'Active' },
    ]);

    const addBooking = (newBooking) => {
        // Combine the date and time of the new booking into a Date object
        const bookingDateTime = new Date(`${newBooking.date}T${newBooking.time}`);
        // Get the current date and time
        const now = new Date();
        // Calculate the difference in minutes
        const differenceInMinutes = (bookingDateTime - now) / (1000 * 60);
    
        // Check if the booking is at least 10 minutes in advance
        if (differenceInMinutes >= 10) {
            setBookings([...bookings, { ...newBooking, id: Date.now() }]);
        } else {
            // Optionally return a message or handle the error as needed
            console.log('Bookings must be made at least 10 minutes in advance.');
        }
    };

    const removeBooking = (id) => {
        setBookings(bookings.filter(booking => booking.id !== id));
    };

    const addTable = (newTable) => {
        setTables([...tables, { ...newTable, id: Date.now() }]);
    };

    const removeTable = (id) => {
        setTables(tables.filter(table => table.id !== id));
    };

    const addEmployee = (newEmployee) => {
        setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
    };

    const removeEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <div className="stats">
                    <div className="stat">Total Bookings: <span>{bookings.length}</span></div>
                    <div className="stat">Available Tables: <span>{tables.filter(table => table.status === 'Available').length}</span></div>
                    <div className="stat">Daily Revenue: <span>$1500</span></div>
                    <div className="stat">Customer Satisfaction: <span>4.5/5</span></div>
                </div>
            </header>
            
            <main className="dashboard-main">
                <section className="bookings-management">
                    <h2>Bookings Management</h2>
                    <BookingsList bookings={bookings} removeBooking={removeBooking} />
                    <AddBookingForm addBooking={addBooking} />
                </section>
                
                <section className="table-management">
                    <h2>Table Management</h2>
                    <TableList tables={tables} removeTable={removeTable} />
                    <AddTableForm addTable={addTable} />
                </section>
                
                <section className="employee-management">
                    <h2>Employee Management</h2>
                    <EmployeeList employees={employees} removeEmployee={removeEmployee} />
                    <AddEmployeeForm addEmployee={addEmployee} />
                </section>
                                
                <section className="settings">
                    <h2>Settings</h2>
                    {/* Settings content */}
                </section>
            </main>
        </div>
    );
};

const BookingsList = ({ bookings, removeBooking }) => {
    return (
        <div className="bookings-list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Table</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.name}</td>
                            <td>{booking.date}</td>
                            <td>{booking.time}</td>
                            <td>{booking.table}</td>
                            <td>
                                <button onClick={() => removeBooking(booking.id)}>Remove</button>
                                <button>Edit</button>
                                <button>Checkin</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const AddBookingForm = ({ addBooking }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [table, setTable] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooking({ name, date, time, table });
        setName('');
        setDate('');
        setTime('');
        setTable('');
    };

    return (
        <form className="add-booking-form" onSubmit={handleSubmit}>
            <h3>Add Booking</h3>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Date:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </label>
            <label>
                Time:
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </label>
            <label>
                Table:
                <input
                    type="number"
                    value={table}
                    onChange={(e) => setTable(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Booking</button>
        </form>
    );
};

const TableList = ({ tables, removeTable }) => {
    return (
        <div className="table-list">
            <table>
                <thead>
                    <tr>
                        <th>Table Number</th>
                        <th>Seats</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tables.map((table) => (
                        <tr key={table.id}>
                            <td>{table.number}</td>
                            <td>{table.seats}</td>
                            <td>{table.status}</td>
                            <td>
                                <button onClick={() => removeTable(table.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const AddTableForm = ({ addTable }) => {
    const [number, setNumber] = useState('');
    const [seats, setSeats] = useState('');
    const [status, setStatus] = useState('Available');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTable({ number, seats, status });
        setNumber('');
        setSeats('');
        setStatus('Available');
    };

    return (
        <form className="add-table-form" onSubmit={handleSubmit}>
            <h3>Add Table</h3>
            <label>
                Table Number:
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
            </label>
            <label>
                Seats:
                <input
                    type="number"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    required
                />
            </label>
            <label>
                Status:
                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="Available">Available</option>
                    <option value="Occupied">Occupied</option>
                </select>
            </label>
            <button type="submit">Add Table</button>
        </form>
    );
};

const EmployeeList = ({ employees, removeEmployee }) => {
    return (
        <div className="employee-list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.startDate}</td>
                            <td>{employee.position}</td>
                            <td>{employee.status}</td>
                            <td>
                                <button onClick={() => removeEmployee(employee.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const AddEmployeeForm = ({ addEmployee }) => {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState('Active');

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee({ name, startDate, position, status });
        setName('');
        setStartDate('');
        setPosition('');
        setStatus('Active');
    };

    return (
        <form className="add-employee-form" onSubmit={handleSubmit}>
            <h3>Add Employee</h3>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Start Date:
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
            </label>
            <label>
                Position:
                <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                />
            </label>
            <label>
                Status:
                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </label>
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AdminDashboard;
