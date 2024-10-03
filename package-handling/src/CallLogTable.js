import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker'; // Ensure this is the correct import

const generateCallLogs = (num) => {
    const callLogs = [];
    const priorities = ['Low', 'Medium', 'High'];

    for (let i = 0; i < num; i++) {
        callLogs.push({
            callerName: faker.person.fullName(), // Generates a full name
            issueDescription: faker.hacker.phrase(), // Generates a random hacker phrase
        });
    }

    return callLogs;
};

const CallLogTable = ({ numberOfRows }) => {
    const callLogs = generateCallLogs(numberOfRows);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (callLogs.length === 0) return; // Early exit if there are no logs

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < callLogs.length - 1) {
                    return prevIndex + 1;
                }
                return 0; // Reset to the first issue after the last one
            });
        }, 10000); // 10000 ms = 10 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [callLogs.length]);

    // Check if callLogs are available
    if (callLogs.length === 0) {
        return <div>No call logs available.</div>;
    }

    return (
        <div>
            <h2>Current IT Help Desk Issue</h2>
            <table>
                <thead>
                    <tr>
                        <th>Caller Name</th>
                        <th>Call ID</th>
                        <th>Issue Description</th>
                        <th>Priority</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={callLogs[currentIndex].callId}>
                        <td>{callLogs[currentIndex].callerName}</td>
                        <td>{callLogs[currentIndex].callId}</td>
                        <td>{callLogs[currentIndex].issueDescription}</td>
                        <td>{callLogs[currentIndex].priority}</td>
                        <td>{callLogs[currentIndex].timestamp}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CallLogTable;
