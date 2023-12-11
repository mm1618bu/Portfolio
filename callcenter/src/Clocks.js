import React, { useEffect, useState } from 'react';

const Clocks = () => {
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    // List of time zones for different countries
    const timeZones = [
      'America/New_York', // New York, USA
      'Europe/London',     // London, UK
      'Europe/Berlin',     // Berlin, Germany
      'Asia/Tokyo',        // Tokyo, Japan
      'Australia/Sydney',  // Sydney, Australia
      'America/Los_Angeles' // Los Angeles, USA
    ];

    const fetchCurrentTime = async () => {
      const currentTimeData = await Promise.all(
        timeZones.map(async (timeZone) => {
          const date = new Date();
          const timeOptions = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
          const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
          return { timeZone, formattedTime };
        })
      );

      setTimeData(currentTimeData);
    };

    const intervalId = setInterval(() => {
      fetchCurrentTime();
    }, 1000);

    // Fetch the current time initially
    fetchCurrentTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="time">
      <h1>World Clocks</h1>
      <div id="time-board">
        {timeData.map(({ timeZone, formattedTime }, index) => (
          <p id="clock" key={index}>
            {timeZone} 
            <p>{formattedTime}</p>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Clocks;
