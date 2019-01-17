var socket = io()

socket.on('message', function(data){
    addMessage(data.msg)
})

var sendMessage = function(){
    var msg = $('input#msg-input').val()
    socket.emit('message',
    {
        message: msg
    })
    $('input#msg-input').remove()
    $('button#msg-btn').remove()
    $('h2#sent').show()
}

var addMessage = function(msg){
    var msgWhole = $('div#msg-whole')
    msgWhole.prepend(makeMessage(msg))
}

var makeMessage = function(msg){
    if (msg.length > 0 && msg !== 'undefined') {
        if (msg.length > 30) {
            msg = msg.substr(0, 30)
        }
        rnd_top = Math.floor( Math.random () * 60) + 5;
        left_start = rnd_top * -0.41 + 52
        left_max = rnd_top * 0.25 + 53.75 - left_start
        rnd_left = Math.floor( Math.random () * left_max) + left_start;
        rnd_color = Math.floor( Math.random () * 7)
        return "<div style='text-align: right'><div class='my-msg-" + rnd_color + "' style='top: " + rnd_top.toString() + "%'><span class='message'>" + msg + "</span></div><div class='my-msg-tree-" + rnd_color + "' style='top: " + rnd_top.toString() + "%; left: " + rnd_left.toString() + "%'></div></div></br>"
    }
}