import { useContext } from 'react';
import { UserContext, ChannelContext } from '../../../App';

export default function HookComponent() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <>
      This is Functional Component
      <div>User context value: {user}</div>
      <div>Channel context value: {channel}</div>
    </>
  );
}
