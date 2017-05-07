/**
 * Created by atama on 7.5.2017 г..
 */

function typeOfNum(input) {
    let num = Number(input[0]);
    return (((num * 10) % 10 === 0)) ? evenOrOdd(num) : console.log("invalid");

    function evenOrOdd() {
        return (num % 2 === 0) ? console.log("even") : console.log("odd");
    }
}
typeOfNum(['3.5']);
