import React from 'react';
import Footer from './components/Footer/Footer';
import HookComponent from './components/3. useContext/HookComponent';

import './App.css';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'pmpknBoi'}>
        <ChannelContext.Provider value={'testtesttest'}>
          <HookComponent />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
