function attachEvents() {
    let url = 'https://messenger-b7d93.firebaseio.com/.json';
    $('#submit').click(postData);
    $('#refresh').click(() => {
        $('#author').val('');
        $('#content').val('');
        refresh();
    });

    function displayAllMsg(res) {
        $('#author').val('');
        $('#content').val('');
        let messages = $('<div>');
        let text = '';

        for (let id in res) {
            text += `${res[id]['author']}: ${res[id]['content']}\n`
        }
        $('#messages').text(text)
    }

    function refresh() {
        $('#author').val(``);
        $('#content').val(``);
        let req = {
            method: "GET",
            url: url,
            success: displayAllMsg,
            error: displayErrMsg(`Couldn't refresh!`)
        }
        $.ajax(req);
    }

    function postData() {
        let author = $('#author').val()
        let content = $('#content').val()
        if (author === '' || content === '') {
            displayErrMsg('Please enter your name/message!');
            return;
        }

        let req = {
            method: 'POST',
            url: url,
            data: JSON.stringify({
                'author': $('#author').val(),
                'content': $('#content').val(),
                'timestamp': new Date().getTime()
            }),
            success: refresh,
            error: displayErrMsg
        };
        $.ajax(req);
    }

    function displayErrMsg(msg) {
        $('#messages').append(msg + '\n');
    }
}