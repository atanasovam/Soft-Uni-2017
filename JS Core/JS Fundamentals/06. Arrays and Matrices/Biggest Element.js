/**
 * Created by atama on 1.6.2017 г..
 */
function biggestNum(input) {
    let biggest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (biggest < input[i][j]) {
                biggest = input[i][j];
            }
        }
    }
    return biggest;
}
console.log(biggestNum([[20, 50, 10], [8, 33, 145]]));
console.log(biggestNum([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));
