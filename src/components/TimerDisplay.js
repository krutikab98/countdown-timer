import React from 'react';

const TimerDisplay = ({ hours, minutes, seconds }) => {
  return (
    <div className="timer-display">
      <span>{hours.toString().padStart(2, '0')}</span>: 
      <span>{minutes.toString().padStart(2, '0')}</span>: 
      <span>{seconds.toString().padStart(2, '0')}</span>
    </div>
  );
};

export default TimerDisplay;
