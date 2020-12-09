import { useReducer } from 'react';

const initialState = 0;

const reducerFunction = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
};

const SimpleStateExample = () => {
  const [count, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch('increment')}>Add Count</button>
      <button onClick={() => dispatch('decrement')}>Decrease Count</button>
      <button onClick={() => dispatch('reset')}>Reset Count</button>
    </div>
  );
};

export default SimpleStateExample;
