import { useReducer } from 'react';

const initialState = 0;

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.value;
    case 'decrement':
      return state - action.value;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export default function MultipleUseReducer() {
  /* When dealing with multiple state variables that 
  have same state transitions use multiple useReducer.
  Avoids complexity of merging state objects and also
  reduces code duplication  */
  const [count, dispatch] = useReducer(reducerFunction, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducerFunction, initialState);

  return (
    <>
      <div>
        <p>First Count: {count}</p>
        <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
          Add First Count
        </button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
          Decrease First Count
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset Count</button>
      </div>
      <div>
        <p>Second Count: {countTwo}</p>
        <button onClick={() => dispatchTwo({ type: 'increment', value: 1 })}>
          Add Second Count
        </button>
        <button onClick={() => dispatchTwo({ type: 'decrement', value: 1 })}>
          Decrease Second Count
        </button>
        <button onClick={() => dispatchTwo({ type: 'reset' })}>
          Reset Count
        </button>
      </div>
    </>
  );
}
