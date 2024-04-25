import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // use state to store the current time
  const [time, setTime] = useState(new Date());
  const [is12HourFormat, setIs12HourFormat] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleFormat = () => {
    setIs12HourFormat((prevFormat) => !prevFormat);
  };

  const formatTime = (time) => {
    if (is12HourFormat) {
      return time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
    } else {
      return time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    }
  };

  const formatDate = (time) => {
    return time.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formattedTime = formatTime(time);
  const formattedDate = formatDate(time);

  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <div className="time">{formattedTime}</div>
      <div className="date">{formattedDate}</div>
      <button onClick={toggleFormat}>
        Toggle {is12HourFormat ? '24-hour' : '12-hour'} Format
      </button>
    </div>
  );
}

export default App;
