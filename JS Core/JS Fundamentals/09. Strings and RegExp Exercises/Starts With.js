/**
 * Created by atama on 11.6.2017 г..
 */
function equalStart(str, substr) {
    return str.indexOf(substr) === 0 ? 'true' : 'false';
}
// (str, substr) => { return str.startsWith(substr) }
console.log(equalStart('How have you been?', 'how'));
console.log(equalStart('How have you been?', 'How'));