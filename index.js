const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
})

io.on('connection', () =>{
    console.log("New Client connected");

    io.on('disconnect', () =>{
        console.log("client disconnected");
    })
});


server.listen(4000, () => {
    console.log('Listening on port 4000');
});