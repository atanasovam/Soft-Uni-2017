function isEvenPosition(input) {
    return input.filter((x, i) => i % 2 === 0).join(' ');
}
console.log(isEvenPosition([1, 2, 3, 4, 5, 6, 7, 8]));