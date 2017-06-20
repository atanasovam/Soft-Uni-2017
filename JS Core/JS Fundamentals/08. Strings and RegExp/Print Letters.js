function printLett(str) {
    let output = [];
    for (let i in str) {
        output.push(`str[${i}] -> ${str[i]}`)
    }
    return output.join('\n');
}
function printLetts(str) {
    for (let i in str) {
        console.log(`str[${i}] -> ${str[i]}`)
    }
}
function print(str) {
    let s = Array.from(str);
    s.forEach((e, i) => s.push(`str[${i}] -> ${e}`));
    s.splice(0, str.length);
    return s.join('\n')
}
console.log(printLett('Hello, World!'));
console.log();
console.log(printLetts('Hello, World!'));
console.log();
console.log(print('Hello, World!'));