import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold underline mb-10 border p-4 rounded-xl">
        React Counter Tailwind
      </h1>
      <h2>Counter Value : {counter} </h2>
      <div className="flex justify-center gap-4 my-4">
        <button className="p-2 rounded border" onClick={addValue}>
          Add Value
        </button>
        <button className="p-2 rounded border" onClick={removeValue}>
          Remove Value
        </button>
      </div>
      <p>Footer : </p>
    </div>
  );
}

export default Counter;
