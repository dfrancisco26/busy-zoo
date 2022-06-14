import { useState } from 'react';

import './App.css';

function App() {


//  const [zooIsOpen, setZooIsOpen] = useState(true);
//  const [parade, setParade] = useState([]);
  const [batSize, setBatSize] = useState(30);
  const [boarSize, setBoarSize] = useState(30);

  return (
    <div className="App">
      <header className='header'>
        <div className='fight'>
          <div className='competitor'>
            <p style={{ fontSize: `${batSize}px` }}> 🦇 </p>
            <button onClick={() => setBatSize(batSize + 4)}>Grow Bat</button>
            <button onClick={() => setBatSize(batSize - 4)}>Shrink Bat</button>
          </div>
          <div className='competitor'>
            <p style={{ fontSize: `${boarSize}px` }}> 🐗 </p>
            <button onClick={() => setBoarSize(boarSize + 4)}>Grow Boar</button>
            <button onClick={() => setBoarSize(boarSize - 4)}>Shrink Boar</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
