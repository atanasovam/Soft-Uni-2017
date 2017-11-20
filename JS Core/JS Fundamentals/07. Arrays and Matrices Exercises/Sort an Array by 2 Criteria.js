function solve(args) {
    let n = +args[0],
        arr = [];
    for (let i = 1; i <= n; i += 1) {
        arr.push(args[i]);
    }
    
    arr.sort(function (a, b) { return a - b });
    for (let i = 0; i <= arr.length - 1; i += 1) {
        console.log(arr[i]);
    }
}
solve(["38", "32", "2", "3", "28", "2", "1"]);
