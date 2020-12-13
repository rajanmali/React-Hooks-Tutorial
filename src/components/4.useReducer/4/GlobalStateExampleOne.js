import { useContext } from 'react';
import { CountContext } from '../../../App';

export default function GlobalStateExampleOne() {
  const countCtx = useContext(CountContext);
  return (
    <div>
      <p>Example One Count: {countCtx.countState}</p>
      <button
        onClick={() => countCtx.countDispatch({ type: 'increment', value: 1 })}
      >
        Add First Count
      </button>
      <button
        onClick={() => countCtx.countDispatch({ type: 'decrement', value: 1 })}
      >
        Decrease First Count
      </button>
      <button onClick={() => countCtx.countDispatch({ type: 'reset' })}>
        Reset Count
      </button>
    </div>
  );
}
