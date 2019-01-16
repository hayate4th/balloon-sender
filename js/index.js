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
    $('input#msg-input').val('')
}

var addMessage = function(msg){
    var msgWhole = $('div#msg-whole')
    msgWhole.prepend(makeMessage(msg))
}

var makeMessage = function(msg){
    rnd_top = 25 - Math.floor( Math.random () * 25) ;
    rnd_left = 80 - Math.floor( Math.random () * 60) ;
    return "<div style='text-align: right'><div class='my-msg' style='top: " + rnd_top.toString() + "%'><span class='message'>" + msg + "</span></div><div class='my-msg-tree' style='top: " + rnd_top.toString() + "%; left: " + rnd_left.toString() + "%'></div></div></br>"
}