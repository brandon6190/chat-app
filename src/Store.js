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

let socket;

function sendChatAction(value) {
  socket.emit('chat message', value);
}


function Store(props) {

  if (!socket) {
    socket = io(':3001');
  }

  const [allChats] = React.useReducer(reducer, initState);

  return (
    <CTX.Provider value={{allChats, sendChatAction}}>
      {props.children}
    </CTX.Provider>
  )
}

export default Store;
