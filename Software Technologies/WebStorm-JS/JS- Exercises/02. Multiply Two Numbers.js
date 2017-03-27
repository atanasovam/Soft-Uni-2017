function multiplyNums(n) {
    let num1 = Number(n[0]);
    let num2 = Number(n[1]);
    console.log(calculate(num1, num2));
    function calculate(n1, n2) {
        return n1 * n2 ;
    }
}