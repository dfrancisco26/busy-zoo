import React from 'react';

export default function Animal({ animal }) {
  return (
    <div>
      {animal === 'snail' && '🐌'}
      {animal === 'flamingo' && '🦩'}
      {animal === 'sloth' && '🦥'}
      {animal === 'tiger' && '🐅'}
    </div>
  );
}


