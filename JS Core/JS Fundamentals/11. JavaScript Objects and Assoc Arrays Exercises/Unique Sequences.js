function uniqueSeq(input) {
    let unique = new Map();
    let currSum;

    for (let i = 0; i < input.length; i++) {
        let str = JSON.parse(input[i]);
        currSum = str.reduce(function (a, b) {
            return a + b
        });
        if (!unique.has(currSum)) {
            unique.set(currSum, str)
        }
    }
    let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    console.log([...unique.keys()].sort((a, b) => customSort(a, b, unique)).join('\n'));
}
uniqueSeq([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);