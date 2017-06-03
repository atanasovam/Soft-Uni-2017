/**
 * Created by atama on 2.6.2017 г..
 */
function print(input) {
    let steps = Number(input[input.length - 1]);
    let output = [];
    for (let i = 0; i < input.length-1; i += steps) {
        output.push(input[i]);
    }
    return output.join('\n');
}
console.log(print(['5', '20', ' 31', '4', '20', '2']));
