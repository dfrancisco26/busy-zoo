import React from 'react';

export default function OpenClosedSign({ zooIsOpen }) {
  return (
    <div className={zooIsOpen ? 'open' : 'closed'}>
      {
        zooIsOpen ? 'Open!' : 'Closed!' 
      }
      
    </div>
  );
}
