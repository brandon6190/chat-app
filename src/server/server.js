const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3001;

io.on('connection', socket => {
  console.log('user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ', msg);
  })
});

http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})