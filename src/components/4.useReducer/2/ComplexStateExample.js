import { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'reset':
      return { ...state, firstCounter: initialState.firstCounter };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset2':
      return { ...state, secondCounter: initialState.secondCounter };
    default:
      return state;
  }
};

export default function ComplexStateExample() {
  const [count, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <>
      <div>
        <p>First Count: {count.firstCounter}</p>
        <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
          Add First Count
        </button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
          Decrease First Count
        </button>
        <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
          Add First Count 5
        </button>
        <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
          Decrease First Count 5
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset Count</button>
      </div>
      <div>
        <p>Second Count: {count.secondCounter}</p>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
          Add Second Count
        </button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
          Decrease Second Count
        </button>
        <button onClick={() => dispatch({ type: 'reset2' })}>
          Reset Count
        </button>
      </div>
    </>
  );
}
