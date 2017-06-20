function functionalCalculator(input) {
    let [firstOpr, secondOpr, operator] = input.map(Number);

    switch (operator) {
        case "+": return firstOpr + secondOpr;
        case "-": return firstOpr - secondOpr;
        case "*": return firstOpr * secondOpr;
        case "/": return firstOpr / secondOpr;
        default: return 'Invalid input!';
    }
}
console.log(functionalCalculator(['2', '4', '+']));
console.log(functionalCalculator(['3', '3', '/']));
console.log(functionalCalculator(['1', '-1', '-']));
