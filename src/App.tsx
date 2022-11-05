import React, { useRef } from 'react';
import pacman from './pacman.png';
import './App.css';

const text = ['m', 'u', 'n', 'c', 'h', 'y'];


function App() {
  const pacRef = useRef<HTMLImageElement>(null);


  return (
    <div className="App">
      <header className="App-header">
        <div className="muncher">
          <div></div>
          <img src={pacman} ref={pacRef} alt="muncher" />
        </div>
        {text.map((letter, i) => (
          <span
            className="food"
            key={letter}
          >
            {letter}
          </span>
        ))}
      </header>
    </div>
  );
}

export default App;
