/**
 * Created by atama on 12.6.2017 г..
 */
function sumByTowns(input) {
    let result = {};
    for (let i = 0; i < input.length; i += 2) {
        let [currCity, sum] = [input[i], Number(input[i + 1])];
        if (result[currCity] === undefined) {
            result[currCity] = sum;
        } else {
            result[currCity] += sum;
        }
    }
    return JSON.stringify(result);
}
console.log(sumByTowns(['Sofia 20 Varna 3 Sofia 5 Varna 4']));