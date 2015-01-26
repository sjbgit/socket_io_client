var socket = require('socket.io-client')('http://localhost:3000');
  socket.on('connect', function(){
	console.log('connect');
});
  socket.on('message', function(data){
//console.log('message: ' +  data);
console.log('received message: ' + data.username + ' ' + data.body);
});
  socket.on('disconnect', function(){
console.log('disconnect');
});