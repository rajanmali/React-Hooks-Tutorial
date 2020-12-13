import { memo } from 'react';

const Button = ({ children, text, handleClick }) => {
  console.log('Button Component Render for - ', text);
  return <button onClick={handleClick}>{children}</button>;
};
export default memo(Button);
