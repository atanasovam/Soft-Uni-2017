/**
 * Created by atama on 9.5.2017 г..
 */

function binaryLogarithm(nums) {
    nums = nums.map(Number);

    for (let x of nums) {
        if (x !== 0) {
            console.log(Math.log2(x));
        }
    }
}

binaryLogarithm(['1024', '1048576', '256', '1', '2', '50', '100', "0"]);
