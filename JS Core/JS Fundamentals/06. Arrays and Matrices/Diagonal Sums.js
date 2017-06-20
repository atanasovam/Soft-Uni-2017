function diagonalSums(input) {
    let rightSum = 0;
    let leftSum = 0;

    for (let i = 0; i < input.length; i++) {
        rightSum += input[i][i];
        leftSum += input[i][input[i].length - 1 - i];
    }
    return rightSum + ' ' + leftSum;
}
console.log(diagonalSums([[20, 40], [10, 60]]));
console.log(diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));