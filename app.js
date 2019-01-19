let express = require('express')
let http = require('http')
let escape = require('escape-html')
let Filter = require('bad-words')
let app = express()
let server = http.createServer(app)
let io = require('socket.io').listen(server);
let auth = require('basic-auth');
let admins = {
    'admin': { password: 'Kb893veM' }
};


filter = new Filter()

app.use(express.static(__dirname))

server.listen(process.env.PORT);
//server.listen(5000);

app.get('/', (req, res)=> {
    var user = auth(req);
    if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
      res.set('WWW-Authenticate', 'Basic realm="example"');
      return res.status(401).send();
    }
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/send', (req, res)=> {
    res.sendFile(__dirname + '/views/send.html');
});

io.sockets.on('connection', (socket)=>{
    socket.on('message', (data)=>{
        io.sockets.emit("message",
        {
            msg: filter.clean(escape(data.message))
        })
    })
})