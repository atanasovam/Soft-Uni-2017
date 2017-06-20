function biggestNum(input) {
    let [num1, num2, num3] = input.map(Number);
    let currN = Math.max(num1, num2, num3);
    console.log(currN);
}
biggestNum(["5", "7", "-2"]);