var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');

  socket.emit('createmessage', {
    from: 'user',
    text: 'Hi Admin'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
  console.log("You receive an email " , message);
});
