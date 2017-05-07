/**
 * Created by atama on 7.5.2017 г..
 */

function leapYear([n]) {
    return ((n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0))
        ? "yes" : "no";
}
console.log(leapYear([2000]));