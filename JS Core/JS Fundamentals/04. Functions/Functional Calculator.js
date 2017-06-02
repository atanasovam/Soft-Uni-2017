/**
 * Created by atama on 23.5.2017 г..
 */
function functionalCalculator(input) {
    let firstOpr = Number(input[0]);
    let secondOpr = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch (operator) {
        case "+":
            result = firstOpr + secondOpr;
            break;
        case "-":
            result = firstOpr - secondOpr;
            break;
        case "*":
            result = firstOpr * secondOpr;
            break;
        case "/":
            result = firstOpr / secondOpr;
            break;
        default:
            console.log('Invalid input!');
            break;
    }
    console.log(result);
}
functionalCalculator(['2', '4', '+']);
functionalCalculator(['3', '3', '/']);
functionalCalculator(['1', '-1', '-']);
