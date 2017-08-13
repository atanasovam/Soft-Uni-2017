function solve() {
    let currStop = undefined;
    let currentId = 'depot';

    function depart() {
        let req = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`,
            success: nextBusStop,
            error: displayErrMsg
        };
        $.ajax(req);
    }

    function nextBusStop(res) {
        $('.info').text(`Next Stop ${res.name}`);

        currentId = res.next;
        currStop = res.name;

        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', false);
    }

    function arrive() {
        $('.info').text(`Arriving at ${currStop}`);

        $('#depart').prop('disabled', false);
        $('#arrive').prop('disabled', true);
    }

    function displayErrMsg() {
        $('.info').text('Error!')
        console.log()
    }
    
    return {
        depart,
        arrive
    };
}
let result = solve();