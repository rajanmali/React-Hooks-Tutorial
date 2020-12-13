import { useState, useEffect, useRef } from 'react';

const UseRefTimer = () => {
  const [timer, setTimer] = useState(0);

  // Create a generic container which can hold mutable values similar to instance
  // properties on class components. This generic container does not cause re-render
  // when the data it stores changes and also remembers the store dat even after other
  // state variables cause re-render of this component
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>Hook Timer: {timer}</p>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Clear Timer
      </button>
    </div>
  );
};

export default UseRefTimer;
