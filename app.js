var express = require('express')
var http = require('http')
var app = express()
var server = http.createServer(app)
var io = require('socket.io').listen(server);

app.use(express.static(__dirname))

server.listen(process.env.PORT);

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/views/index.html');
});

io.sockets.on('connection', (socket)=>{
    socket.on('message', (data)=>{
        io.sockets.emit("message",
        {
            msg: data.message,
            name: data.name
        })
    })
})