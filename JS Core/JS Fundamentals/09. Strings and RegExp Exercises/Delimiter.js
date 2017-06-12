/**
 * Created by atama on 11.6.2017 г..
 */
function splitByDel(str, del) {
    return str.split(del).join('\n')
}
console.log(splitByDel('One-Two-Three-Four-Five', '-')); //http://platform.softuni.bg
console.log(splitByDel('http://platform.softuni.bg', '.'));
