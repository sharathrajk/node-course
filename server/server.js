const path = require('path');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname,'../public');
//console.log(__dirname+ '/../public');
//console.log(publicPath);
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket)=>{
console.log('new user connected');

socket.emit('newMessage',{
from : 'John',
text : 'see the',
createAt : 123123
});

// socket.emit('newEmail',{
//     from : 'mike@example.com',
//     text : 'hey , what',
//     createAt : 123

// });

socket.on('createMeassage',(message)=>{
    console.log('createMessage',message);
});
// socket.on('createEmail',(newEmail)=>{
// console.log('createEmail', newEmail);
// });

socket.on('disconnect',()=>{
    console.log('new user disconnected');
});
});



server.listen(port, ()=>{
    console.log(`server is running in ${port}`);
});