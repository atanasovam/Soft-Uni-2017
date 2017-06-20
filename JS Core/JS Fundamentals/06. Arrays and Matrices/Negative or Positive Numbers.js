function numbers(input) {
    let numbers = [[], []];

    for (let i = 0; i < input.length; i++) {
        input[i] >= 0 ? numbers[1].push(input[i]) : numbers[0].unshift(input[i]);
    }
    return numbers.map(r => r.join('\n')).join('\n');
}
console.log(numbers([7, -2, 8, 9]));
console.log();
console.log(numbers([3, -2, 0, -1]));
