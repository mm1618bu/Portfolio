import React, { useState, useEffect } from 'react';
import './App.css';

const TimezoneClock = ({ timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });

  const timezoneName = timezone.split('/')[1].replace('_', ' ');
  const isPM = time.getHours() >= 12;

  return (
    <div className={`${isPM ? 'night' : 'day'} place`}>
      <p className='timeblock'>{timezoneName} <br/> {formattedTime}</p>
    </div>
  );

};

const App = () => { 
  const timezones = [
    'America/New_York',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Pacific/Auckland',
  ];

  return (
    <><p className='title'>World Clock</p><div className='item'>
      {timezones.map((timezone, index) => (
        <TimezoneClock key={index} timezone={timezone} />
      ))}
    </div></>
  );
};

export default App;
