function attachEvents() {
    const apiUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';
    let phonebook = $('#phonebook');

    $("#btnLoad").click(reloadList);
    $("#btnCreate").click(createContact);

    function reloadList() {
        $.ajax({
            method: 'GET',
            url: apiUrl + '.json',
            success: listContacts,
            error: () => { alert(`Error`) }
        });
    }

    function listContacts(data) {
        phonebook.empty();
        let keys = Object.keys(data);

        for (let key of keys) {
            let id = data[key];
            let li = $('<li>')
                .text(`${id.person}: ${id.phone} `)
                .append($('<button>')
                    .text('[Delete]')
                    .click(() => deleteContact(key)));
            $('#phonebook').append(li);
        }
    }

    function createContact() {
        // alert('createContact')
        let person = $('#person').val().trim();
        let phone = $('#phone').val().trim();
        if (person !== '' && phone !== '') {
            $.ajax({
                method: 'POST',
                data: JSON.stringify({
                    person, phone
                }),
                url: apiUrl + '.json',
                success: function () {
                    $('#person').val('');
                    $('#phone').val('');
                    reloadList()
                },
                error: () => { alert(`Error`) }
            });
        }
    }

    function deleteContact(key) {
        $.ajax({
            method: 'DELETE',
            url: apiUrl + '/' + key + '.json',
            success: reloadList,
            error: () => { alert(`Error`) }
        });
    }
}