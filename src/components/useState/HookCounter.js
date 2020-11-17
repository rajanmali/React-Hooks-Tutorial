import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return <button onClick={incrementCount}>Hook Count: {count}</button>;
};

export default HookCounter;
