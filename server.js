const express = require("express");
const http = require("http");

const port = process.env.PORT || 4001;

const app = express();
const server = http.createServer(app);
const socketIo = require("socket.io").listen(server);

server.listen(port);

socketIo.sockets.on("connection", socket => {
  socket.on("message", data => {
    const colorIndex = Math.floor(Math.random() * 7)
    const startY = Math.floor(Math.random() * 61);
    const endY = Math.floor(Math.random() * 61);
    const a = 0.12;
    const endX =
      Math.floor(Math.random() * 2 * Math.sqrt(endY / a)) -
      Math.floor(Math.sqrt(endY / a));
    socketIo.sockets.emit("message", {
      colorIndex,
      message: data.message,
      startY,
      endY,
      endX
    })
  })
})
