function filterSubsequence(input) {
    input = input.map(Number);
    let biggest;

    input.filter(function (e) {
        if (biggest !== undefined) {
            if (e >= biggest) {
                biggest = e;
                return true
            }
        } else {
            biggest = e;
            return true;
        }
    }).forEach(e => console.log(e))
}
filterSubsequence(['1', '3', '1']);
console.log();
filterSubsequence(['1', '2', '3', '4']);
console.log();
filterSubsequence(['20', '3', '2', '15', '6', '1']);
