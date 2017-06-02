/**
 * Created by atama on 1.6.2017 г..
 */
function filterOddPositions(input) {
    let output = [];

    let isUsefull = function (i) { return i % 2 === 0 };

    for (let i = 1; i <= input.length; i++) {
        if (isUsefull(i)) {
            output.push(input[i - 1] * 2)
        }
    }

    return output.reverse().join(' ');
}
console.log(filterOddPositions([10, 15, 20, 25]));
console.log();
console.log(filterOddPositions([3, 0, 10, 4, 7, 3]));