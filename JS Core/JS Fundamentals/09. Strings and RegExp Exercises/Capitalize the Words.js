/**
 * Created by atama on 11.6.2017 г..
 */
function capitalize(str) {
    let arr = Array.from(str.split(' ')).map(e => e.toLowerCase());
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][0].toUpperCase().concat(arr[i].substring(1)))
    }
    return result.join(' ');
}
capitalize('Was that Easy? tRY thIs onE for SiZe!');
capitalize('Capitalize these words');
