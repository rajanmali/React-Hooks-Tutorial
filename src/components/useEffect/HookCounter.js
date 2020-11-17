import { useState, useEffect } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Runs for all CDM, CDU, CDUn
    document.title = `${count} Clicks`;
  });

  useEffect(() => {
    //componentDidMount
    document.title = `${count} Clicks`;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //componentDidUpdate that is ran conditionally
    document.title = `${count} Clicks`;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Add Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </>
  );
};

export default HookCounter;
