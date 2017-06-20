function solve([principal, interest, period, time]) {
    let f = principal * Math.pow((1 + (interest / 100) / (12 / period)), (12 / period) * time);
    console.log(f.toFixed(2));
}
solve([1500, 4.3, 3, 6]);
solve([100000, 5, 12, 25]);