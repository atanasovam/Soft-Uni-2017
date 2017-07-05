function extractText() {
    "use strict";
    let list = $('li').toArray();
    $('#result').text(list.map(a => $(a).text()).join(', '));
}