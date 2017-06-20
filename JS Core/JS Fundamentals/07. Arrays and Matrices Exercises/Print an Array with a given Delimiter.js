function buildStr(input) {
    let del = input[input.length - 1];
    input = input.filter((e, ide) => ide < input.length - 1);
    return input.join(del)
}
console.log(buildStr(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));