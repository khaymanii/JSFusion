import React, { useState } from 'react';
import './App.css';

const generateColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const [color, setColor] = useState('#FFFFFF');

  const changeColor = () => {
    setColor(generateColor());
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="color">{color}</div>
      <button className="btn" onClick={changeColor}>Generate Color</button>
    </div>
  );
};

export default App;
