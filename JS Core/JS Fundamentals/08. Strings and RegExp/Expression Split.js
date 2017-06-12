/**
 * Created by atama on 9.6.2017 г..
 */
function expressionSplit(input) {
    let splitedStr = input.match(/[a-zA-Z0-9*=>{}"/+]+/g); // or input.split(/[\s.();,]+/g)
    return splitedStr.join('\n')
}
console.log(expressionSplit('let sum = 4 + 4,b = "wow";'));
console.log(expressionSplit('let sum = 1 * 2;if(sum > 2){\tconsole.log(sum);}'));