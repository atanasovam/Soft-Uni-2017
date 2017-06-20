function equalNeighbors(input) {
    let pairs = 0;

    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === input[i + 1][j]) {
                pairs++;
            }
        }
        for (let j = 0; j < input[i].length - 1; j++) {
            if (input[i][j] === input[i][j + 1]) {
                pairs++;
            }
            if (input[i + 1][j] === input[i + 1][j + 1]) {
                pairs++;
            }
        }
    }
    return pairs;
}
console.log(equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));
console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));