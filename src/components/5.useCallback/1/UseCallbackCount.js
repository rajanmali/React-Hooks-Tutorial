import { useState, useCallback } from 'react';

import Count from './Count';
import Button from './Button';

/* Initial render */
// Count Component Render for -  Count
// Button Component Render for -  Count
// Count Component Render for -  Age
// Button Component Render for -  Age

/* Before memoization */
// Count Component Render for -  Count
// Button Component Render for -  Count
// Count Component Render for -  Age
// Button Component Render for -  Age

/* After memoization */
// Count Component Render for -  Count
// Button Component Render for -  Count
// Count Component Render for -  Age

// Button for age is still being re-rendered because when parent component gets re-rendered, new instance
// functions are created for each re-render, so memoization does't work for functions as it does for
// components. Use useCallback for such child components which have already been optimized (memoized) and
// rely on reference equality (check if functions are equal) to prevent unnecessary renders

/* After memoization and useCallback*/
// Count Component Render for -  Count
// Button Component Render for -  Count

const UseCallbackCount = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  const increaseCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const increaseAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  return (
    <>
      <div>
        <Count text="Count" data={count} />
        <Button text="Count" handleClick={increaseCount}>
          Increase Count
        </Button>
      </div>
      <div>
        <Count text="Age" data={age} />
        <Button text="Age" handleClick={increaseAge}>
          Increase Age
        </Button>
      </div>
    </>
  );
};

export default UseCallbackCount;
