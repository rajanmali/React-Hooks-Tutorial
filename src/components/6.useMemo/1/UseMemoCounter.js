import { useState, useMemo } from 'react';

// Helpful to tell React not to calculate costly functions on every render. useMemo only recomputes the cached value when one of the
// dependencies changes

const UseMemoCounter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 400000000) i++; //simulated delay
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <div>
        <button onClick={incrementOne}>Count One: {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two: {counterTwo}</button>
      </div>
    </>
  );
};

export default UseMemoCounter;
