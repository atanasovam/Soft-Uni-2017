function food(input) {
    let product = input[0];
    let output = false;

    let fruits =
        ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegetables =
        ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];

    for (let f = 0; f < fruits.length; f++) {
        /**output = fruits[f] === input ? console.log("fruit") : stopper = false;*/
        if (fruits[f] === product) {
            console.log("fruit");
            output = true;
            break;
        }
    }

    for (let v = 0; v < vegetables.length; v++) {
        /**output = vegetables[v] === input ? console.log("vegetable") : stopper = false;*/
        if (vegetables[v] === product) {
            console.log("vegetable");
            output = true;
            break;
        }
    }
    output === false ? console.log("unknown") : false;
}
food(["banana"]);
