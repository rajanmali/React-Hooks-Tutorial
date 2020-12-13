import React, { useReducer } from 'react';
import Footer from './components/Footer/Footer';
import GlobalStateExampleOne from './components/4.useReducer/4/GlobalStateExampleOne';
import GlobalStateExampleTwo from './components/4.useReducer/4/GlobalStateExampleTwo';
import GlobalStateExampleThree from './components/4.useReducer/4/GlobalStateExampleThree';

import './App.css';

/*  To use context API and useContext folder, initially create context and wrap main component */

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

/*  Then, use this as context wrapper while using context api example */
//  <UserContext.Provider value={'pmpknBoi'}>
//    <ChannelContext.Provider value={'testtesttest'}>
//      <ClassComponentA />
//    </ChannelContext.Provider>
//  </UserContext.Provider>;

/*  To useReducer and useContext for global state */

// const initialState = 0;

// const reducerFunction = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return state + action.value;
//     case 'decrement':
//       return state - action.value;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// };

// export const CountContext = React.createContext();

function App() {
  /*  To useReducer and useContext for global state */
  // const [count, dispatch] = useReducer(reducerFunction, initialState);
  // return(
  //   <CountContext.Provider
  //       value={{ countState: count, countDispatch: dispatch }}
  //     >
  //       <GlobalStateExampleOne />
  //       <GlobalStateExampleTwo />
  //       <GlobalStateExampleThree />
  //     </CountContext.Provider>
  //     <Footer />
  // )
  return <div className="App"></div>;
}

export default App;
