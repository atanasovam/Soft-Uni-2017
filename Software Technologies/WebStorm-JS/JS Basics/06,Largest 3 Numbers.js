function largestThreeNumbers(arr) {
    let result = arr.map(Number);
    let sorted = result.sort((a, b) => b - a);
    let count = Math.min(3, arr.length);
    for (let i = 0; i < count; i++){
        console.log(sorted[i]);
    }
}

