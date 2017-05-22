/**
 * Created by atama on 9.5.2017 г..
 */
function sumCurrency(input) {
    let word = input[0];
    let letter = input[1];
    let count = 0;

    for (let i = 0; row < word.length; row++) {
        if (word[row] === letter) {
            count++;
        }
    }
    return count;
}
sumCurrency(['hello', 'l']);
