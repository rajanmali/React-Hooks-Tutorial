import { useEffect, useRef } from 'react';

const UseRefFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // using useRef to automatically focus on an input element on load
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRefFocusInput;
