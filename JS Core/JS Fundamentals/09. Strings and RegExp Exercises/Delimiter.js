function splitByDel(str, del) {
    return str.split(del).join('\n')
}
console.log(splitByDel('One-Two-Three-Four-Five', '-')); //http://platform.softuni.bg
console.log(splitByDel('http://platform.softuni.bg', '.'));
