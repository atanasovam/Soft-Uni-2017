/**
 * Created by atama on 1.6.2017 г..
 */
function sumSeq(n, k) {
    let output = [1];

    let calcNum = function (arr, currIndex, sumKNumbers) {
        let startIndex = (currIndex <= sumKNumbers) ? 0 : currIndex - sumKNumbers;
        let currArray = arr.slice(startIndex, startIndex + sumKNumbers);
        let result = currArray.reduce((a, b) => a + b);
        return result;
    };

    for (let i = 1; i < n; i++) {
        output[i] = calcNum(output, i, k)
    }
    for (let n of output) {
        console.log(n)
    }
}
console.log(sumSeq(6, 3));
console.log('-----------');
console.log(sumSeq(8, 2));