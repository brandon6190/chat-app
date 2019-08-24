import React from 'react';

const Context = React.createContext();

function reducer(state, action) {
  switch(action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        
      }
    default:
      return state
  }
}

function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);

  return (
    <Context.Provider value={}>
      {props.children}
    </Context.Provider>
  )
}

export default Store;
