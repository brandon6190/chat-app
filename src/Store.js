import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initState = {
  general: [
    {from: 'Brandon', msg: 'Hello there'},
    {from: 'Michael', msg: 'Hello there'},
    {from: 'Mike', msg: 'Hello there'},
  ],
  topic: [
    {from: 'Lee', msg: 'Hello there'},
    {from: 'Joey', msg: 'Hello there'},
    {from: 'Kyle', msg: 'Hello there'},
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

function sendChatAction(dispatch, socket) {

}

let socket;

function Store(props) {

  if (!socket) {
    socket = io(':3001');
  }

  const [allChats, dispatch] = React.useReducer(reducer, initState);

  return (
    <CTX.Provider value={{allChats}}>
      {props.children}
    </CTX.Provider>
  )
}

export default Store;
