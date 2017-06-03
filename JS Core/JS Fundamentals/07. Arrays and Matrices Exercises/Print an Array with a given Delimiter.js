/**
 * Created by atama on 2.6.2017 г..
 */
function buildStr(input) {
    let del = input[input.length - 1];
    input = input.filter((e, ide) => ide < input.length - 1);
    console.log(input.join(del));
}
buildStr(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);