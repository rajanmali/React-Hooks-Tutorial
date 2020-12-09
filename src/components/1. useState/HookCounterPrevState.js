import { useState } from "react";

const HookCounterPrevState = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const resetCount = () => {
    setCount(initialCount);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decerementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h4>Count: {count}</h4>
      <button onClick={resetCount}>Reset Hook Count</button>
      <button onClick={incrementCount}>Increase Hook Count</button>
      <button onClick={decerementCount}>Decrease Hook Count</button>
    </>
  );
};

export default HookCounterPrevState;
