/**
 * Created by atama on 13.6.2017 г..
 */
function countWordsMaps(strArr) {
    let output = new Map();

    strArr[0].split(/\W+/).filter(e => e !== '')
        .map(e => e.toLowerCase())
        .forEach(e => fillMap(e));
    [...output]
        .sort()
        .forEach(([word, count]) => console.log(`'${word}' -> ${count} times`));

    function fillMap(e) {
        if (!output.has(e)) {
            output.set(e, 1)
        } else {
            output.set(e, output.get(e) + 1)
        }
    }
}
countWordsMaps(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);