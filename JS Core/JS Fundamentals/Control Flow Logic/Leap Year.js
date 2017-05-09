/**
 * Created by atama on 7.5.2017 г..
 */

function leapYear([n]) {
    return ((num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0))
        ? "yes" : "no";
}
console.log(leapYear([2000]));