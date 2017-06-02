/**
 * Created by atama on 23.5.2017 г..
 */
function uppercaseWords(input) {
    let str = input[0];
    let regex = /\W+/g;
    let array = str.split(regex);
    array = array.map(e => e.toUpperCase());

    let temp = [];
    for (let elem of array) { temp.push(elem) }

    array = temp;
    console.log(array.join(', '));
}
uppercaseWords(['Hi, how are you?']);
uppercaseWords(['hello']);
