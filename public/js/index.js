var socket = io();
socket.on('connect',function(){
console.log('connected to server');

socket.emit('createMessage',{
    from : 'andrew',
    text : 'yup, that works'
});
// socket.emit('createEmail',{
//     to : 'jen@example.com',
//     text : 'hey, this'
// });
});


  socket.on('disconnect',()=>{
console.log('disconnected to server');
});

socket.on('newMessage',function(message){
    console.log('newMessage',message);
});
// socket.on('newEmail',function(email){
//     console.log('new Emai', email);
// });