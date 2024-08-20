import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (totalSeconds === 0 && timerRunning) {
      clearInterval(intervalId);
      setTimerRunning(false);
    }
  }, [totalSeconds, timerRunning, intervalId]);

  const startTimer = () => {
    if (totalSeconds > 0 && !timerRunning) {
      setTimerRunning(true);
      const id = setInterval(() => {
        setTotalSeconds(prevTotalSeconds => prevTotalSeconds - 1);
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
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTotalSeconds(0);
    setTimerRunning(false);
  };

  const updateTotalSeconds = () => {
    const total = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    setTotalSeconds(total);
  };

  useEffect(() => {
    const remainingHours = Math.floor(totalSeconds / 3600);
    const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);
  }, [totalSeconds]);

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <div className="timer-settings">
        <label>
          Hours:
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            disabled={timerRunning}
          />
        </label>
        <label>
          Minutes:
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            disabled={timerRunning}
          />
        </label>
        <label>
          Seconds:
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))}
            disabled={timerRunning}
          />
        </label>
        <button onClick={updateTotalSeconds} disabled={timerRunning}>
          Set Timer
        </button>
      </div>
      <div className="timer-display">
        <h2>{`${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h2>
      </div>
      <div className="timer-controls">
        <button onClick={startTimer} disabled={timerRunning || totalSeconds <= 0}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!timerRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
