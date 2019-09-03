import React from 'react';

export const CTX = React.createContext();

const initState = {
  general: [
    {from: 'Brandon', msg: 'Hello there'},
    {from: 'Michael', msg: 'Hello there'},
    {from: 'Mike', msg: 'Hello there'},
  ],
  topic: [
    {from: 'Brandon', msg: 'Hello there'},
    {from: 'Michael', msg: 'Hello there'},
    {from: 'Mike', msg: 'Hello there'},
  ]
}

function reducer(state, action) {
  const {from, msg, topic} = action.payload;
  switch(action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        [topic]: [ 
          ...state[topic],
          {
            from,
            msg
          }
        ]
      }
    default:
      return state
  }
}

function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);

  return (
    <CTX.Provider value={reducerHook}>
      {props.children}
    </CTX.Provider>
  )
}

export default Store;
