function modifyAverage(n) {
    n = n.toString();

    while (sumNumbers(n) / n.length <= 5) { n += '9' }
    return n;

    function sumNumbers(n) {
        let sum = 0;
        for (let i = 0; i < n.length; i++) {
            sum += Number(n[i]);
        }
        return sum;
    }
}
console.log(modifyAverage(['101']));
console.log(modifyAverage(['5835']));
