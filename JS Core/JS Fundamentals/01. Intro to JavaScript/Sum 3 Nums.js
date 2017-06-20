function sum([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let sum = a + b + c;
    return console.log(sum);
}
sum(["3", "4", "1"]);