function reverseStr(input) {
    let tempArr = input.join('');
    return Array.from(tempArr).reverse().join('')
}
(input)=> Array.from(input.join('')).reverse().join(''); // second variant
console.log(reverseStr(['I', 'am', 'student']));