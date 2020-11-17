import { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <h3>{count}</h3>;
};

export default IntervalHookCounter;
