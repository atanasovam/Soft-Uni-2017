function binaryLogarithm(nums) {
    for (let x of nums) {
        if (x !== 0) {
            console.log(Math.log2(x));
        }
    }
}

binaryLogarithm(['1024', '1048576', '256', '1', '2', '50', '100', "0"]);
