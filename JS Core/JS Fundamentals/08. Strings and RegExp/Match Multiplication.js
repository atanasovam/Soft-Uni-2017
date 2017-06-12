/**
 * Created by atama on 9.6.2017 г..
 */
function performMultiplications(str) {
    str = str.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1) * Number(num2));
    console.log(str);
}
performMultiplications('My bill: 2*2.50 (beer)');
