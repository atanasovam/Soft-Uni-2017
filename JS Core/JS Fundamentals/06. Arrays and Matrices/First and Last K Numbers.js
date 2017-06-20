function kNumbers(input) {
    let k = input[0];
    let output = [[], []];

    if (input.length === 2) {
        return `${input[1]}\n${input[1]}`;
    } else {
        for (let i = 1; i <= k; i++) {
            output[0].push(input[i]);
        }
        for (let i = input.length - 1; i > input.length - 1 - k; i--) {
            output[1].push(input[i]);
        }

        output[1].reverse();
        return output.map(r => r.join('\n')).join('\n');
    }
}
console.log(kNumbers([2, 1, 5, 3, 4]));
console.log('-----------------');
console.log(kNumbers([1, 5]));
