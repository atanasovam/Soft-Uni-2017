/**
 * Created by atama on 24.5.2017 г..
 */
function cookingByNums(input) {
    let n = Number(input[0]);
    let currComand = input[1];
    let currResult = 0;

    for (let i = 1; i < input.length; i++) {
        currComand = input[i];
        currResult = calcCurrNum(currComand, n);
        n = currResult;

        console.log(currResult);
    }

    function calcCurrNum(comand, n) {
        let result = 0;

        switch (comand) {
            case "chop":
                result = n / 2;
                break;
            case "dice":
                result = Math.sqrt(n);
                break;
            case "spice":
                result = n + 1;
                break;
            case "bake":
                result = n * 3;
                break;
            case "fillet":
                result = n - n * 0.2;
                break;
            default:
                break;
        }
        return result;
    }
}


cookingByNums(["32", "chop", "chop", "chop", "chop", "chop"]);
console.log("------");
cookingByNums(["9", "dice", "spice", "chop", "bake", "fillet"]);