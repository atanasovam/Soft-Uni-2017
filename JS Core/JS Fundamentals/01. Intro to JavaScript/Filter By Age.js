/**
 * Created by atama on 9.5.2017 г..
 */
function ageFilter(input) {
    let min = Number(input[0]);
    let currentName = "";
    let currentAge = null;

    for (row = 1; row < input.length - 1; row += 2) {
        currentName = input[row];
        currentAge = Number(input[row + 1]);

        if (currentAge >= min) {
            console.log("{ name: '" + currentName + "', age: " + currentAge + " }");
        }
    }
}
ageFilter(['12', 'Ivan', '15', 'Asen', '9']);