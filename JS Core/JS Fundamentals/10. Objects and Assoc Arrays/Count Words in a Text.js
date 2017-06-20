function countWords(strArr) {
    let arr = [];
    let result = {};

    let regex = /\w+/gi;
    let match = regex.exec(strArr);

    while (match) {
        arr.push(match[0]);
        match = regex.exec(strArr);
    }

    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] === undefined
            ? result[arr[i]] = 1
            : result[arr[i]] += 1
    }
    return JSON.stringify(result)
}

console.log(countWords(['Far too slow, you\'re far too slow.']));