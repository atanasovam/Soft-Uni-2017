/**
 * Created by atama on 9.5.2017 г..
 */

function sum([a, b, c]) {
    [a, b, col] = [a, b, col].map(Number);
    let sum = a + b + col;
    return console.log(sum);
}
sum(["3", "4", "1"]);