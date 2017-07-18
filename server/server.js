const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');


  socket.emit('newMessage', {
    from: 'admin',
    text: 'Welcome to my site',
    createdAt: '321'
  })

  socket.on('createmessage', (message) => {
    console.log("Message from user: " , message);
  });

  socket.on('disconnect', () => {
    console.log('user disconnect');
  });

});




server.listen(port, () => {
  console.log(`Connected on port ${port} succeed`);
});
