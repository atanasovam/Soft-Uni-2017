/**
 * Created by atama on 14.5.2017 г..
 */
function inchesToFeetAndInches(input) {
    let num = Number(input[0]);
    let foots = Math.floor(num / 12);
    let inches = num % 12;
    let result = '' + foots + '\'-' + inches + '"';
    console.log(result);
}
inchesToFeetAndInches([36]);
inchesToFeetAndInches([55]);
inchesToFeetAndInches([11]);