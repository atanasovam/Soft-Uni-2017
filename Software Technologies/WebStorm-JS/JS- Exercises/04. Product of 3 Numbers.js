function positiveOrNegative(arr) {
    let n = Number(arr[0]);
    let x = Number(arr[1]);
    let z = Number(arr[2]);
    let result = n * x * z;

    if(result >= 0){
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}