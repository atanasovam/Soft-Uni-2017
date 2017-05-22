/**
 * Created by atama on 14.5.2017 г..
 */
function printOdd(input) {
    let n = Number(input[0]);

    for (row = 1; row <= n; row += 2) {
        console.log(row);
    }
}
printOdd('5');
printOdd('4');
printOdd('7');