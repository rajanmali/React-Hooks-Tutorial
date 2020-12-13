import React from 'react';
import Footer from './components/Footer/Footer';
import UseReducerDataFetch from './components/4.useReducer/5/useReducerDataFetch';

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

function App() {
  return (
    <div className="App">
      <UseReducerDataFetch />
      <Footer />
    </div>
  );
}

export default App;
