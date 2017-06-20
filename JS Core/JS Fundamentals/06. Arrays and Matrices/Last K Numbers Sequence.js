function sumSeq(n, k) {
    let output = [1];
    let calcNum = function (arr, currIndex, sumKNumbers) {
        let startIndex = (currIndex <= sumKNumbers) ? 0 : currIndex - sumKNumbers;
        let currArray = arr.slice(startIndex, startIndex + sumKNumbers);

        return currArray.reduce((a, b) => a + b);
    };

    for (let i = 1; i < n; i++) {
        output[i] = calcNum(output, i, k)
    }
    return output.join('\n')
}
console.log(sumSeq(6, 3));
console.log('-----------');
console.log(sumSeq(8, 2));