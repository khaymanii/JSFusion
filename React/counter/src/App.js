import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="container">
      <h1 className="counter">{counter}</h1>
      <div className="buttons">
        <button className="btn" onClick={incrementCounter}>Increment</button>
        <button className="btn" onClick={decrementCounter}>Decrement</button>
        <button className="btn" onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default App;
