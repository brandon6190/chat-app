const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 3001;

http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})