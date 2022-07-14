import { useState } from 'react';
import OpenClosedSign from './OpenClosedSign';
import AnimalList from './AnimalList';
import './App.css';
function App() {


  const [zooIsOpen, setZooIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['snail', 'flamingo', 'sloth', 'tiger']);
  const [batSize, setBatSize] = useState(30);
  const [boarSize, setBoarSize] = useState(30);

  function handleSnailClick() {
    animals.push('snail');

    setAnimals(animals.slice());
  }

  function handleFlamingoClick() {
    animals.push('flamingo');

    setAnimals(animals.slice());
  }

  function handleSlothClick() {
    animals.push('sloth');

    setAnimals(animals.slice());
  }

  function handleTigerClick() {
    animals.push('tiger');

    setAnimals(animals.slice());
  }

  return (
    <div className="App">

      <header className='header'>
        <h1>animal</h1>
        <div className='fight'>
          <div className='competitor'>
            <p style={{ fontSize: `${batSize}px` }}> 🦇 </p>
            <button
              onClick={() => setBatSize(batSize + 4)}>
                Grow Bat
            </button>

            <button
              onClick={() => setBatSize(batSize - 4)}>
                Shrink Bat
            </button>
          </div>
          
          <div className='competitor'>
            <p style={{ fontSize: `${boarSize}px` }}> 🐗 </p>
            <button
              onClick={() => setBoarSize(boarSize + 4)}>
                Grow Boar
            </button>
            <button
              onClick={() => setBoarSize(boarSize - 4)}>
                Shrink Boar
            </button>
          </div>
        </div>

      </header>

      <OpenClosedSign zooIsOpen={zooIsOpen} className='openClosedSign'/>
      <button onClick={() => setZooIsOpen(!zooIsOpen)}>Toggle Zoo</button>


      <AnimalList animals={animals} />
      <button 
        onClick={handleSnailClick}>
              Add Snail
      </button>
      <button onClick={handleFlamingoClick}>
            Add Flamingo
      </button>
      <button onClick={handleSlothClick}>
            Add Sloth
      </button>
      <button onClick={handleTigerClick}>
            Add Tiger
      </button>


    </div>
  );
}

export default App;
