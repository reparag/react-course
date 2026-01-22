import React, { useState } from 'react';

function BgColorChange() {
  const [color, setColor] = useState('olive');

  return (
    <div className="h-screen w-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center max-w-2xl bg-white px-3 py-1 gap-1 rounded-3xl">
          <button
            className="btn"
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className="btn"
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="btn"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgColorChange;
