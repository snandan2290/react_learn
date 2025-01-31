import React, { useState } from "react";

const CounterComp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Let's Count</h2>
      <h3>{count}</h3>
      <button onClick={() => increment()}>
        <strong>+</strong>
      </button>
      <button onClick={() => reset()}>
        <strong>reset</strong>
      </button>
      <button onClick={() => decrement()}>
        <strong>-</strong>
      </button>
    </div>
  );
};

export default CounterComp;
