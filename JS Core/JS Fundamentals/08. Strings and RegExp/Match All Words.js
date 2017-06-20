function match(input) {
    let regx = new RegExp(/\w+/g);
    return input.match(regx).join('|');
}
console.log(match('_(Underscores) are.. also word ...characters'));