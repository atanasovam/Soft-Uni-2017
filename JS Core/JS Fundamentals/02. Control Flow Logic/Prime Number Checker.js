/**
 * Created by atanasova on 9.5.2017 г..
 */

function isPrime(number) {
    let num = Number(number[0]);

    let n = Math.sqrt(num);
    let isPrime = true;

    for (row = 2; row <= n; row++) {
        if (num % row === 0) {
            isPrime = false;
            break;
        }
    }
    if (n === 0 || n === 1) {
        return console.log("false");
    }
    return isPrime;
}
isPrime(["-5"]);
