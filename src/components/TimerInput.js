// src/components/TimerInput.js

import React from 'react';

const TimerInput = ({ hours, minutes, seconds, setHours, setMinutes, setSeconds }) => {
  return (
    <div className="timer-input">
      <div>
        <label>Hours</label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Math.max(0, parseInt(e.target.value) || 0))}
          placeholder="0"
        />
      </div>

      <div>
        <label>Minutes</label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value) || 0))}
          placeholder="0"
        />
      </div>

      <div>
        <label>Seconds</label>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Math.max(0, parseInt(e.target.value) || 0))}
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default TimerInput;
