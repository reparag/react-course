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
      <h1 class="text-2xl font-bold underline mb-10 border p-4 rounded-xl">
        React Counter Tailwind
      </h1>
      <h2>Counter Value : {counter} </h2>
      <div class="flex justify-center gap-4 my-4">
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
      <p>Footer : </p>
    </div>
  );
}

export default Counter;
