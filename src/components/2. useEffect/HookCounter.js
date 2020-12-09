import { useState, useEffect } from "react";

const TestComponent = () => {
  //componentDidMount
  useEffect(() => {
    alert("Component has been mounted");
    // eslint-disable-next-line
  }, []);

  //componentDidUnmount
  useEffect(
    () => () => {
      alert("Component has been unmounted");
    },
    []
  );

  return (
    <h1 style={{ padding: "1em", border: "1px dashed red" }}>TEST COMPONENT</h1>
  );
};

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [toggleMount, setToggleMount] = useState(false);

  //Runs for all CDM, CDU, CDUn
  useEffect(() => {
    document.title = `${count} Clicks`;
  });

  //componentDidMount
  useEffect(() => {
    document.title = `${count} Clicks`;
    // eslint-disable-next-line
  }, []);

  //componentDidUpdate that is run conditionally only for change in count
  useEffect(() => {
    document.title = `${count} Clicks`;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const handleComponentMount = () => {
    setToggleMount((prevToggleMount) => !prevToggleMount);
  };

  return (
    <>
      <div>
        <h3>componentDidMount, componentDidUpdate</h3>
        <span>Check Page Title</span>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Add Count</button>
        <button onClick={resetCount}>Reset Count</button>
      </div>
      <div>
        <h3>componentDidUnmount</h3>
        <button onClick={handleComponentMount}>
          {toggleMount ? "Unmount" : "Mount"} Component
        </button>
        {toggleMount && <TestComponent />}
      </div>
    </>
  );
};

export default HookCounter;
