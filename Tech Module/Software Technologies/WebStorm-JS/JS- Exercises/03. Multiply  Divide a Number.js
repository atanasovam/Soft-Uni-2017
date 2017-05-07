function multiplyOrDivideNumbers(arr) {
    let n = Number(arr[0]);
    let x = Number(arr[1]);
    if(n <= x){
        console.log(n * x)
    }
    else if(n > x){
        console.log(n / x);
    }
}