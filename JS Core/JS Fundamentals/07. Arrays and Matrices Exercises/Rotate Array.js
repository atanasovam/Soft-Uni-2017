function rotate(input) {
    let r = Number(input[input.length - 1]);
    input.pop();
    let rot = Math.floor(r % input.length);

    for (let i = 0; i < rot; i++) {
        input.unshift(input[input.length - 1]);
        input.pop();
    }
    return input.join(' ');
}
console.log(rotate(['1', '2', '3', '4', '5']));
console.log();
console.log(rotate(['Banana', 'Orange', 'Coconut', 'Apple', '115']));