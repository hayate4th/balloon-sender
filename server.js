const express = require("express");
const http = require("http");

const port = process.env.PORT || 4001;

const app = express();
const server = http.createServer(app);
const socketIo = require("socket.io").listen(server);

server.listen(port);

socketIo.sockets.on("connection", socket => {
  socket.on("message", data => {
    socketIo.sockets.emit("message", {
      message: data.message
    })
  })
})
