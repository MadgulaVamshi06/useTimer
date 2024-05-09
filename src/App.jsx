import React from 'react';
import useTimer from './useTimer';
import "./App.css"

function App() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <h1>Timer: {timer} </h1>
      <p>Running: {isRunning ? 'Yes' : 'No'}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
}

export default App;
