function ageFilter(input) {
    let min = Number(input[0]);
    let currentName = "";
    let currentAge = null;

    for (let i = 1; i < input.length - 1; i += 2) {
        currentName = input[i];
        currentAge = Number(input[i + 1]);

        if (currentAge >= min) {
            console.log("{ name: '" + currentName + "', age: " + currentAge + " }");
        }
    }
}
ageFilter(['12', 'Ivan', '15', 'Asen', '9']);