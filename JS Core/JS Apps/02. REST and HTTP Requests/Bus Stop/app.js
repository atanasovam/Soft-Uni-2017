function getInfo() {
    let stopId = $('#stopId').val();
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;
    let stopName = $('#stopName');
    let ul = $('#buses');

    let req = {
        url: url,
        success: displayBusses,
        error: diplayErrMsg
    };
    $.ajax(req);

    function displayBusses(args) {
        ul.empty();
        let currStop = args.name;
        let busesObj = args.buses;

        stopName.text(currStop);

        for (let bus in busesObj) {
            let time = busesObj[bus];
            ul.append($('<li>').text(`Bus ${bus} arrives in ${time} minutes`));
        }
    }

    function diplayErrMsg() {
        ul.empty()
        stopName.text(`Error`);
    }
}