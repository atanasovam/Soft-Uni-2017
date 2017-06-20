function sortArray(input) {
    let arr = [];
    input.forEach(e => arr.push(e));
    arr.sort();

    return arr.sort((a, b) => a.length - b.length).join('\n')
}
console.log(sortArray(['alpha', 'beta', 'gamma']));