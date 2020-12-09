import { UserContext, ChannelContext } from '../../App';

export default function ClassComponentC() {
  return (
    <>
      This is the ClassComponent C
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <>
                    <div>User context value: {user}</div>
                    <div>Channel context value: {channel}</div>
                  </>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </>
  );
}
