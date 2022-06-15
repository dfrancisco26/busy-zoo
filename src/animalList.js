import React from 'react';
import Animal from './Animal';

export default function animalList({ animals }) {
  return (
    <div className='parade'>
      {
        animals.map((animal, i) => <Animal animal={animal} key={animal + i} />)
      }
    </div>
  );
}
