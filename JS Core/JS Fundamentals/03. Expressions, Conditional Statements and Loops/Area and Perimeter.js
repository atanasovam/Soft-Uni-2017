/** Created by atama on 10.5.2017 г.. */

function calcAreaPerim([a, b]) {
    [a, b] = [a, b].map(Number);

    console.log(a * b); //area
    console.log(2 * (a + b)); //perimeter
}
calcAreaPerim([2, 2]);