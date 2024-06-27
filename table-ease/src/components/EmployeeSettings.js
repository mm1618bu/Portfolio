import React, { useState } from 'react';

const initialEmployees = [
    { id: 1, name: 'John Doe', startDate: '2020-01-01', position: 'Manager', status: 'Active' },
    { id: 2, name: 'Jane Smith', startDate: '2019-03-15', position: 'Cook', status: 'Active' },
    { id: 3, name: 'Alice Johnson', startDate: '2021-06-23', position: 'Waiter', status: 'Inactive' },
    { id: 4, name: 'Bob Brown', startDate: '2018-11-11', position: 'Cashier', status: 'Active' },
    { id: 5, name: 'Charlie Davis', startDate: '2022-02-20', position: 'Waiter', status: 'Active' },
    { id: 6, name: 'Diana Prince', startDate: '2021-04-05', position: 'Cook', status: 'Active' },
    { id: 7, name: 'Eve Adams', startDate: '2020-12-30', position: 'Manager', status: 'Inactive' },
    { id: 8, name: 'Frank Martin', startDate: '2019-09-17', position: 'Cashier', status: 'Active' },
    { id: 9, name: 'Grace Lee', startDate: '2020-10-25', position: 'Waiter', status: 'Inactive' },
    { id: 10, name: 'Hank Williams', startDate: '2018-07-19', position: 'Cook', status: 'Active' },
];

const EmployeeSettings = () => {
    const [employees, setEmployees] = useState(initialEmployees);

    const addEmployee = (newEmployee) => {
        if (employees.length < 10) {
            setEmployees([...employees, newEmployee]);
        } else {
            alert("You can only add up to 10 employees.");
        }
    };

    const removeEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    return (
        <div>
            <h2>Employee List</h2>
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
            <h2>Add Employee</h2>
            <AddEmployeeForm addEmployee={addEmployee} />
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
        const newEmployee = {
            id: Date.now(), // unique ID for simplicity
            name,
            startDate,
            position,
            status
        };
        addEmployee(newEmployee);
        setName('');
        setStartDate('');
        setPosition('');
        setStatus('Active');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                Start Date:
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </label>
            <br />
            <label>
                Position:
                <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
            </label>
            <br />
            <label>
                Status:
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </label>
            <br />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default EmployeeSettings;
