var socket = io()
var bal_cnt = 0
var html_cache = ""

$(document).ready(function() {
    html_cache = localStorage.getItem('html_cache');
    if (!html_cache) { 
        html_cache = ""
    } else {
        var msgWhole = $('div#msg-whole')
        msgWhole.prepend(html_cache)
    }

    bal_cnt = parseInt(localStorage.getItem('bal_cnt'))
    if (!bal_cnt) { 
        bal_cnt = 0
    } else {
        cnt_str = bal_cnt.toString().padStart(4, '0')
        $('span#thou').text(cnt_str[0])
        $('span#hund').text(cnt_str[1])
        $('span#tens').text(cnt_str[2])
        $('span#ones').text(cnt_str[3])
    }
})

socket.on('message', function(data){
    addMessage(data.msg)
})

var sendMessage = function(){
    var msg = $('input#msg-input').val()
    if (confirm('"' + msg + '"\nIs this okay?\nこちらの内容でよろしいでしょうか？')) {
        socket.emit('message',
        {
            message: msg
        })
        $('input#msg-input').remove()
        $('button#msg-btn').remove()
        $('h2#sent').show()
    }
}

var addMessage = function(msg){
    var msgWhole = $('div#msg-whole')
    msgWhole.prepend(makeMessage(msg))
}

var makeMessage = function(msg){
    if (msg.length > 0 && msg !== 'undefined') {
        if (msg.length > 100) {
            msg = msg.substr(0, 30)
        }
        bal_cnt = bal_cnt + 1
        cnt_str = bal_cnt.toString().padStart(4, '0')
        $('span#thou').text(cnt_str[0])
        $('span#hund').text(cnt_str[1])
        $('span#tens').text(cnt_str[2])
        $('span#ones').text(cnt_str[3])

        rnd_top = Math.floor( Math.random () * 60) + 5;
        left_start = rnd_top * -0.41 + 52
        left_max = rnd_top * 0.25 + 53.75 - left_start
        rnd_left = Math.floor( Math.random () * left_max) + left_start;
        rnd_color = Math.floor( Math.random () * 6)
        html_tree_txt = "<div class='my-msg-tree-" + rnd_color.toString() + "' style='top: " + rnd_top.toString() + "%; left: " + rnd_left.toString() + "%'></div>"
        html_tree_no_txt = "<div class='my-msg-tree-" + rnd_color.toString() + " no-animation' style='top: " + rnd_top.toString() + "%; left: " + rnd_left.toString() + "%'></div>"
        html_txt  = "<div style='text-align: right'><div class='my-msg-" + rnd_color.toString() + "' style='top: " + rnd_top.toString() + "%'><span class='message'>" + msg + "</span></div>" + html_tree_txt + "</div></br>"
        console.log(html_tree_txt)
        console.log(html_tree_no_txt)
        html_cache += html_tree_no_txt
        localStorage.setItem('bal_cnt', bal_cnt)
        localStorage.setItem('html_cache', html_cache)
        return html_txt
    }
}