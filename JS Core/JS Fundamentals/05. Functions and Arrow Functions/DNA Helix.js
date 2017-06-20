function dnaHelix(num) {
    let letterCount = 0;
    let rowCount = 0;
    let symbols = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let updateLetterCount = function (num) {
        num += 1;
        num %= 10;
        return num
    };

    let first = '';
    let second = '';

    for (let i = 0; i < num; i++) {
        first = symbols[letterCount];
        letterCount = updateLetterCount(letterCount);

        second = symbols[letterCount];
        letterCount = updateLetterCount(letterCount);

        if (rowCount === 0) {
            console.log(`**${first}${second}**`)
        } else if (rowCount === 1) {
            console.log(`*${first}--${second}*`)
        } else if (rowCount === 2) {
            console.log(`${first}----${second}`)
        } else {
            console.log(`*${first}--${second}*`)
        }
        rowCount++;
        rowCount %= 4;
    }
}
dnaHelix(4);
console.log();
dnaHelix(10);