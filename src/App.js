// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import TimerInput from './components/TimerInput';
import TimerDisplay from './components/TimerDisplay';

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime(remainingTime => remainingTime - 1);
      }, 1000);
    } else if (!isActive && remainingTime !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, remainingTime]);

  useEffect(() => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setRemainingTime(totalSeconds);
  }, [hours, minutes, seconds]);

  const startTimer = () => {
    if (remainingTime > 0) {
      setIsActive(true);
    }
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setRemainingTime(0);
  };

  const displayTime = {
    hours: Math.floor(remainingTime / 3600),
    minutes: Math.floor((remainingTime % 3600) / 60),
    seconds: remainingTime % 60
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <TimerInput
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      <TimerDisplay {...displayTime} />
      <div className="buttons">
        <button onClick={startTimer} className="start" disabled={isActive}>
          Start
        </button>
        <button onClick={stopTimer} className="stop">
          Stop
        </button>
        <button onClick={resetTimer} className="reset">
          Reset
        </button>
      </div>

    </div>
  );
};

export default App;
