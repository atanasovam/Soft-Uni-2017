/**
 * Created by atama on 11.6.2017 г..
 */
function findVarName(str) {
    let result = [];
    let regex = /\b_([a-zA-Z0-9]+)\b/g;
    let match = regex.exec(str);
    while (match) {
        result.push(match[1]);
        match = regex.exec(str);
    }
    return result.join(',');
}
console.log(findVarName('Calculate the _area of the _perfectRectangle object.'));
console.log(findVarName('The _id and _age variables are both integers.'));
console.log(findVarName('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));