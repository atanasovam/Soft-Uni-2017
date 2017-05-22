/**
 * Created by atama on 14.5.2017 г..
 */

function biggestNum(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let currN = Math.max(num1, num2, num3);
    console.log(currN);
}
biggestNum(["5", "7", "-2"]);