/**
 * Created by atanasova on 9.5.2017 г..
 */

function isPrime(number) {
    let num = Number(number[0]);

    let n = Math.sqrt(num);
    let isPrime = true;

    for (i = 2; i <= n; i++) {
        if (num % i === 0) {
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
