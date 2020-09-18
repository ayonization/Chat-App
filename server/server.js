const path = require('path');
const express = require('express');
const socketIO=require('socket.io');
const http=require('http');

var app=express();

const publicPath=path.join(__dirname, '../public')
const port= process.env.PORT||3000;

app.use(express.static(publicPath));
var server= http.createServer(app);               //creates server using http module. express uses this same module

var io= socketIO(server);                         //io is the web socket server

io.on('connection',(socket)=>{                    // on the event of a connection, do something
                                                  //socket represents individual connection/socket
console.log("New user connected")

socket.on('disconnect',()=>{
    console.log("User was disconnected")
})
                                                });                                           

server.listen(port,()=>{
    console.log('servers running on port '+port);
})