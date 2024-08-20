import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (time === 0 && timerRunning) {
      clearInterval(intervalId);
      setTimerRunning(false);
    }
  }, [time, timerRunning, intervalId]);

  const startTimer = () => {
    if (time > 0 && !timerRunning) {
      setTimerRunning(true);
      const id = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setTimerRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setTime(0);
    setTimerRunning(false);
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <div className="timer-settings">
        <label>
          Set Timer (seconds):
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            disabled={timerRunning}
          />
        </label>
      </div>
      <div className="timer-display">
        <h2>{time} seconds remaining</h2>
      </div>
      <div className="timer-controls">
        <button onClick={startTimer} disabled={timerRunning || time <= 0}>
          <FaPlay /> Start
        </button>
        <button onClick={stopTimer} disabled={!timerRunning}>
          <FaPause /> Stop
        </button>
        <button onClick={resetTimer}>
          <FaRedo /> Reset
        </button>
      </div>
    </div>
  );
}

export default App;
