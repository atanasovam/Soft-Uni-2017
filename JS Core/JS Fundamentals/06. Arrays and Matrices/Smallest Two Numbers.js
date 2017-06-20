function smallstTwo(input) {
    input.sort((a, b) => a - b);
    let arr = input.slice(0, 2);
    return arr.join(' ');
}
console.log(smallstTwo([30, 15, 50, 5]));
console.log(smallstTwo([3, 0, 10, 4, 7, 3]));