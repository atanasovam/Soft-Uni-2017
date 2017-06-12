/**
 * Created by atama on 11.6.2017 г..
 */
function equalFinish(str, substr) {
    return str.endsWith(substr);
}
// (str, substr) => { return str.endsWith(substr) }
console.log(equalFinish('This sentence ends with fun?', 'fun?'));
console.log(equalFinish('This is Houston, we have…', 'We have'));
