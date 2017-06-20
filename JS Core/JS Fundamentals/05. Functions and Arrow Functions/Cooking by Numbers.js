function cookingByNums(input) {
    let [n, currComand] = input.map(Number);
    let currResult = 0;

    for (let i = 1; i < input.length; i++) {
        currComand = input[i];
        currResult = calcCurrNum(currComand, n);
        n = currResult;

        console.log(currResult);
    }

    function calcCurrNum(comand, n) {
        switch (comand) {
            case "chop": return n / 2;
            case "dice": return Math.sqrt(n);
            case "spice": return n + 1;
            case "bake": return n * 3;
            case "fillet": return n - n * 0.2;
            default:
                break;
        }
    }
}


cookingByNums(["32", "chop", "chop", "chop", "chop", "chop"]);
console.log("------");
cookingByNums(["9", "dice", "spice", "chop", "bake", "fillet"]);