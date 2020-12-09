import React from 'react';
import Footer from './components/Footer/Footer';
import GlobalStateExample from './components/4.useReducer/4/GlobalStateExample';

import './App.css';

//  To use context API, initially create context and wrap main component
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

//  Then, use this as context wrapper while using context api example
//  <UserContext.Provider value={'pmpknBoi'}>
//    <ChannelContext.Provider value={'testtesttest'}>
//      <ClassComponentA />
//    </ChannelContext.Provider>
//  </UserContext.Provider>;

function App() {
  return (
    <div className="App">
      <GlobalStateExample />
      <Footer />
    </div>
  );
}

export default App;
