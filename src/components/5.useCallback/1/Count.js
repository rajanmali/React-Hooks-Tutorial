import { memo } from 'react';

const Count = ({ text, data }) => {
  console.log('Count Component Render for - ', text);
  return <h2>{`${text}: ${data}`}</h2>;
};

export default memo(Count);
