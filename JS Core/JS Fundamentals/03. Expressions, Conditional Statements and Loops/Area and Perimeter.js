function calcAreaPerim([a, b]) {
    [a, b] = [a, b].map(Number);

    console.log(a * b); //area
    console.log(2 * (a + b)); //perimeter
}
calcAreaPerim([2, 2]);