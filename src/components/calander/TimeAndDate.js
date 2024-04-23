import React, { useState, useEffect } from 'react';

const TimeAndDate = () => {
  const [indianDateTime, setIndianDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };


      const formattedDateTime = new Date().toLocaleString('en-IN', options);
      setIndianDateTime(formattedDateTime);
var DateAndTime;
      localStorage.setItem('DateAndTime' , formattedDateTime)
    };

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{display:'flex' , justifyContent:'space-between'}}>
    
      <p id='DateAndTime'>{indianDateTime}</p>
    </div>
  );
};

export default TimeAndDate;
