function inchesToFeetAndInches(input) {
    let num = Number(input[0]);

    let foots = Math.floor(num / 12);
    let inches = num % 12;

    return '' + foots + '\'-' + inches + '"';
}
console.log(inchesToFeetAndInches([36]));
console.log(inchesToFeetAndInches([55]));
console.log(inchesToFeetAndInches([11]));