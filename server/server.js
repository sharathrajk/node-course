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

socket.on('disconnect',()=>{
    console.log('new user disconnected');
});
});



server.listen(port, ()=>{
    console.log(`server is running in ${port}`);
});